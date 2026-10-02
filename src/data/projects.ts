export type Project = {
  slug: string
  tags: string
  title: string
  description: string
  tech: string[]
  websitePath: string
  overview: string
  challenge: string
  solution: string
  useCases: { title: string; description: string }[]
  outcomes: string[]
}

const demoBase = (slug: string) => `/demos/${slug}/index.html`

export const projects: Project[] = [
  {
    slug: 'hush',
    tags: 'REACT · VITE · TAILWIND',
    title: 'Hush',
    description:
      'Landing page pour une app de sommeil : histoires, sons et minuteurs qui s’arrêtent tout seuls — sans scroll infini.',
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Motion'],
    websitePath: demoBase('hush'),
    overview:
      'Site vitrine pour Hush, une expérience de coucher calme axée sur le décrochage digital avant le sommeil.',
    challenge:
      'Communiquer la promesse « dormir sans scroller » avec une ambiance apaisante et une hiérarchie claire sur mobile.',
    solution:
      'One-page responsive, typographie douce, sections produit et CTA visibles, animations légères pour guider sans distraire.',
    useCases: [
      {
        title: 'Découverte produit',
        description:
          'Le visiteur comprend les bénéfices (sons, histoires, timer) et peut envisager le téléchargement.',
      },
      {
        title: 'Mobile first',
        description:
          'Parcours optimisé pour les écrans étroits, cohérent avec l’usage nocturne de l’app.',
      },
    ],
    outcomes: [
      'Message produit lisible en quelques secondes',
      'Interface calme et accessible',
      'Stack moderne côté client uniquement',
    ],
  },
  {
    slug: 'luxury-cars',
    tags: 'REACT · VITE · TAILWIND',
    title: 'LuxureDetails',
    description:
      'Site premium pour un service de detailing automobile haut de gamme : services, galerie et prise de rendez-vous.',
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    websitePath: demoBase('luxury-cars'),
    overview:
      'Vitrine élégante pour LuxureDetails, marque de detailing luxe avec une identité visuelle sobre et haut de gamme.',
    challenge:
      'Transmettre le standing de la marque tout en restant lisible et rapide à parcourir.',
    solution:
      'Mise en page éditoriale, contrastes maîtrisés et sections services structurées pour la conversion.',
    useCases: [
      {
        title: 'Présentation des offres',
        description:
          'Packages et prestations détaillés pour aider le client à choisir le bon niveau de service.',
      },
      {
        title: 'Image de marque',
        description:
          'Direction artistique alignée sur l’univers automobile premium.',
      },
    ],
    outcomes: [
      'Identité visuelle cohérente',
      'Navigation fluide desktop et mobile',
      'Site statique performant',
    ],
  },
  {
    slug: 'maison-cleo',
    tags: 'REACT · VITE · TAILWIND',
    title: 'Maison Cleo',
    description:
      'Boutique mode féminine à Nashville : collections, storytelling de marque et expérience e-commerce légère.',
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Motion'],
    websitePath: demoBase('maison-cleo'),
    overview:
      'Site e-commerce / vitrine pour Maison Cleo, boutique curated à Nashville.',
    challenge:
      'Mettre en valeur les collections et l’univers de la marque sans surcharger la page.',
    solution:
      'Grilles produit, typographies contrastées et sections éditoriales pour raconter la marque.',
    useCases: [
      {
        title: 'Catalogue',
        description: 'Découverte des pièces et navigation par collections.',
      },
      {
        title: 'Storytelling',
        description: 'Sections à propos et ambiance boutique pour fidéliser.',
      },
    ],
    outcomes: [
      'Expérience boutique immersive',
      'Mise en page responsive',
      'Animations discrètes sur les interactions clés',
    ],
  },
  {
    slug: 'music-producer',
    tags: 'REACT · VITE · MOTION',
    title: 'Marcus Veil — Producer',
    description:
      'Portfolio de producteur : studio, discographie, services d’enregistrement et contact pour collaborations.',
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Motion'],
    websitePath: demoBase('music-producer'),
    overview:
      'Site pour Marcus Veil, producteur indépendant et propriétaire de studio depuis 2014.',
    challenge:
      'Mixer identité artistique forte et informations pratiques (services, booking).',
    solution:
      'Sections hero impactantes, reel / selected work, détails studio et CTA contact.',
    useCases: [
      {
        title: 'Booking artiste',
        description: 'Les clients parcourent les services et contactent le studio.',
      },
      {
        title: 'Showcase',
        description: 'Mise en avant des productions et de l’équipement.',
      },
    ],
    outcomes: [
      'Positionnement pro immédiat',
      'Parcours contact simplifié',
      'Design sombre adapté à l’univers musique',
    ],
  },
  {
    slug: 'product-designer',
    tags: 'REACT · VITE · TYPESCRIPT',
    title: 'Paul Smith — Designer',
    description:
      'Portfolio product / UI-UX : réalisations, services, stack et contact — navigation par ancres.',
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Motion'],
    websitePath: demoBase('product-designer'),
    overview:
      'One-page pour Paul Smith, product designer basé à Londres : projets, tarifs et témoignages.',
    challenge:
      'Présenter une offre riche (portfolio, services, tech) avec une navigation fluide par ancres.',
    solution:
      'Sections structurées, menu mobile, contenu data-driven et contact via mailto.',
    useCases: [
      {
        title: 'Recrutement',
        description:
          'Un recruteur évalue les cas d’étude et les services avant de prendre contact.',
      },
      {
        title: 'Freelance',
        description: 'Tarification et stack visibles pour qualifier les leads.',
      },
    ],
    outcomes: [
      'Vision claire de l’offre designer',
      'Navigation one-page sans backend',
      'Cas d’étude mis en avant',
    ],
  },
  {
    slug: 'steakhouse',
    tags: 'REACT · VITE · TAILWIND',
    title: 'Ember & Stone',
    description:
      'Site restaurant steakhouse premium à Chicago : menu, ambiance et réservation.',
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Motion'],
    websitePath: demoBase('steakhouse'),
    overview:
      'Vitrine pour Ember & Stone, steakhouse haut de gamme où « le feu rencontre la finesse ».',
    challenge:
      'Évoquer l’expérience dining premium tout en gardant menu et réservation accessibles.',
    solution:
      'Typographie serif élégante, visuels immersifs et hiérarchie claire vers la réservation.',
    useCases: [
      {
        title: 'Réservation',
        description: 'Le client consulte le menu puis réserve une table.',
      },
      {
        title: 'Découverte',
        description: 'Mise en avant de l’ambiance et de la carte.',
      },
    ],
    outcomes: [
      'Identité restaurant haut de gamme',
      'Parcours mobile soigné',
      'Performance côté client',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectWebsiteUrl(project: Project): string {
  if (typeof window !== 'undefined') {
    return new URL(project.websitePath, window.location.origin).href
  }
  return project.websitePath
}
