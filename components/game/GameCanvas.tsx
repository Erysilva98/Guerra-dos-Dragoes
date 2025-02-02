"use client";

import { useEffect, useRef, useState } from "react";
import { useGameLoop } from "@/hooks/useGameLoop";
import { Dragon } from "@/lib/game/Dragon";
import { GameState } from "@/lib/game/types";
import GameResultModal from "@/components/GameResultModal";

interface GameCanvasProps {
  dragonType: string;
}

export default function GameCanvas({ dragonType }: GameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isVictory, setIsVictory] = useState(false);

  const [gameState, setGameState] = useState<GameState>({
    dragon: new Dragon(dragonType),
    enemies: [],
    projectiles: [],
    score: 0,
    health: 100,
    shield: 50,
    stamina: 100,
    environment: dragonType,
  });

  useGameLoop(canvasRef, gameState, (newState) => {
    setGameState(newState);

    if (newState.score >= 100) {
      setIsVictory(true);
    } else if (newState.score === 0) {
      setIsGameOver(true); 
    }
  });

  const restartGame = () => {
    setIsGameOver(false);
    setIsVictory(false);
    setGameState({
      dragon: new Dragon(dragonType),
      enemies: [],
      projectiles: [],
      score: 0,
      health: 100,
      shield: 50,
      stamina: 100,
      environment: dragonType,
    });
  };

  const modalText = isVictory
    ? {
        title: "🎉 Parabéns! 🎉",
        message: "🔥 Seu dragão dominou os céus! O reino está salvo!",
        buttonLabel: "Jogar Novamente",
      }
    : isGameOver
    ? {
        title: "🔥 Game Over! 🔥",
        message: "⚔️ Seu dragão caiu em batalha! Tente novamente.",
        buttonLabel: "Tentar Novamente",
      }
    : { title: "", message: "", buttonLabel: "" };

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ imageRendering: "pixelated" }} />
      <GameResultModal 
        isOpen={isVictory || isGameOver} 
        onClose={() => setTimeout(() => location.reload(), 1)} 
        onRestart={restartGame}
        modalText={modalText}
      />
    </>
  );
}
