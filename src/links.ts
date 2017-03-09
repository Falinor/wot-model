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
}

export interface Link {
  link: string;
  title: string;
  resources?: Resource;
}

export interface Resource {
  name?: string;
  description?: string;
  values?: any;
  tags?: string[];
}
