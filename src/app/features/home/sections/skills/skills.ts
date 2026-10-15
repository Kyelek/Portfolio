import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeading, RevealDirective],
  template: `
    <section class="section container" aria-labelledby="skills-title">
      <app-section-heading
        index="05"
        headingId="skills-title"
        eyebrow="Stack"
        title="Tecnologías con las que trabajo"
      />
      <dl class="table">
        @for (group of skills(); track group.category) {
          <div class="table__row" appReveal>
            <dt>{{ group.category }}</dt>
            <dd>
              <ul class="tags">
                @for (item of group.items; track item) {
                  <li class="tag">{{ item }}</li>
                }
              </ul>
            </dd>
          </div>
        }
      </dl>
    </section>
  `,
  styles: `
    .table {
      margin: 0;
      border-top: 1px solid var(--border-strong);
    }
    .table__row {
      display: grid;
      grid-template-columns: 14rem 1fr;
      gap: var(--space-8);
      padding-block: var(--space-5);
      border-bottom: 1px solid var(--border);
    }
    dt {
      font-weight: 600;
    }
    dd {
      margin: 0;
    }
    .tag {
      font-size: var(--text-sm);
      color: var(--text);
    }
    @media (max-width: 760px) {
      .table__row {
        grid-template-columns: 1fr;
        gap: var(--space-3);
      }
    }
  `,
})
export class Skills {
  protected readonly skills = inject(PortfolioService).skills;
}
