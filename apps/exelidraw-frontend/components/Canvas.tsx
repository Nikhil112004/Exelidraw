import { initDraw } from "@/app/draw";
import { useEffect, useRef, useState } from "react";
import { IconButton } from "./iconButton";
import { Circle, Pencil, RectangleHorizontalIcon } from "lucide-react";
import { Game } from "@/app/draw/Game";

export type Tool = "circle" | "rectangle" | "pencil";

export function Canvas({roomId, socket}: {
    roomId: string
    socket: WebSocket
}) {
     const canvasRef = useRef<HTMLCanvasElement>(null);
     const [selectedTool, setSelectedTool] = useState<Tool>("pencil");
     const [game, setGame] = useState<Game>();
     useEffect(() => {
      game?.setTool(selectedTool);
     },[selectedTool, game])

     useEffect(() => {
    if (canvasRef.current) {
      const g = new Game(canvasRef.current, roomId, socket);
      setGame(g);

      return () => {
        g.destroy();
      }
    }
  }, [canvasRef, roomId, socket]);
  return <div style={{
    height: "100vh",
    overflow: "hidden"
  }}>
     <canvas width={window.innerWidth} height={window.innerHeight} ref={canvasRef}></canvas>
     <Topbar setSelectedTool={setSelectedTool} selectedTool={selectedTool} />
  </div>
}
function Topbar({ selectedTool, setSelectedTool }: { selectedTool: Tool,
  setSelectedTool: (s: Tool) => void
 }) {
  return <div style={{
    position: "fixed",
    top: 10,
    left: 10
  }}>
    <div className="flex gap-2">
      <IconButton onClick={() => {setSelectedTool("pencil")}} activated={selectedTool === "pencil"}  icon={<Pencil />} > </IconButton>
      <IconButton onClick={() => {setSelectedTool("rectangle")}} activated={selectedTool === "rectangle"} icon={<RectangleHorizontalIcon />} > </IconButton>
      <IconButton onClick={() => {setSelectedTool("circle")}} activated={selectedTool === "circle"} icon={<Circle />}> </IconButton>
    </div>
  </div>
}