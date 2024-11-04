import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { RunGameComponent } from "./run-game/run-game.component";
import { GameNoCanvasComponent } from "./game-no-canvas/game-no-canvas.component";

const routes: Routes = [
  { path: '', redirectTo: '/run-game', pathMatch: 'full' },
  { path: 'run-game', component: RunGameComponent },
  { path: 'game-no-canvas', component: GameNoCanvasComponent }
]

@NgModule({
  declarations: [],
  imports:  [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }