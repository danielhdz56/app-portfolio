import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [``],
  template: `
    <app-navbar>
    </app-navbar>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  title = 'app';
}
