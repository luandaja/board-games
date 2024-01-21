import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  template: `ABC <router-outlet></router-outlet>`,
  styles: ``,
})
export class AppComponent {
  title = 'board-games';
}
