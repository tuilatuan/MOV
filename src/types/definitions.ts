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
};
