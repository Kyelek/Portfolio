import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-process',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeading, RevealDirective],
  template: `
    <section id="proceso" class="section container" aria-labelledby="process-title">
      <app-section-heading
        index="03"
        headingId="process-title"
        eyebrow="Cómo resuelvo problemas"
        title="Evidencia antes que suposiciones"
        subtitle="La misma forma de trabajar para un bug de producción o para una funcionalidad nueva. En los casos de estudio puedes verla aplicada."
      />
      <ol class="steps">
        @for (step of steps(); track step.title; let i = $index) {
          <li class="step" appReveal>
            <span class="step__num">0{{ i + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </li>
        }
      </ol>
    </section>
  `,
  styles: `
    .steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
      gap: var(--space-8);
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .step {
      padding-top: var(--space-5);
      border-top: 2px solid var(--text);
    }
    .step__num {
      font-family: var(--font-mono);
      font-size: var(--text-xs);
      color: var(--text-subtle);
    }
    h3 {
      margin: var(--space-2) 0;
      font-size: var(--text-xl);
    }
    p {
      margin: 0;
      font-size: var(--text-sm);
      color: var(--text-muted);
    }
  `,
})
export class Process {
  protected readonly steps = inject(PortfolioService).process;
}
