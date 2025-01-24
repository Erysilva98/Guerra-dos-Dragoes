"use client";

import { useEffect, useRef, useState } from "react";
import { useGameLoop } from "@/hooks/useGameLoop";
import { Dragon } from "@/lib/game/Dragon";
import { GameState } from "@/lib/game/types";

interface GameCanvasProps {
  dragonType: string;
}

export default function GameCanvas({ dragonType }: GameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>({
    dragon: new Dragon(dragonType),
    enemies: [],
    projectiles: [],
    score: 0,
    health: 100,
    shield: 50,
    stamina: 100,
    environment: dragonType, // Adiciona o tipo do capítulo como parte do ambiente
  });

  useGameLoop(canvasRef, gameState, setGameState);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawBackground = () => {
      if (gameState.environment === "dragonpit") {
        ctx.fillStyle = "#3a3a3a"; // Cinza para ruínas
      } else if (gameState.environment === "ancient-valyria") {
        ctx.fillStyle = "#FF6347"; // Vermelho para lava
      } else if (gameState.environment === "harrenhal") {
        ctx.fillStyle = "#1a1a1a"; // Preto para tempestade
      } else {
        ctx.fillStyle = "#1a1a1a"; // Cor padrão
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
      drawBackground(); // Renderiza o background

      gameState.dragon.draw(ctx); // Renderiza o dragão

      requestAnimationFrame(gameLoop); // Loop do jogo
    };

    requestAnimationFrame(gameLoop);
  }, [gameState]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
