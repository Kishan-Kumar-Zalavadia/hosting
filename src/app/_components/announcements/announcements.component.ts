import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from 'src/app/_model/announcement';
import { announcements } from 'src/app/_DATA/announcement-data';
import { AnnouncementService } from 'src/app/_services/announcement.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent {
  @Input() homeAnnouncements: Announcement[] = [];

  announcements: Announcement[] = [];
  sliceLength: number = 400;

  constructor(
    private router: Router,
    private announcementService: AnnouncementService
  ) {
    this.announcements = this.announcementService.getAllAnnouncements();
  }

  ngOnInit(): void {
    this.getAnnouncements();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Update slice length when window is resized
    this.updateSliceLength(event.target.innerWidth);
  }

  updateSliceLength(windowWidth: number) {
    // Adjust slice length based on window width
    this.sliceLength = windowWidth < 768 ? 150 : 400;
  }

  getAnnouncements(): void {
    this.announcements = announcements;
  }

  // * ------------------------------------------------------------------------------------------------
  // * Moves to specific announcement created by me

  // onAnnouncementClick(announcementId: number): void {
  //   const selectedAnnouncement = this.announcementService.announcements.find(
  //     (announcement) => announcement.id === announcementId
  //   );

  //   if (!selectedAnnouncement) {
  //     console.error(`Announcement with ID ${announcementId} not found.`);
  //     // You may want to add some user feedback or error handling here.
  //     return;
  //   }

  //   this.announcementService.setSelectedAnnouncement(selectedAnnouncement);
  //   this.router.navigate(['/annoncement', announcementId]);
  // }

  // * ------------------------------------------------------------------------------------------------
  // * Moves to specific announcement in google
  onAnnouncementClick(announcementId: number): void {
    const selectedAnnouncement = this.announcementService.announcements.find(
      (announcement) => announcement.id === announcementId
    );

    if (!selectedAnnouncement) {
      console.error(`Announcement with ID ${announcementId} not found.`);
      // You may want to add some user feedback or error handling here.
      return;
    }
    window.open(selectedAnnouncement.linkUrl, '_blank');
  }
}
