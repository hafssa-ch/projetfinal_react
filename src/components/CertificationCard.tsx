import type { Certification } from '@/data/certifications';

function formatDate(iso: string) {
  const [year, month] = iso.split('-');
  return `${month}/${year}`;
}

export default function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <div className="card p-5 transition-all">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">{certification.title}</h3>
          <p className="text-sm text-gray-500">{certification.issuer}</p>
        </div>
        {certification.score && (
          <span className="rounded-full bg-green-100 dark:bg-green-900/50 px-2.5 py-0.5 text-xs font-bold text-green-700 dark:text-green-300">
            {certification.score}
          </span>
        )}
      </div>
      <p className="mt-2 text-xs text-gray-400">📅 {formatDate(certification.issueDate)}</p>
      {certification.skills && (
        <div className="mt-3 flex flex-wrap gap-1">
          {certification.skills.map(skill => (
            <span key={skill} className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs">{skill}</span>
          ))}
        </div>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {certification.tags?.map(tag => (
          <span key={tag} className="badge">{tag}</span>
        ))}
      </div>
    </div>
  );
}