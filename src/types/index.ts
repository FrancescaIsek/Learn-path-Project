export interface Resource {
  title: string;
  url: string;
  type?: string;
}

export interface Topic {
  id: string;
  title: string;
  shortDescription: string;
  notes: string[];
  keyPoints: [string, string, string] | string[];
  resources: Resource[];
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  category: string;
  topics: Topic[];
  isCustom?: boolean;
}
