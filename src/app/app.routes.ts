import { Routes } from '@angular/router';
import { projectTitleResolver } from './core/services/project-title.resolver';
import { PORTFOLIO_DATA } from './core/data/portfolio.data';

const name = PORTFOLIO_DATA.profile.name;

export const routes: Routes = [
  {
    path: '',
    title: `${name} · ${PORTFOLIO_DATA.profile.role}`,
    loadComponent: () => import('./features/home/home'),
  },
  {
    path: 'proyectos/:slug',
    title: projectTitleResolver,
    loadComponent: () => import('./features/project-detail/project-detail'),
  },
  {
    path: 'cv',
    title: `CV · ${name}`,
    loadComponent: () => import('./features/cv/cv'),
  },
  {
    path: '**',
    title: `Página no encontrada · ${name}`,
    loadComponent: () => import('./features/not-found/not-found'),
  },
];
