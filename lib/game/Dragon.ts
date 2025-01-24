export class Dragon {
  x: number = 100;
  y: number = 300;
  width: number = 100;
  height: number = 60;
  speed: number = 5;
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  moveUp() {
    this.y = Math.max(0, this.y - this.speed);
  }

  moveDown() {
    this.y = Math.min(window.innerHeight - this.height, this.y + this.speed);
  }

  shoot() {
    // Will implement projectile creation
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#FFA500";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}