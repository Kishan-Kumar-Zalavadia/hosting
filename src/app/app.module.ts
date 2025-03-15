import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { PublicationComponent } from './components/publication/publication.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PeopleComponent } from './components/people/people.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { AnnouncementDetailsComponent } from './components/announcement-details/announcement-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    PublicationComponent,
    PersonCardComponent,
    PeopleComponent,
    AnnouncementsComponent,
    AnnouncementDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
