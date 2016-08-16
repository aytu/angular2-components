import { Component } from '@angular/core';
import {PuzzleComponent} from './puzzle.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: '<my-puzzle></my-puzzle>',
  styleUrls: ['app.component.css'],
  directives: [PuzzleComponent]
})

export class AppComponent {
  title = 'app works!';
}
