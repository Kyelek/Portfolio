import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <div class="footer container">
      <p>© {{ year }} {{ profile().name }} · Hecho con Angular y desplegado en Vercel</p>
      <ul>
        @for (social of profile().socials; track social.url) {
          <li>
            <a [href]="social.url" target="_blank" rel="noopener" [attr.aria-label]="social.label">
              <app-icon [name]="social.icon" [size]="18" />
            </a>
          </li>
        }
      </ul>
    </div>
  `,
  styles: `
    :host {
      display: block;
      border-top: 1px solid var(--border);
    }
    .footer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-4);
      padding-block: var(--space-8);
      font-size: var(--text-sm);
      color: var(--text-muted);
    }
    p {
      margin: 0;
    }
    ul {
      display: flex;
      gap: var(--space-4);
      margin: 0;
      padding: 0;
      list-style: none;
    }
    a {
      color: var(--text-muted);
      &:hover {
        color: var(--accent);
      }
    }
  `,
})
export class Footer {
  protected readonly profile = inject(PortfolioService).profile;
  protected readonly year = new Date().getFullYear();
}
