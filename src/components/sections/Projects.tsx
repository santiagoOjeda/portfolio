'use client';

export default function Projects() {
  return (
    <section id="proyectos" className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8  ">
          {/* Project Card */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-12">
              <h2 className="text-3xl mb-2 font-extralight">Target</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Descripción del proyecto y tecnologías utilizadas.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-[#1CCEBF]  text-black rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-[#1CCEBF]  text-black rounded-full text-sm">
                  Node.js
                </span>
              </div>
            </div>
            
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-12">
              <h3 className="text-xl font-bold mb-2">Lagash</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Descripción del proyecto y tecnologías utilizadas.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                  Node.js
                </span>
              </div>
            </div>
            
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-12">
              <h3 className="text-xl font-bold mb-2">Mercado Libre</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Descripción del proyecto y tecnologías utilizadas.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                  Node.js
                </span>
              </div>
            </div>
            
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-12">
              <h3 className="text-xl font-bold mb-2">Castine</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Descripción del proyecto y tecnologías utilizadas.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                  Node.js
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
} 