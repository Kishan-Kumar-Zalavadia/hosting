import { Component, Input } from '@angular/core';
import { Project } from '../../_model/project';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../_services/data.service';
import { Publication } from '../../_model/publication';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent {
  project: Project | undefined;
  publications: Publication[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    // * Retrieve the project ID from the URL route parameter
    const projectId = +this.route.snapshot.paramMap.get('id')!;

    if (projectId) {
      console.log('Project ID:', projectId);
      this.project = this.dataService.getProjectById(projectId);
      if (this.project?.name === undefined) {
        console.log("Project doesn't exist");
      } else {
        console.log(this.project.name);
      }
    } else {
      console.log('Project ID not found in the URL.');
    }

    // * Get publications for this project
    this.publications = this.dataService.getPublicationsForProject(projectId);
  }
}
