import { Outlet, NavLink } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';

export default function RootLayout() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
    }`;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <NavLink to="/" className="text-xl font-bold tracking-tight text-primary-600 dark:text-primary-400">
            Hafssa CHKOUKED
          </NavLink>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/projects" className={linkClass}>Projets</NavLink>
            <NavLink to="/experience" className={linkClass}>Parcours</NavLink>
            <NavLink to="/education" className={linkClass}>Formations</NavLink>
            <NavLink to="/certifications" className={linkClass}>Certifications</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              ☰
            </button>
          </div>
        </div>
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