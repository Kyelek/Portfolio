import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { Icon } from '../../../../shared/components/icon/icon';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, SectionHeading, RevealDirective],
  template: `
    <section id="experiencia" class="section container" aria-labelledby="experience-title">
      <app-section-heading
        index="04"
        headingId="experience-title"
        eyebrow="Experiencia"
        title="De agencia y consultora a producto propio"
      />
      <ol class="timeline">
        @for (job of jobs(); track job.company + job.start) {
          <li class="job" appReveal>
            <p class="job__date">{{ job.start }} — {{ job.end ?? 'Actualidad' }}</p>
            <div>
              <h3>{{ job.role }}</h3>
              <p class="job__company">{{ job.company }} · {{ job.location }}</p>
              <ul class="job__achievements">
                @for (a of job.achievements; track a) {
                  <li>{{ a }}</li>
                }
              </ul>
              <ul class="tags">
                @for (tech of job.stack; track tech) {
                  <li class="tag">{{ tech }}</li>
                }
              </ul>
            </div>
          </li>
        }
      </ol>
      <a routerLink="/cv" class="btn btn--ghost more">
        Ver currículum completo <app-icon name="arrow-right" [size]="16" />
      </a>
    </section>
  `,
  styles: `
    .timeline {
      margin: 0;
      padding: 0;
      list-style: none;
      border-top: 1px solid var(--border-strong);
    }
    .job {
      display: grid;
      grid-template-columns: 14rem 1fr;
      gap: var(--space-8);
      padding-block: var(--space-8);
      border-bottom: 1px solid var(--border);
    }
    .job__date {
      margin: 0;
      padding-top: 0.2rem;
      font-family: var(--font-mono);
      font-size: var(--text-sm);
      color: var(--text-subtle);
    }
    h3 {
      margin: 0;
      font-size: var(--text-xl);
    }
    .job__company {
      margin: var(--space-1) 0 var(--space-4);
      font-weight: 500;
      color: var(--accent);
    }
    .job__achievements {
      max-width: 46rem;
      margin: 0 0 var(--space-4);
      padding-left: var(--space-5);
      color: var(--text-muted);
      li + li {
        margin-top: var(--space-1);
      }
    }
    .more {
      margin-top: var(--space-8);
    }
    @media (max-width: 760px) {
      .job {
        grid-template-columns: 1fr;
        gap: var(--space-2);
      }
    }
  `,
})
export class Experience {
  protected readonly jobs = inject(PortfolioService).devExperience;
}
