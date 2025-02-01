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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        gameState.dragon.y = Math.max(gameState.dragon.y - 10, 0);
      } else if (event.key === "ArrowDown") {
        gameState.dragon.y = Math.min(gameState.dragon.y + 10, canvas.height - gameState.dragon.height);
      } else if (event.key === " ") {
        gameState.dragon.shoot(gameState.projectiles);
      } else if (event.key === "Escape") {
        location.reload(); 
      }
    };

    window.addEventListener("keydown", handleKeyDown);

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

      const newState = { ...gameState };

      if (Math.random() < 0.02) {
        const y = Math.random() * (canvas.height - 50);
        newState.enemies.push(new Enemy(canvas.width, y));
      }

      newState.enemies = newState.enemies.filter((enemy) => {
        enemy.update();

        let destroyed = false;
        gameState.projectiles.forEach((fireball, index) => {
          if (
            fireball.x < enemy.x + enemy.width &&
            fireball.x + fireball.width > enemy.x &&
            fireball.y < enemy.y + enemy.height &&
            fireball.y + fireball.height > enemy.y
          ) {
            newState.enemies.splice(newState.enemies.indexOf(enemy), 1);
            gameState.projectiles.splice(index, 1);
            newState.score += 10;
            destroyed = true;
          }
        });

        if (!destroyed && enemy.x <= 0) {
          newState.score = Math.max(0, newState.score - 1);
        }

        enemy.draw(ctx);
        return enemy.x > -enemy.width;
      });

      ctx.save();
      gameState.dragon.draw(ctx);
      ctx.restore();

      gameState.projectiles.forEach((fireball) => {
        fireball.update();
        fireball.draw(ctx);
      });

      setGameState(newState);

      // progress bar
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "20px Arial";
      ctx.fillText(`Pontuação: ${gameState.score}`, 30, 50); 

      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.moveTo(30, 65);  
      ctx.arcTo(130, 65, 130, 70, 5); 
      ctx.arcTo(130, 70, 30, 70, 5); 
      ctx.arcTo(30, 70, 30, 65, 5);  
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#0f0";
      ctx.beginPath();
      ctx.moveTo(30, 65); 
      ctx.arcTo(30 + gameState.score, 65, 30 + gameState.score, 70, 5); 
      ctx.arcTo(30 + gameState.score, 70, 30, 70, 5);
      ctx.arcTo(30, 70, 30, 65, 5); 
      ctx.closePath();
      ctx.fill();

      if (gameState.score >= 100) {
        return;
      }

      frameRef.current = requestAnimationFrame(gameLoop);
    };

    frameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [canvasRef, gameState, setGameState]);
}
