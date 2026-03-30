export interface Template {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  sellerAvatar: string;
  sellerName: string;
  storeIcon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  quote: string;
  templateName: string;
  date: string;
  avatar: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface BrandLogo {
  src: string;
  alt: string;
}
