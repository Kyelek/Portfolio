import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-project-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export default class ProjectDetail {
  private readonly portfolio = inject(PortfolioService);

  /** Enlazado desde el parámetro de ruta gracias a `withComponentInputBinding`. */
  readonly slug = input.required<string>();

  protected readonly project = computed(() => this.portfolio.findProject(this.slug()));
  protected readonly next = computed(() => this.portfolio.nextProject(this.slug()));
}
