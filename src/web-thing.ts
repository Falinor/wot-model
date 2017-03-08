import { Links } from './links';

export interface WebThing {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  name?: string;
  description?: string;
  tags?: string[];
  customFields?: any;
  links?: Links;
}
