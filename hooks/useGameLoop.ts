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
  const currentBackgroundImage = useRef<HTMLImageElement | null>(null); 

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

    const loadBackgroundImage = (imageUrl: string) => {
      if (currentBackgroundImage.current && currentBackgroundImage.current.src === imageUrl) {
        return; 
      }
      const image = new Image();
      image.src = imageUrl;
      image.onload = () => {
        currentBackgroundImage.current = image;
      };
    };

    // Game loop
    const gameLoop = () => {
      let imageUrl = "";

      if (gameState.environment === "dragonpit") {
        imageUrl = "/Arena/Dragonpit (Fosso dos Dragões).jpg";
      } else if (gameState.environment === "valyria") {
        imageUrl = "/Arena/Ancient Valyria (Valyria Antiga).jpg"; 
      } else if (gameState.environment === "harrenhal") {
        imageUrl = "/Arena/Harrenhal.jpg"; 
      } else {
        imageUrl = "/Arena/default.jpg"; 
      }

      loadBackgroundImage(imageUrl);

      if (currentBackgroundImage.current) {
        ctx.drawImage(currentBackgroundImage.current, 0, 0, canvas.width, canvas.height);
      }

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
