import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Iniciales (nombre + primer apellido), usadas como logotipo o como avatar de reserva.
 * Con nombre compuesto y dos apellidos («Francisco Eugenio Ibeas Aniceto») el primer apellido es la penúltima palabra.
 */
@Component({
  selector: 'app-monogram',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
  template: `{{ initials() }}`,
  styles: `
    :host {
      display: inline-grid;
      place-items: center;
      font-weight: 600;
      letter-spacing: -0.04em;
      color: var(--bg);
      background: var(--text);
      border-radius: var(--radius-md);
    }
  `,
})
export class Monogram {
  readonly name = input.required<string>();

  protected readonly initials = computed(() => {
    const words = this.name().trim().split(/\s+/);
    const surname = words.length >= 4 ? words[words.length - 2] : words[words.length - 1];
    return `${words[0][0]}${words.length > 1 ? surname[0] : ''}`.toUpperCase();
  });
}
