
export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "École Normale Supérieure (ENS)",
    degree: "Licence",
    field: "Informatique",
    location: "Maroc, Marrakech",
    start: "2023-09",
    end: "2026-06",
    courses: ["Programmation avancée", "Bases de données", "systeme informatique", "Intellegence Artificielle"],
    highlights: ["Dernière année", "Projet de fin d'études en cours"],
  },
  {
    school: "Lycée rahali farok",
    degree: "Baccalauréat Sciences physique avec mention tres bien",
    start: "2021-09",
    end: "2022-06",
  },
];