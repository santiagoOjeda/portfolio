'use client';
import { useState, useEffect } from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

export default function Home() {
  const [ init, setInit ] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
    }).then(() => {
        setInit(true);
    });
}, []);

const particlesLoaded = (container) => {
  console.log(container);
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 to-cyan-900 relative">
      <div>
      init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                  
                    color: {
                        value: "#1CCEBF",
                    },
                    move: {
                        direction: "top",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                       
                        value: 250,
                    },
                    opacity: {
                        value: 0.33,
                        
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: .1, max: 2 },
                    },
                },
                detectRetina: true,
            }} 
         
        />
      </div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
