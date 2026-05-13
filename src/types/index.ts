export interface NavLink {
  label: string;
  href: string;
}

export interface SecteurItem {
  id: string;
  sector: string;
  name: string;
  nameHighlight?: string;
  icon: string; // lucide icon name
}

import type { LucideIcon } from 'lucide-react';

export interface OffreItem {
  num: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
  index: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface ProductFeature {
  text: string;
}

export interface Product {
  id: 'ori' | 'iko';
  index: string;
  tagline: string;
  audience: string;
  features: ProductFeature[];
  promise: string;
  promiseHighlight: string;
  cta: string;
}
