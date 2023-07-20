import {CommonModule} from '@angular/common';
import {
  Component,
  ViewChild,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: `app-root`,
  templateUrl: `./test.component.html`,
})
export class TestComponent {
  @ViewChild(`id`)
  private asd: unknown;

  public get x(): string {
    return `x`;
  }
}
