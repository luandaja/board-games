import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'lbg-root',
  template: `<h1>Welcome board-games</h1>
    <router-outlet></router-outlet>`,
  styles: ``,
})
export class AppComponent {}
