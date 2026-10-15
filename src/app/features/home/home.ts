import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Contact } from './sections/contact/contact';
import { Experience } from './sections/experience/experience';
import { Hero } from './sections/hero/hero';
import { Process } from './sections/process/process';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Value } from './sections/value/value';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Hero, Projects, Value, Process, Experience, Skills, Contact],
  template: `
    <app-hero />
    <app-projects />
    <app-value />
    <app-process />
    <app-experience />
    <app-skills />
    <app-contact />
  `,
})
export default class Home {}
