import { Helmet } from 'react-helmet-async';
import { profile } from '@/data/profile';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact – Hafssa CHKOUKED</title>
        <meta name="description" content="Contacter Hafssa par email ou réseaux" />
      </Helmet>

      <div className="mx-auto max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Me contacter</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Une question, une opportunité ? Écrivez-moi !
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/50">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-2xl dark:bg-primary-900/30">
              📧
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="text-xl font-medium text-primary-600 hover:underline dark:text-primary-400"
            >
              {profile.email}
            </a>
            <p className="text-center text-gray-500">
              Je réponds généralement dans les 48 heures.
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-6 border-t border-gray-100 pt-6 dark:border-gray-800">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 transition hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                {social.label === 'GitHub' && '🐙 GitHub'}
                {social.label === 'LinkedIn' && '🔗 LinkedIn'}
              </a>
            ))}
          </div>
        </div>

        {/* Petit rappel des compétences */}
        <div className="rounded-xl bg-primary-50 p-4 text-center text-sm text-primary-800 dark:bg-primary-950/30 dark:text-primary-300">
          💡 Disponible pour des stages, alternances ou collaborations en développement web et logiciel.
        </div>
      </div>
    </>
  );
}