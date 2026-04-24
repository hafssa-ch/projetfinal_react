import { Helmet } from 'react-helmet-async';
import { education } from '@/data/education';

function formatDate(iso?: string) {
  if (!iso) return 'Présent';
  const [year, month] = iso.split('-');
  return `${month}/${year}`;
}

export default function EducationPage() {
  return (
    <>
      <Helmet>
        <title>Formations – Hafssa CHKOUKED</title>
        <meta name="description" content="Licence informatique à l'ENS" />
      </Helmet>

      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Formations</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Parcours académique et certifications.</p>
        </div>

        <div className="relative border-l-2 border-primary-200 dark:border-primary-800 pl-8 space-y-8">
          {education.map((edu) => (
            <div key={edu.school + edu.start} className="relative">
              <div className="absolute -left-[2.15rem] mt-1.5 h-4 w-4 rounded-full bg-primary-500 ring-4 ring-white dark:ring-gray-950" />
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/50">
                <h3 className="text-xl font-semibold">
                  {edu.degree} {edu.field && `– ${edu.field}`}
                </h3>
                <p className="text-primary-600 dark:text-primary-400">{edu.school}</p>
                <p className="mt-1 text-sm text-gray-500">
                  {formatDate(edu.start)} — {formatDate(edu.end)} {edu.location && `• ${edu.location}`}
                </p>
                {edu.courses && edu.courses.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-medium">Cours principaux :</p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span key={course} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="mt-3 list-inside list-disc text-sm text-gray-600 dark:text-gray-300">
                    {edu.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}