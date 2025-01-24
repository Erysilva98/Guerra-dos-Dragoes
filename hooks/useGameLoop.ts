"use client";

import { useEffect, useRef } from "react";
import { GameState } from "@/lib/game/types";
import { Enemy } from "@/lib/game/Enemy";

export function useGameLoop(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  gameState: GameState,
  setGameState: (state: GameState) => void
) {
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Game loop
    const gameLoop = () => {
      // Clear canvas with environment-specific background color
      if (gameState.environment === "dragonpit") {
        ctx.fillStyle = "gray"; // Fundo cinza para ruínas
      } else if (gameState.environment === "ancient-valyria") {
        ctx.fillStyle = "red"; // Fundo avermelhado para lava
      } else if (gameState.environment === "harrenhal") {
        ctx.fillStyle = "black"; // Fundo preto para tempestade
      } else {
        ctx.fillStyle = "#1a1a1a"; // Cor padrão
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update game state
      const newState = { ...gameState };

      // Spawn enemies
      if (Math.random() < 0.02) {
        const y = Math.random() * (canvas.height - 50);
        newState.enemies.push(new Enemy(canvas.width, y));
      }

      // Update enemies
      newState.enemies = newState.enemies.filter((enemy) => {
        enemy.update();
        enemy.draw(ctx);
        return enemy.x > -enemy.width;
      });

      // Draw dragon
      gameState.dragon.draw(ctx);

      // Update game state
      setGameState(newState);
      frameRef.current = requestAnimationFrame(gameLoop);
    };

    frameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [canvasRef, gameState, setGameState]);
}
