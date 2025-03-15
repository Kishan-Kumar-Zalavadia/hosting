import { Component } from '@angular/core';
import { Project } from '../../_model/project';
import { PROJECTS } from '../../_DATA/project-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  // * Get all the projects
  projects = PROJECTS;
}
