export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Gestion de Ventes boutique",
    period: "2025",
    tags: ["Java", "MySQL"],
    summary: "Application desktop pour la gestion des produits, des clients et des ventes d’une boutique. Tableaux de bord et génération de factures.",
    repo: "https://github.com/hafssa/gestion-notes",
  },
  {
    title: "Application de restaurant « dar marrakech »",
    period: "2024",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    summary: "Site web complet pour un restaurant marocain : menu interactif, réservation de tables, gestion des commandes et espace administration.",
    repo: "https://github.com/hafssa/bank-simulator",
  },
  {
    title: "Portfolio interactif",
    period: "2025",
    tags: ["React", "TypeScript", "Tailwind"],
    summary: "Portfolio personnel moderne avec présentation des projets, certifications, expériences et mode sombre. Déployé sur Vercel.",
    repo: "https://github.com/hafssa/portfolio-react",
  },
];