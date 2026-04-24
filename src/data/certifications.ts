
export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;    // "YYYY-MM"
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;       // "/certs/nom.webp"
  imageAlt?: string;
  status?: "active" | "expired";
  score?: string;       // pour afficher le score
};

export const certifications: Certification[] = [
  {
    title: "Programmation orientée objet : Python",
    issuer: "Plateforme de formation : https://mliaedu.toubkalit.com/",
    issueDate: "2024-06",
    score: "96%",
    skills: ["POO", "Python"],
    tags: ["Python", "POO"],
  },
  {
    title: "Programmation orientée objet : C++",
    issuer: "Plateforme de formation : https://mliaedu.toubkalit.com/",
    issueDate: "2024-05",
    score: "95%",
    skills: ["POO", "C++"],
    tags: ["C++", "POO"],
  },
  {
    title: "Ingénierie Logicielle Web avec PHP 7 : Architecture Multicouche et Accès aux Données Sécurisé",
    issuer: "Plateforme de formation : https://mliaedu.toubkalit.com/",
    issueDate: "2024-04",
    score: "87%",
    skills: ["PHP", "SQL", "Architecture MVC"],
    tags: ["PHP", "Web"],
  },
  {
    title: "Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "Plateforme de formation : https://mliaedu.toubkalit.com/",
    issueDate: "2024-03",
    score: "87%",
    skills: ["Java", "POO", "Collections"],
    tags: ["Java"],
  },
  {
    title: "Fondamentaux de la programmation en Kotlin",
    issuer: "Plateforme de formation : https://mliaedu.toubkalit.com/",
    issueDate: "2024-02",
    score: "73%",
    skills: ["Kotlin", "Programmation moderne"],
    tags: ["Kotlin"],
  },
  {
    title: "Bases de données",
    issuer: "Plateforme de formation : https://mliaedu.toubkalit.com/",
    issueDate: "2024-01",
    score: "83%",
    skills: ["SQL", "Modélisation", "Transactions"],
    tags: ["SQL", "BDD"],
  },
];