import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Header, Footer],
  template: `
    <a class="skip-link" href="#main">Saltar al contenido</a>
    <app-header class="no-print" />
    <main id="main">
      <router-outlet />
    </main>
    <app-footer class="no-print" />
  `,
  styleUrl: './app.scss',
})
export class App {}
