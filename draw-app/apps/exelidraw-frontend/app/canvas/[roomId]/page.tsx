"use client";
import { initDraw } from "@/app/draw";
import { Canvas } from "@/components/Canvas";
import { useEffect, useRef } from "react";

export default async function CanvasPage({params}: {
    params: {
        roomId: string
    }
}) {
    const roomId = (await params).roomId;
    console.log(roomId)
    return <Canvas roomId={roomId} />
}
