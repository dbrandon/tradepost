
export class GameCanvas {
  constructor(private canvas: HTMLCanvasElement) {
    const ctx  = canvas.getContext('2d') as CanvasRenderingContext2D;

    ctx.strokeText('Trade Post', 50, 50);
  }
}