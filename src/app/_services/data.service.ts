import { Injectable } from '@angular/core';
import { Project } from '../_model/project';
import { PROJECTS } from '../_DATA/project-data';
import { PUBLICATIONS } from '../_DATA/publication-data';
import { Publication } from '../_model/publication';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  private projects: Project[] = PROJECTS;
  private publications: Publication[] = PUBLICATIONS;

  // ************************************************************************
  // * Get project ID
  getProjectById(id: number): Project | undefined {
    // * Find the project by ID, or return undefined if not found
    return this.projects.find((project) => project.id === id);
  }

  // ************************************************************************
  // * Get all the publications for the project
  getPublicationsForProject(projectID: number): Publication[] {
    const project = PROJECTS.find((p) => p.id === projectID);

    if (project && project.publicationIDs) {
      return PUBLICATIONS.filter((publication) =>
        project.publicationIDs?.includes(publication.id)
      );
    }

    return []; // Return an empty array if no publications are found
  }

  // ************************************************************************
  // * Get the publications by id
  // getPublications(): Observable<Publication[]> {
  //   return of(this.publications);
  // }

  // ************************************************************************
  //* Get a publication by ID
  getPublicationById(id: number): Publication | undefined {
    const publication = this.publications.find((p) => p.id === id);
    return publication;
  }

  // ************************************************************************
  //* Get all publications
  getAllPublications() {
    console.log('Get all publications' + JSON.stringify(this.publications));
    return this.publications;
  }
}
