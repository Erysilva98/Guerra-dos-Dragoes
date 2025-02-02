// export class Iceball {
//     x: number;
//     y: number;
//     width: number = 20;
//     height: number = 20;
//     speed: number = 10;
//     image: HTMLImageElement;
  
//     constructor(x: number, y: number) {
//       this.x = x;
//       this.y = y;
//       this.image = new Image();
//       this.image.src = "/Arena/bola-de-fogo.png"; // Caminho para a imagem da bola de gelo
//     }
  
//     update() {
//       this.x += this.speed; // Move o projétil para a direita
//     }
  
//     draw(ctx: CanvasRenderingContext2D) {
//       if (this.image.complete) {
//         ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
//       } else {
//         ctx.fillStyle = "#00FFFF"; // Cor de fallback
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//       }
//     }
//   }
  