export class Fireball {
    x: number;
    y: number;
    width: number = 30;
    height: number = 30;
    speed: number = 8;
    image: HTMLImageElement;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.image = new Image();
      this.image.src = "/Arena/bola-de-gelo.png"; 
    }
  
    update() {
      this.x += this.speed; 
    }
  
    draw(ctx: CanvasRenderingContext2D) {
      if (this.image.complete) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      } else {
        ctx.fillStyle = "#FF4500";
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
  }
  