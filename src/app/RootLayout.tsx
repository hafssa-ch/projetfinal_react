import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';

export default function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-3 text-base font-medium transition-colors ${
      isActive
        ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
    }`;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <NavLink to="/" className="text-xl font-bold tracking-tight text-primary-600 dark:text-primary-400">
            Hafssa CHKOUKED
          </NavLink>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/projects" className={linkClass}>Projets</NavLink>
            <NavLink to="/experience" className={linkClass}>Parcours</NavLink>
            <NavLink to="/education" className={linkClass}>Formations</NavLink>
            <NavLink to="/certifications" className={linkClass}>Certifications</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* Bouton hamburger pour mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Menu mobile (affiché seulement si mobileMenuOpen est true) */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <nav className="flex flex-col py-2">
              <NavLink to="/projects" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass}>
                Projets
              </NavLink>
              <NavLink to="/experience" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass}>
                Parcours
              </NavLink>
              <NavLink to="/education" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass}>
                Formations
              </NavLink>
              <NavLink to="/certifications" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass}>
                Certifications
              </NavLink>
              <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass}>
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 mx-auto w-full max-w-6xl p-6 animate-fade-in">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} — Hafssa CHKOUKED — Étudiante en Licence Informatique</p>
      </footer>
    </div>
  );
}