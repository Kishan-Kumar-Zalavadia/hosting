import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { Announcement } from 'src/app/_model/announcement';
import { announcements } from 'src/app/_DATA/announcement-data';
import { AnnouncementService } from 'src/app/_services/announcement.service';
import { DETAILS } from 'src/app/_DATA/details-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faGithub = faGithub;
  faFile = faFile;
  faGoogle = faGoogle;

  details = DETAILS;
  homeAnnouncements: Announcement[];

  constructor(private announcementService: AnnouncementService) {
    this.homeAnnouncements = this.announcementService.getHomeAnnouncements();
  }
}
