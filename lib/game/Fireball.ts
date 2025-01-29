export class Fireball {
    x: number;
    y: number;
    width: number = 30;
    height: number = 30;
    speed: number = 10;
    image: HTMLImageElement;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.image = new Image();
      this.image.src = "/Dragon/fireball.png"; // Caminho da imagem do projétil
    }
  
    update() {
      this.x += this.speed; // Move o projétil para a direita
    }
  
    draw(ctx: CanvasRenderingContext2D) {
      if (this.image.complete) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      } else {
        ctx.fillStyle = "#FF4500"; // Cor de fallback
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
  }
  