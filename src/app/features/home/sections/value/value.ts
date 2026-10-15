import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { Icon } from '../../../../shared/components/icon/icon';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-value',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, SectionHeading, RevealDirective],
  template: `
    <section id="aporte" class="section container" aria-labelledby="value-title">
      <app-section-heading
        index="02"
        headingId="value-title"
        eyebrow="Qué aporto"
        title="Más que código: criterio, autonomía y visión de producto"
        [subtitle]="profile().summary"
      />
      <ul class="grid">
        @for (s of strengths(); track s.title) {
          <li class="item" appReveal>
            <app-icon class="item__icon" [name]="s.icon" [size]="20" />
            <h3>{{ s.title }}</h3>
            <p>{{ s.description }}</p>
          </li>
        }
      </ul>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      margin: 0;
      padding: 0;
      list-style: none;
      border-top: 1px solid var(--border-strong);
    }
    .item {
      padding: var(--space-8) var(--space-6) var(--space-6) 0;
    }
    .item + .item {
      padding-left: var(--space-6);
      border-left: 1px solid var(--border);
    }
    .item__icon {
      color: var(--accent);
    }
    h3 {
      margin: var(--space-4) 0 var(--space-2);
      font-size: var(--text-lg);
    }
    p {
      margin: 0;
      font-size: var(--text-sm);
      color: var(--text-muted);
    }
    @media (max-width: 1000px) {
      .grid {
        grid-template-columns: 1fr;
      }
      .item,
      .item + .item {
        padding: var(--space-6) 0;
        border-left: 0;
        border-bottom: 1px solid var(--border);
      }
    }
  `,
})
export class Value {
  private readonly portfolio = inject(PortfolioService);
  protected readonly strengths = this.portfolio.strengths;
  protected readonly profile = this.portfolio.profile;
}
