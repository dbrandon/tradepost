import { GameObject } from "./GameObject";
import { Point } from "./Point";

export class Post extends GameObject {
  constructor(private location: Point, private name: string) {
    super();
  }

  override render(ctx: CanvasRenderingContext2D) {
    ctx.font = '12pt serif';
    const tm = ctx.measureText(this.name);

    ctx.fillStyle = '#000';
    ctx.fillText(this.name, this.location.x - tm.width/2, this.location.y);

    ctx.strokeStyle = '#000';
    ctx.strokeRect(this.location.x - tm.width/2 - 2, this.location.y - tm.fontBoundingBoxAscent,
      tm.width + 4, tm.fontBoundingBoxAscent + tm.fontBoundingBoxDescent);
  }
}