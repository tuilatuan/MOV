type IActiveLinkProps = {
  url?: string;
  children: React.ReactNode;
  cssname?: string;
};
type TmenuItems = {
  url: string;
  title: string;
};

type TCourseItem = {
  url: string;
  title: string;
  image: string;
  slug: string;
};

type TTeacherItem = {
  url: string;
  name: string;
  desc: string;
  image: string;
};
export type { IActiveLinkProps, TmenuItems, TCourseItem, TTeacherItem };
