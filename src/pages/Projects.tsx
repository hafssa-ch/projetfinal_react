import { Helmet } from 'react-helmet-async';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projets | Hafssa CHKOUKED</title>
      </Helmet>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Mes projets</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Découvrez mes réalisations personnelles et académiques
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="card p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-500 text-sm">{project.period}</p>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="badge">{tag}</span>
                ))}
              </div>
              <div className="mt-5 flex gap-4">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary-600 text-sm font-medium">Demo →</a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm">Code</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}