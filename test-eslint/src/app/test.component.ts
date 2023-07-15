import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: `app-root`,
  templateUrl: `./test.component.html`,
})
export class TestComponent {
  public get x(): string {
    return `x`;
  }
}
