export type Choice = {
  id: string;
  name: string;
  blurb: string;
};

export type GalleryItem = {
  title: string;
  note: string;
  image: string;
  href?: string;
};

export type Occasion = {
  name: string;
  note: string;
  image: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type Brand = {
  slug: string;
  name: string;
  handle: string;
  instagram: string;
  location: string;
  region: string;
  country: string;
  variant: "ribbon" | "garden" | "quiet" | "event";
  eyebrow: string;
  headline: string;
  subhead: string;
  orderNote: string;
  stats: { value: string; label: string }[];
  styles: Choice[];
  wraps: Choice[];
  details: Choice[];
  fulfillments: Choice[];
  gallery: GalleryItem[];
  occasions: Occasion[];
  faqs: Faq[];
  about: string[];
  policies: string[];
  quote: { text: string; by: string };
  photoCredit: string;
};
