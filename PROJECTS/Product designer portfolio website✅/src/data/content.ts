import { publicAsset } from '@/lib/utils'

export const navLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Hire me', href: '#contact' },
] as const

export const projects = [
  {
    slug: 'nexus-analytics',
    title: 'Nexus Analytics',
    category: 'SaaS Dashboard',
    image: publicAsset('/projects/project-1.svg'),
    featured: true,
  },
  {
    slug: 'pulse-finance',
    title: 'Pulse Finance',
    category: 'Mobile App',
    image: publicAsset('/projects/project-2.svg'),
    featured: false,
  },
  {
    slug: 'orbit-crm',
    title: 'Orbit CRM',
    category: 'Product Design',
    image: publicAsset('/projects/project-3.svg'),
    featured: false,
  },
  {
    slug: 'lumen-health',
    title: 'Lumen Health',
    category: 'Design System',
    image: publicAsset('/projects/project-4.svg'),
    featured: false,
  },
  {
    slug: 'vault-crypto',
    title: 'Vault Crypto',
    category: 'Web App',
    image: publicAsset('/projects/project-5.svg'),
    featured: false,
  },
] as const

export const services = [
  {
    tag: 'DESIGN',
    name: 'UI/UX Design',
    description:
      'End-to-end product design from research and wireframes to polished, developer-ready interfaces.',
    price: 'from $2,400',
  },
  {
    tag: 'DEV',
    name: 'Framer Development',
    description:
      'High-fidelity marketing sites and product pages built in Framer with motion and CMS.',
    price: 'from $1,800',
  },
  {
    tag: 'SYSTEMS',
    name: 'Design Systems',
    description:
      'Scalable component libraries, tokens, and documentation for consistent product teams.',
    price: 'from $3,200',
  },
] as const

export const technologies = [
  'Figma',
  'Framer',
  'Webflow',
  'React',
  'Adobe',
  'Notion',
] as const

export const testimonials = [
  {
    quote:
      'Paul translated a messy product vision into a interface our users actually love. Fast, thoughtful, and obsessively detailed.',
    name: 'Sarah Chen',
    role: 'CEO, Nexus Labs',
  },
  {
    quote:
      'The design system he built cut our shipping time in half. Every handoff was pixel-perfect and well documented.',
    name: 'Marcus Webb',
    role: 'Head of Product, Orbit',
  },
  {
    quote:
      'Rare mix of aesthetic taste and product thinking. Our conversion rate jumped 34% after the redesign.',
    name: 'Elena Ruiz',
    role: 'Marketing Director, Pulse',
  },
] as const

export const socialLinks = [
  { label: 'Dribbble', href: 'https://dribbble.com' },
  { label: 'Behance', href: 'https://behance.net' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
] as const
