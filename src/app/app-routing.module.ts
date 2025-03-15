import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { PublicationComponent } from './components/publication/publication.component';
import { PeopleComponent } from './components/people/people.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { AnnouncementDetailsComponent } from './components/announcement-details/announcement-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: 'publications', component: PublicationComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'annoncements', component: AnnouncementsComponent },
  { path: 'annoncement/:id', component: AnnouncementDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
