import { Component, ElementRef, ViewChild } from '@angular/core';
import { GameCanvas } from './GameCanvas';

@Component({
  selector: 'app-run-game',
  templateUrl: './run-game.component.html',
  styleUrl: './run-game.component.css'
})
export class RunGameComponent {
  @ViewChild('gameCanvas') gameCanvas!: ElementRef;

  private canvas!: GameCanvas;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.canvas = new GameCanvas(this.gameCanvas.nativeElement as HTMLCanvasElement);
  }
}
