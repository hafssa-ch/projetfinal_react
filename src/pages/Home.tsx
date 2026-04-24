import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{profile.name} – Portfolio Moderne</title>
        <meta name="description" content="Portfolio de Hafssa CHKOUKED, étudiante en informatique" />
      </Helmet>

      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Dégradé d'arrière-plan animé */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-50 via-accent-50 to-primary-50 dark:from-primary-950 dark:via-accent-950 dark:to-primary-950 bg-[length:200%_200%] animate-gradient" />
        
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <div className="inline-block rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-600 dark:text-primary-300 shadow-sm mb-6">
            🌟 Bienvenue sur mon portfolio
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Hafssa{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              CHKOUKED
            </span>
          </h1>
          
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            {profile.role}
          </p>
          
          <p className="mt-6 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            {profile.about}
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/projects" className="btn-primary">
              Explorer mes projets →
            </Link>
            <Link to="/contact" className="btn-secondary">
              Me contacter
            </Link>
          </div>
          
          <div className="mt-16">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Compétences clés
            </h2>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {profile.skills.map((skill) => (
                <span key={skill} className="badge text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-10 flex justify-center gap-6">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition hover:text-primary-600 dark:hover:text-primary-400"
              >
                {social.label === 'GitHub' && '🐙 GitHub'}
                {social.label === 'LinkedIn' && '🔗 LinkedIn'}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}