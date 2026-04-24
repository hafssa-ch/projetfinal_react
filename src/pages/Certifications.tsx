import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { certifications } from '@/data/certifications';
import CertificationCard from '@/components/CertificationCard';

export default function CertificationsPage() {
  const [filter, setFilter] = useState('');

  const filteredList = useMemo(() => {
    return certifications
      .filter((cert) =>
        [cert.title, cert.issuer, ...(cert.tags ?? []), ...(cert.skills ?? [])]
          .join(' ')
          .toLowerCase()
          .includes(filter.toLowerCase())
      )
      .sort((a, b) => b.issueDate.localeCompare(a.issueDate));
  }, [filter]);

  return (
    <>
      <Helmet>
        <title>Certifications – Hafssa CHKOUKED</title>
        <meta name="description" content="Certifications en Python, C++, Java, Kotlin, PHP, SQL" />
      </Helmet>

      <div className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Certifications</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Formations validées avec scores.
            </p>
          </div>
          <input
            type="text"
            placeholder="Filtrer (ex: Python, Java)"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-xl border border-gray-300 bg-white px-4 py-2 shadow-sm focus:border-primary-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredList.map((cert) => (
            <CertificationCard key={cert.title + cert.issueDate} certification={cert} />
          ))}
        </div>
      </div>
    </>
  );
}