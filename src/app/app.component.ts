import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { TuiRootModule } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,

    HeaderComponent,

    TuiRootModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  styles: [],
})
export class AppComponent {
  title = 'reddit';
}
