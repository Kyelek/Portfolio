import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="eyebrow">
      @if (index()) {
        <span class="index">{{ index() }}</span>
      }
      {{ eyebrow() }}
    </p>
    <div>
      <h2 [id]="headingId()">{{ title() }}</h2>
      @if (subtitle()) {
        <p class="subtitle">{{ subtitle() }}</p>
      }
    </div>
  `,
  styles: `
    :host {
      display: grid;
      grid-template-columns: 14rem 1fr;
      gap: var(--space-4) var(--space-8);
      margin-bottom: var(--space-12);
    }
    .eyebrow {
      padding-top: 0.6rem;
    }
    .index {
      color: var(--accent);
      margin-right: var(--space-2);
    }
    h2 {
      max-width: 24ch;
      margin: 0;
      font-size: var(--text-4xl);
    }
    .subtitle {
      max-width: 40rem;
      margin: var(--space-4) 0 0;
      color: var(--text-muted);
      font-size: var(--text-lg);
    }
    @media (max-width: 760px) {
      :host {
        grid-template-columns: 1fr;
        margin-bottom: var(--space-8);
      }
      .eyebrow {
        padding-top: 0;
      }
    }
  `,
})
export class SectionHeading {
  readonly index = input<string>();
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  readonly headingId = input<string>();
}
