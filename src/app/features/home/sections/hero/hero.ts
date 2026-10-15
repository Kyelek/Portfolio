import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { Icon } from '../../../../shared/components/icon/icon';
import { Monogram } from '../../../../shared/components/monogram/monogram';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, Monogram],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly portfolio = inject(PortfolioService);

  protected readonly profile = this.portfolio.profile;

  /** Empresas de desarrollo en las que se ha trabajado, sin duplicados ni proyectos propios. */
  protected readonly companies = computed(() => {
    const own = new Set(['Selah', 'Profesional independiente']);
    return [...new Set(this.portfolio.devExperience().map((e) => e.company))].filter(
      (c) => !own.has(c),
    );
  });
}
