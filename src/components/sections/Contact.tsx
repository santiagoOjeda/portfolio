'use client';

export default function Contact() {
  return (
    <section id="contacto" className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto max-w-4xl py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contacto</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <a
            href="mailto:tu@email.com"
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <span>Email</span>
          </a>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
} 