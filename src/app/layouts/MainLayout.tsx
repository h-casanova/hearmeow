import { Link, Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <div>
      <header>
        <nav className="flex gap-4">
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <main className="p-4">
        <Outlet />
        {' '}
        {/* Renderizar paginas aqui */}
      </main>
    </div>
  )
}
