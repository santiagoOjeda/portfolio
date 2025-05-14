'use client';

export default function About() {
  return (
    <section id="sobre-mi" className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto max-w-4xl py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre Mí</h2>
        <div className="prose dark:prose-invert mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Soy un desarrollador apasionado por crear soluciones web innovadoras y eficientes.
            Me especializo en el desarrollo full stack con tecnologías modernas.
          </p>
        </div>
      </div>
    </section>
  );
} 