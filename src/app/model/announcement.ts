// announcement.model.ts

export interface Announcement {
  id: number;
  title: string;
  content?: string;
  imageUrl?: string;
  date?: Date;
  linkUrl?: string;
  onHomePage?: boolean;
}

