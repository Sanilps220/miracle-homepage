export interface HeadMetadata {
  title: string;
  title_template: string;
  description: string;
  keywords: string[];
  canonical_url: string;
  robots: string;
  theme_color: string;
  open_graph: {
    type: string;
    locale: string;
    site_name: string;
    title: string;
    description: string;
    url: string;
    image: string;
    image_alt: string;
    image_width: number;
    image_height: number;
  };
  twitter_card: {
    card: string;
    site: string;
    creator: string;
    title: string;
    description: string;
    image: string;
    image_alt: string;
  };
  favicons: Array<{ rel: string; type?: string; sizes?: string; href: string }>;
}

export interface Branding {
  site_name: string;
  tagline: string;
  logos: {
    light_mode: { src: string; alt: string; width: number; height: number };
    dark_mode: { src: string; alt: string; width: number; height: number };
    emblem: { src: string; alt: string; width: number; height: number };
  };
}

export interface CTA {
  label: string;
  url: string;
  style?: string;
  aria_label?: string;
}

export interface HeroSection {
  id: string;
  category_badge: string;
  headline: string;
  subheadline: string;
  primary_cta: CTA;
  secondary_cta: CTA;
  friction_reducers: string[];
  visual: {
    type: string;
    asset: string;
    alt: string;
    layers: Array<{ type: string; title: string; status?: string; detail?: string; period?: string; value?: string }>;
  };
}

export interface TransformationItem {
  old_way: { title: string; description: string };
  new_way: { title: string; description: string };
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  visual: { type: string; asset: string; alt: string };
}

export interface TestimonialItem {
  quote: string;
  author_name: string;
  author_title: string;
  company_name: string;
  avatar_image: string;
  avatar_alt: string;
  metric_win: { value: string; label: string };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  link?: { label: string; url: string };
}

export interface HomepageData {
  schema_version: string;
  site: { name: string; base_url: string };
  head_metadata: HeadMetadata;
  branding: Branding;
  section_order: string[];
  announcement_bar: {
    enabled: boolean;
    badge: string;
    text: string;
    link: { label: string; url: string };
  };
  navigation: {
    logo: Branding['logos']['light_mode'];
    links: Array<{ label: string; url: string }>;
    primary_cta: CTA;
  };
  hero: HeroSection;
  social_proof: {
    trust_statement: string;
    client_logos: Array<{ name: string; image: string; alt: string }>;
    metrics: Array<{ value: string; label: string }>;
  };
  transformation: {
    id: string;
    kicker: string;
    headline: string;
    subheadline: string;
    comparison: TransformationItem[];
  };
  features: {
    id: string;
    kicker: string;
    headline: string;
    subheadline: string;
    grid: { items: FeatureItem[] };
  };
  testimonials: {
    headline: string;
    items: TestimonialItem[];
  };
  faq: {
    id: string;
    headline: string;
    items: FAQItem[];
  };
  final_cta: {
    id: string;
    headline: string;
    subheadline: string;
    primary_cta: CTA;
    secondary_cta: CTA;
    trust_indicators: string[];
  };
  footer: {
    tagline: string;
    link_columns: Array<{ title: string; links: Array<{ label: string; url: string }> }>;
    legal_links: Array<{ label: string; url: string }>;
    copyright: string;
    logo: {
      light_mode: string,
      dark_mode: string,
      alt: string,
      width: number,
      height: number,
    }
  };
}
