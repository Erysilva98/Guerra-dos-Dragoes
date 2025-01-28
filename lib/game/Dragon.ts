export class Dragon {
  x: number = 100;
  y: number = 300;
  width: number = 120;
  height: number = 80;
  speed: number = 5;
  type: string;
  image: HTMLImageElement | null;

  constructor(type: string) {
    this.type = type;
    this.image = null; 
    this.loadImage(); 
  }

  loadImage() {
    switch (this.type) {
      case "dragonpit":
        this.image = new Image();
        this.image.src = "/Dragon/personagem-caraxes.png"; 
        break;
      case "valyria":
        this.image = new Image();
        this.image.src = "/Dragon/personagem-meleys.png";
        break;
      case "harrenhal":
        this.image = new Image();
        this.image.src = "/Dragon/personagem-vermithor.png";
        break;
      default:
        this.image = null; 
        break;
    }
  }

  moveUp() {
    this.y = Math.max(0, this.y - this.speed);
  }

  moveDown() {
    this.y = Math.min(window.innerHeight - this.height, this.y + this.speed);
  }

  shoot() {
    // Implementação do disparo de projétil (não alterado)
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.image) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = "#0000FF"; 
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}
