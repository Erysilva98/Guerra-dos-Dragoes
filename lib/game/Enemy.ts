export class Enemy {
  x: number;
  y: number;
  width: number = 50;
  height: number = 50;
  speed: number = 3;
  image: HTMLImageElement; 

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;

    this.image = new Image();
    this.image.src = "/Arena/bola-de-fogo.png"; 
  }

  update() {
    this.x -= this.speed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.image.complete) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height); 
    } else {
      ctx.fillStyle = "blue"; 
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}
