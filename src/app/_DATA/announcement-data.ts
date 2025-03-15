// announcement-data.ts

import { Announcement } from '../_model/announcement';

export const announcements: Announcement[] = [
  {
    id: 1,
    title: 'NSF GRADUATE RESEARCH FELLOWSHIP',
    content:
      'Ali Khan, a second-year Ph.D. student in computer science and engineering, has earned a Graduate Research Fellowship from the National Science Foundation, one of the most competitive research awards in the U.S. for a graduate student. It will fund his research on machine learning, high performance computing and graph theory. Read more about Khan, who first learned to program from a Liberty BASIC for Dummies book when he was 11 years old. ',
    imageUrl: '../../assets/images/ali_khan.jpeg',
    linkUrl:
      'https://research.unt.edu/news/college-engineering-doctoral-student-earns-nsf-graduate-research-fellowship',
    onHomePage: true,
  },
  // Add more announcements here
];
