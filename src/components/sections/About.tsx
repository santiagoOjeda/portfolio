'use client';

export default function About() {
  return (
    <section id="sobre-mi" className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto max-w-4xl py-20">
        <h2 className=" md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="prose dark:prose-invert mx-auto">
          <p className="text-2xl leading-relaxed  text-gray-600 dark:text-gray-300">
          Hi, I’m currently working as a Frontend Team Leader, a role I’ve held for over eight years.
I specialize in <span className="text-[#1DCFC0]">JavaScript, primarily with React.js, Node, and TypeScript,</span> and have strong experience with build tools like Vite and esbuild, as well as testing frameworks such as Cypress.
</p><br></br>
<p className="text-2xl leading-relaxed  text-gray-600 dark:text-gray-300">
On the front-end side, I work extensively with <span className="text-[#1DCFC0]">CSS, HTML, Sass, and Tailwind.</span>
I also use design and prototyping tools like <span className="text-[#1DCFC0]">Figma, Illustrator, and Photoshop</span> to collaborate closely with designers and ensure smooth project execution.
        
          </p>
          <div className="flex justify-center mb-8 pt-[10%]">
            <img className="w-[400px] h-[400px] object-cover rounded-full filter grayscale" src="/images/me.png" alt="About" />
          </div>
        </div>
      </div> 
    </section>
  );
} 