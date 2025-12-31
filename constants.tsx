
import React from 'react';
import {
  Zap,
  Layers,
  Cpu,
  Component,
  MousePointer2,
  Workflow,
  Check,
  ShieldCheck,
  CreditCard,
  Smartphone,
  Globe
} from 'lucide-react';
import { Feature, PricingPlan, Testimonial, FaqItem } from './types';

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Advanced Webflow Tricks',
    description: 'Master the hidden features of the Webflow Designer that pros use to work faster.',
    icon: <Zap className="w-6 h-6 text-purple-400" />
  },
  {
    id: '2',
    title: 'Real-world Animations',
    description: 'Go beyond basic interactions with GSAP and complex Webflow native animations.',
    icon: <Layers className="w-6 h-6 text-indigo-400" />
  },
  {
    id: '3',
    title: 'Performance Optimization',
    description: 'Learn how to hit 100/100 Lighthouse scores on even the most complex builds.',
    icon: <Cpu className="w-6 h-6 text-cyan-400" />
  },
  {
    id: '4',
    title: 'Client-ready Components',
    description: 'A library of accessible, performant components ready for production.',
    icon: <Component className="w-6 h-6 text-purple-400" />
  },
  {
    id: '5',
    title: 'Copy-paste Interactions',
    description: 'Simply copy our custom code and interactions to elevate your next project.',
    icon: <MousePointer2 className="w-6 h-6 text-indigo-400" />
  },
  {
    id: '6',
    title: 'Insider Workflows',
    description: 'Peek behind the curtain of top agencies and their development processes.',
    icon: <Workflow className="w-6 h-6 text-cyan-400" />
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '6-months',
    name: '6 Months',
    price: '₹3,499',
    period: '/ 6 months',
    features: ['Free 1 Year Hosting', '2 Dedicated Servers', '1 High-Performance GPU', 'All tutorials', 'Premium components', 'Advanced animations', 'Priority support'],
    cta: 'Get 6 Months Access'
  },
  {
    id: '1-year',
    name: '1 Year',
    price: '₹7,499',
    period: '/ year',
    badge: 'Best Value',
    highlighted: true,
    features: ['Free 1 Year Hosting', '5 Dedicated Servers', '2 High-Performance GPUs', 'Everything in 6 Months', 'Client-ready templates', 'Commercial usage', '1-on-1 support'],
    cta: 'Get 1 Year Access'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Senior Web Designer',
    content: "ZEOHOUSING has completely changed my Webflow workflow. The performance optimization tips alone saved me dozens of hours on client projects.",
    avatar: 'https://picsum.photos/seed/alex/100/100'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'No-Code Developer',
    content: "Finally, a platform that doesn't just teach the basics. The advanced GSAP tutorials are world-class and very easy to follow.",
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: '3',
    name: 'Marcus Thorne',
    role: 'Agency Founder',
    content: "Our entire dev team uses ZEOHOUSING components. It's the highest ROI subscription we have in our tech stack.",
    avatar: 'https://picsum.photos/seed/marcus/100/100'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Is this beginner friendly?",
    answer: "While we cover some basics, ZEOHOUSING is primarily designed for developers who already have a baseline understanding of Webflow and want to reach an elite level."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. You can cancel your subscription at any time from your dashboard with no hidden fees or exit penalties."
  },
  {
    question: "Do I get lifetime updates?",
    answer: "Active subscribers receive weekly updates, including new components, tutorials, and workflow assets as they are released."
  },
  {
    question: "Is this suitable for agencies?",
    answer: "Yes! Our Agency plan is specifically designed for teams, including commercial licenses for all templates and assets."
  }
];

export const PAYMENT_METHODS = [
  { icon: <CreditCard className="w-5 h-5" />, name: 'Cards' },
  { icon: <Smartphone className="w-5 h-5" />, name: 'UPI' },
  { icon: <Globe className="w-5 h-5" />, name: 'Net Banking' }
];
