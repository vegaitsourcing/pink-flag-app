export interface BlogDetailsModel {
  id: number;
  meta: BlogDetailsModelMeta;
  title: string;
  body: Body[];
  category: string;
  image: Image;
}

export interface Body {
  type: string;
  value: number | string;
  id: string;
}

export interface Image {
  id: number;
  meta: ImageMeta;
  title: string;
}

export interface ImageMeta {
  type: string;
  detail_url: string;
  download_url: string;
}

export interface BlogDetailsModelMeta {
  type: string;
  detail_url: string;
  html_url: string;
  slug: string;
  show_in_menus: boolean;
  seo_title: string;
  search_description: string;
  first_published_at: Date;
  parent: Parent;
}

export interface Parent {
  id: number;
  meta: ParentMeta;
  title: string;
}

export interface ParentMeta {
  type: string;
  detail_url: string;
  html_url: string;
}
