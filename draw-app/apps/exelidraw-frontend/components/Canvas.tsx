"use client";

import { initDraw } from "@/app/draw";
import { useEffect, useRef } from "react";

export function Canvas({roomId}: {roomId: string}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      initDraw(canvasRef.current, roomId);
    }
  }, [canvasRef, roomId]);
  return (
    <div>
      <canvas width={2000} height={1000} ref={canvasRef}></canvas>
    </div>
  );
}
