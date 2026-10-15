import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { ProjectCard } from '../../../../shared/components/project-card/project-card';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCard, SectionHeading, RevealDirective],
  template: `
    <section id="proyectos" class="section container" aria-labelledby="projects-title">
      <app-section-heading
        index="01"
        headingId="projects-title"
        eyebrow="Proyectos"
        title="Trabajo seleccionado"
        subtitle="Cada proyecto tiene su caso de estudio: el problema, cómo lo abordé y qué resultado obtuve."
      />

      <div class="list">
        @for (project of portfolio.featuredProjects(); track project.slug; let i = $index) {
          <app-project-card [project]="project" [index]="i + 1" appReveal />
        }
      </div>

      @if (portfolio.otherProjects().length) {
        <div class="others">
          <p class="eyebrow">Otros proyectos</p>
          <div class="list">
            @for (project of portfolio.otherProjects(); track project.slug) {
              <app-project-card [project]="project" [compact]="true" appReveal />
            }
          </div>
        </div>
      }
    </section>
  `,
  styles: `
    .list {
      border-top: 1px solid var(--border-strong);
    }
    .others {
      display: grid;
      grid-template-columns: 14rem 1fr;
      gap: var(--space-8);
      margin-top: var(--space-16);
    }
    .others .eyebrow {
      padding-top: var(--space-6);
    }
    @media (max-width: 760px) {
      .others {
        grid-template-columns: 1fr;
        gap: var(--space-4);
      }
      .others .eyebrow {
        padding-top: 0;
      }
    }
  `,
})
export class Projects {
  protected readonly portfolio = inject(PortfolioService);
}
