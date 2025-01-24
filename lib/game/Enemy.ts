export class Enemy {
  x: number;
  y: number;
  width: number = 50;
  height: number = 50;
  speed: number = 3;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  update() {
    this.x -= this.speed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}