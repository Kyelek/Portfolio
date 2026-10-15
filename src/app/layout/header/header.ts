import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ThemeService } from '../../core/services/theme.service';
import { Icon } from '../../shared/components/icon/icon';
import { Monogram } from '../../shared/components/monogram/monogram';

interface NavItem {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, Icon, Monogram],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: { '(document:keydown.escape)': 'menuOpen.set(false)' },
})
export class Header {
  protected readonly profile = inject(PortfolioService).profile;
  protected readonly theme = inject(ThemeService);
  protected readonly menuOpen = signal(false);

  /** Nombre corto para la cabecera: nombre de pila + primer apellido. */
  protected readonly shortName = computed(() => {
    const parts = this.profile().name.split(' ');
    return parts.length > 3 ? `${parts[0]} ${parts[2]}` : this.profile().name;
  });

  protected readonly nav: NavItem[] = [
    { label: 'Proyectos', fragment: 'proyectos' },
    { label: 'Sobre mí', fragment: 'aporte' },
    { label: 'Experiencia', fragment: 'experiencia' },
    { label: 'Contacto', fragment: 'contacto' },
  ];
}
