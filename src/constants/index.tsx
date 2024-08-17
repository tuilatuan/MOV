import { TmenuItems } from "@/types/index.s";

export const menuItems: TmenuItems[] = [
  {
    title: "About MOV",
    url: "/about",
  },
  {
    title: "Our Programs",
    url: "/outprogram",
  },
  {
    title: "Activities",
    url: "/activites",
  },
  {
    title: "Knowledge Hubs",
    url: "/knowledge",
  },
];

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
