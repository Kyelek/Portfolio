import { Injectable, computed, signal } from '@angular/core';
import { PORTFOLIO_DATA } from '../data/portfolio.data';
import { Project } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly data = signal(PORTFOLIO_DATA).asReadonly();

  readonly profile = computed(() => this.data().profile);
  readonly strengths = computed(() => this.data().strengths);
  readonly process = computed(() => this.data().process);
  readonly experience = computed(() => this.data().experience);
  readonly devExperience = computed(() => this.experience().filter((e) => e.kind === 'dev'));
  readonly otherExperience = computed(() => this.experience().filter((e) => e.kind === 'other'));
  readonly certifications = computed(() => this.data().certifications);
  readonly education = computed(() => this.data().education);
  readonly skills = computed(() => this.data().skills);
  readonly languages = computed(() => this.data().languages);

  readonly projects = computed(() => [...this.data().projects].sort((a, b) => b.year - a.year));
  readonly featuredProjects = computed(() => this.projects().filter((p) => p.featured));
  readonly otherProjects = computed(() => this.projects().filter((p) => !p.featured));

  findProject(slug: string): Project | undefined {
    return this.data().projects.find((p) => p.slug === slug);
  }

  /** Proyecto siguiente en orden, para navegar entre casos de estudio. */
  nextProject(slug: string): Project | undefined {
    const list = this.projects();
    const index = list.findIndex((p) => p.slug === slug);
    return index === -1 || list.length < 2 ? undefined : list[(index + 1) % list.length];
  }
}
