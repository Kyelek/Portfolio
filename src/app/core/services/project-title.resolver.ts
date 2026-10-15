import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PortfolioService } from './portfolio.service';

export const projectTitleResolver: ResolveFn<string> = (route) => {
  const project = inject(PortfolioService).findProject(route.paramMap.get('slug') ?? '');
  const name = inject(PortfolioService).profile().name;
  return project ? `${project.title} · ${name}` : `Proyecto no encontrado · ${name}`;
};
