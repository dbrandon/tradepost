
export class GameCanvas {
  private ctx: CanvasRenderingContext2D;

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx  = canvas.getContext('2d') as CanvasRenderingContext2D;

    this.handleResize();

    addEventListener('resize', event => this.handleResize());
  }

  private paint() {
    this.clearCanvas();

    this.ctx.font = '12pt serif';
    let text = 'Trading Post';
    this.ctx.fillText(text, 50, 50);
    const tm = this.ctx.measureText(text);
    
    const h1 = tm.fontBoundingBoxAscent + tm.fontBoundingBoxDescent;
    const h2 = tm.actualBoundingBoxAscent + tm.actualBoundingBoxDescent;
    this.ctx.strokeStyle = '#000';
    this.ctx.strokeRect(50, 50 - tm.fontBoundingBoxAscent, tm.width, h1);

    this.ctx.strokeStyle = '#f00';
    this.ctx.strokeRect(50, 50 - tm.actualBoundingBoxAscent, tm.width, h2);
  }

  private clearCanvas() {
    const saved = this.ctx.fillStyle;
    this.ctx.fillStyle = '#fff';
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    this.ctx.fillStyle = saved;
  }

  private handleResize() {
    this.canvas.setAttribute('width', '' + window.innerWidth);
    this.canvas.setAttribute('height', '' + window.innerHeight);

    this.paint();
  }
}