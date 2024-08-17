export type LocalizedString = {
  vi: string;
  en: string;
};

export type Category = {
  name: LocalizedString;
  id: string;
};

export type Knowledge = {
  id: string;
  name: LocalizedString;
  slug: LocalizedString;
  description: LocalizedString;
  category: Category;
  author: string;
  image: string;
  sortOrder: number;
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  metaImage: string;
  createdAt: string;
  updatedAt: string;
  slugPrev: string;
  slugNext: string;
  titlePrev: string;
  titleNext: string;
  namePrev: string;
  nameNext: string;
  data?: any;
};

export type CategoryKnowledges = {
  id: string;
  name: LocalizedString;
  active: boolean;
  sortOrder: number;
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  metaImage: string;
};

export type Partner = {
  id: string;
  name: string;
  slug: string;
  image: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type Activies = {
  name: LocalizedString;
  title: LocalizedString;
  category: string;
  author: string;
  description: LocalizedString;
  tags: LocalizedString;
  active: boolean;
  sortOrder: number;
  image: string;
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  metaImage: string;
};
