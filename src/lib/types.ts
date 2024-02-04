import { links } from "./data";

export type SectionName = (typeof links)[number]["hash"];

export type ProjectInfo = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
};

export type Link = {
  nameEng: string;
  nameIta: string;
  hash: string;
};

//text-lanaguages
type Intro = {
  
  contact: string;
};

type About = {
  title: string;
  
  conclusion: string;
};
export type Texts = {
  intro: Intro;
  about: About;
};
