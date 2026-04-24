import { Helmet } from 'react-helmet-async';

const experiences = [
  {
    title: 'Enseignante en informatique',
    period: '2023 – 2026 · 3 ans',
    company: 'Lycée Mhamid9, Collège Nahda, Lycée Ghandi',
    description: [
      'Cours de programmation (Python, C++) et bureautique.',
      'Préparation d’examens et suivi de projets élèves.',
    ],
  },
  {
    title: 'Stagiaire ',
    period: '2024 · 1 mois',
    company: 'Bank Populaire du Maroc – Marrakech',
    description: [
      'Compréhension des processus bancaires et de la sécurité.',
    ],
  },
  {
    title: 'Stagiaire en développement',
    period: '2025 · 1 mois',
    company: 'OCP (Office Chérifien des Phosphates) – Safi',
    description: [
      'Stage d’observation et initiation aux systèmes d’information industriels.',
      'Découverte de la gestion de données à grande échelle.',
      'Développement d’une application de pointage.',

    ],
  },
];

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Parcours – Hafssa CHKOUKED</title>
        <meta name="description" content="Stages en banque et industrie, expérience en enseignement" />
      </Helmet>

      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Expériences</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Mon parcours professionnel et académique.
          </p>
        </div>

        <div className="relative border-l-2 border-primary-200 dark:border-primary-800 pl-8 space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[2.15rem] mt-1.5 h-4 w-4 rounded-full bg-primary-500 ring-4 ring-white dark:ring-gray-950" />
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/50">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400">{exp.period}</p>
                <p className="mt-1 text-sm text-gray-500">{exp.company}</p>
                <ul className="mt-3 list-inside list-disc space-y-1 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}