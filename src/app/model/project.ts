import { Publication } from "./publication";

export interface Project {
  id: number;
  image?: string;
  name: string;
  date?: string;
  description?: string;
  publicationIDs?: number[];
}
