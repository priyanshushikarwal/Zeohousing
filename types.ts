
// Fix: Added React import to provide access to the React namespace for React.ReactNode type definition
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}