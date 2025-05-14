'use client';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold"><p>Santiago Ojeda <span className="text-[#1CCEBF]">Portfolio</span></p> </div>
        <nav className="hidden md:flex gap-6">
          <a href="#inicio" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Inicio</a>
          <a href="#proyectos" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Proyectos</a>
          <a href="#sobre-mi" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Sobre Mí</a>
          <a href="#contacto" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contacto</a>
        </nav>
      </div>
    </header>
  );
} 