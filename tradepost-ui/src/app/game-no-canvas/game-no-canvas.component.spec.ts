import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNoCanvasComponent } from './game-no-canvas.component';

describe('GameNoCanvasComponent', () => {
  let component: GameNoCanvasComponent;
  let fixture: ComponentFixture<GameNoCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameNoCanvasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameNoCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
