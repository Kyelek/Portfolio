import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { Icon } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  template: `
    @let p = profile();
    <section id="contacto" class="contact" aria-labelledby="contact-title">
      <div class="container contact__inner">
        <div>
          <p class="eyebrow">Contacto</p>
          <h2 id="contact-title">¿Buscas a alguien que resuelva, no solo que programe?</h2>
          <p class="lead">
            Estoy abierto a ofertas de empleo, proyectos freelance y colaboraciones. Escríbeme y te
            respondo lo antes posible.
          </p>
        </div>
        <div class="actions">
          <a class="btn btn--primary" [href]="'mailto:' + p.email">
            <app-icon name="mail" [size]="16" /> Enviar un email
          </a>
          <button type="button" class="btn btn--ghost" (click)="copyEmail(p.email)">
            <app-icon [name]="copied() ? 'check' : 'copy'" [size]="16" />
            {{ copied() ? 'Email copiado' : p.email }}
          </button>
          <div class="links">
            @for (s of p.socials; track s.url) {
              <a [href]="s.url" target="_blank" rel="noopener">
                <app-icon [name]="s.icon" [size]="16" /> {{ s.label }}
              </a>
            }
            <a routerLink="/cv"><app-icon name="download" [size]="16" /> Currículum</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .contact {
      padding-block: clamp(4rem, 9vw, 6.5rem);
      background: var(--text);
      color: var(--bg);
    }
    .contact__inner {
      display: grid;
      grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
      align-items: end;
      gap: var(--space-12);
    }
    .eyebrow {
      color: color-mix(in srgb, var(--bg) 55%, transparent);
    }
    h2 {
      margin: var(--space-4) 0;
      font-size: var(--text-4xl);
    }
    .lead {
      max-width: 34rem;
      margin: 0;
      font-size: var(--text-lg);
      color: color-mix(in srgb, var(--bg) 70%, transparent);
    }
    .actions {
      display: grid;
      gap: var(--space-3);
    }
    .btn--primary {
      background: var(--bg);
      color: var(--text);
    }
    .btn--ghost {
      background: transparent;
      color: var(--bg);
      border-color: color-mix(in srgb, var(--bg) 30%, transparent);
      &:hover {
        border-color: var(--bg);
      }
    }
    .links {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-6);
      margin-top: var(--space-3);
      a {
        display: inline-flex;
        align-items: center;
        gap: var(--space-2);
        font-size: var(--text-sm);
        color: color-mix(in srgb, var(--bg) 75%, transparent);
        text-decoration: none;
        &:hover {
          color: var(--bg);
        }
      }
    }
    @media (max-width: 860px) {
      .contact__inner {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class Contact {
  protected readonly profile = inject(PortfolioService).profile;
  protected readonly copied = signal(false);

  protected async copyEmail(email: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }
}
