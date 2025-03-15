import { Component } from '@angular/core';
import { AnnouncementService } from 'src/app/_services/announcement.service';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.scss'],
})
export class AnnouncementDetailsComponent {
  selectedAnnouncement = this.announcementService.selectedAnnouncement;

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.selectedAnnouncement = this.announcementService.selectedAnnouncement;
  }
}
