import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-cv',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
})
export default class Cv {
  protected readonly portfolio = inject(PortfolioService);

  /** Genera el PDF con el diálogo de impresión del navegador (estilos @media print). */
  protected print(): void {
    window.print();
  }

  protected displayUrl(url: string): string {
    return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  }
}
