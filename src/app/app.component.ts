import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterLinkActive, RouterLink, RouterOutlet],
})
export class AppComponent {
  title = 'rxjsWithSignalFoRAngular';
  pageTitle = 'Acme Product Management';

  cartCount = 0;
}
