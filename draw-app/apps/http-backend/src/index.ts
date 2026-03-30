import express, { Request, Response } from "express";
 import jwt from "jsonwebtoken";
 import { JWT_SECRET } from "@repo/backend-common";
import { middleware } from "./middleware";
import { CreateUserSchema, Signinschema, CreateRoomSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/client";

export interface AuthRequest extends Request {
  userId?: string;
}


const app = express();
app.use(express.json());

 app.post("/signup", async (req, res) => {
    const ParsedData = CreateUserSchema.safeParse(req.body);
    if(!ParsedData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    } try{
       const user = await prismaClient.user.create({
        data: {
            email: ParsedData.data?.username,
            password: ParsedData.data.password,
            name: ParsedData.data.name,
        }
    })  
    res.json({
        userId: user.id
    })
    } catch(e) {
        res.status(411).json({
            message: "User already exists"
        })
    }
 })

 app.post("/signin", async (req, res) => {
    
      const parsedData = Signinschema.safeParse(req.body);
    if(!parsedData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

    const user = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username,
            password: parsedData.data.password
        }
    })

    if(!user) {
        res.status(403).json({
            message: "Not authorized"
        })
        return;
    }

    const token =jwt.sign({
        userId: user?.id
    }, JWT_SECRET);
    res.json({
        token
    })
 })

 app.post("/room", middleware, async (req: AuthRequest, res: Response) => {
  const parsedData = CreateRoomSchema.safeParse(req.body);

  if (!parsedData.success) {
    res.json({
      message: "Incorrect inputs"
    });
    return;
  }

  const userId = req.userId;

  if (!userId) {
    return res.status(403).json({
      message: "Unauthorized"
    });
  }

  try{
    const room = await prismaClient.room.create({
    data: {
      slug: parsedData.data.name,
      adminId: userId
    }
  });

  res.json({
    roomId: room.id
  });
  } catch(e) {
    res.status(411).json({
      message: "Room already exists with this name"
    })
  }
  
});

app.get("/chats/:roomId", async (req, res) => {
  const roomId = Number(req.params.roomId);
  const messages = await prismaClient.chat.findMany({
    where: {
      roomId: roomId
    },
    orderBy: {
      id: "desc"
    },
    take: 50,
  });
  res.json({ messages });
});

app.get("/room/:slug", async (req, res) => {
  const slug = req.params.slug;
  const room = await prismaClient.room.findFirst({
    where: {
      slug
    }
  });
    
  res.json({ 
    room 
  })
});

  app.listen(3001);