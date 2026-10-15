import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <section class="container">
      <p class="code">404</p>
      <h1>Esta página no existe</h1>
      <p>Pero tengo varias que sí. Empieza por los proyectos.</p>
      <a routerLink="/" class="btn btn--primary">Volver al inicio</a>
    </section>
  `,
  styles: `
    section {
      padding-block: var(--space-24);
      text-align: center;
    }
    .code {
      margin: 0;
      font-family: var(--font-mono);
      font-size: 6rem;
      color: var(--accent);
    }
    h1 {
      margin: 0 0 var(--space-2);
    }
    p:not(.code) {
      margin: 0 0 var(--space-8);
      color: var(--text-muted);
    }
  `,
})
export default class NotFound {}
