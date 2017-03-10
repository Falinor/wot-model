import { Resource } from './resource';

export interface Link {
  link: string;
  title: string;
  resources?: Resource;
}

export interface Links {
  model?: Link;
  properties?: Link;
  actions?: Link;
  things?: Link;
  subscriptions?: Link;
  type?: Link;
  product?: Link;
  help?: Link;
  ui?: Link;
  // Note that each custom link should start with an underscore '_'
  [customLink: string]: Link;
}
