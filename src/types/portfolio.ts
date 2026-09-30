export interface PortfolioLink {
  label: string | null;
  url: string | null;
}

export interface PortfolioProject {
  id: string;
  title: string | null;
  category: string | null;
  description: string | null;
  role: string | null;
  year: string | null;
  tools: Array<string | null> | null;
  image: string | null;
  image_alt: string | null;
  url: string | null;
}

export interface PortfolioTestimonial {
  quote: string | null;
  author_name: string | null;
  author_title: string | null;
}

export interface PortfolioData {
  site: {
    name: string | null;
    title: string;
    description: string | null;
  };
  hero: {
    eyebrow: string | null;
    headline: string | null;
    intro: string | null;
    primary_cta: PortfolioLink | null;
    secondary_cta: PortfolioLink | null;
  };
  about: {
    heading: string | null;
    body: string | null;
    image: string | null;
    image_alt: string | null;
  };
  services: {
    heading: string | null;
    items: Array<{
      title: string | null;
      description: string | null;
    }> | null;
  };
  projects: {
    heading: string | null;
    items: Array<PortfolioProject | null> | null;
  };
  testimonials: {
    heading: string | null;
    items: Array<PortfolioTestimonial | null> | null;
  };
  contact: {
    heading: string | null;
    intro: string | null;
    email: string | null;
    links: Array<PortfolioLink | null> | null;
  };
  footer: {
    copyright_name: string | null;
  };
}