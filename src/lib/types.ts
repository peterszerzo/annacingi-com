export interface Project {
  id: string;
  title: string;
  openedAt?: string;
  tags: Array<string>;
  body: string;
  thumbnailImg?: string;
  imgs: Array<{ url: string; alt: string; credit: string }>;
  group: "Theatre" | "Opera" | "Performance";
}

export interface Credit {
  title: string;
  role: string;
  description: string;
  url?: string;
  openedAt?: string;
}
