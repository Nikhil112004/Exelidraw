"use client";
import { initDraw } from "@/app/draw";
import { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef<HtmlCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      initDraw(canvasRef.current);
    }
  }, [canvasRef]);

  return (
    <div>
      <canvas width={2000} height={1000} ref={canvasRef}></canvas>
    </div>
  );
}
