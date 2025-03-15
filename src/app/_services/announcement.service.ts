import { Injectable } from '@angular/core';
import { announcements } from '../_DATA/announcement-data';
import { Announcement } from '../_model/announcement';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  constructor() {}

  private _announcements: Announcement[] = announcements;
  private _selectedAnnouncement: Announcement | undefined;

  get announcements(): Announcement[] {
    return this._announcements;
  }

  get selectedAnnouncement(): Announcement | undefined {
    return this._selectedAnnouncement;
  }

  setSelectedAnnouncement(announcement: Announcement): void {
    this._selectedAnnouncement = announcement;
  }

  // * ------------------------------------------------------------------------------------------------
  // * Get all the announcements
  getAllAnnouncements(): Announcement[] {
    return announcements;
  }
  // * ------------------------------------------------------------------------------------------------
  // * Get only the announcements to be showen on home page
  getHomeAnnouncements(): Announcement[] {
    return announcements.filter((a) => a.onHomePage);
  }
}
