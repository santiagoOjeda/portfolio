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


  return (
    <div className="min-h-screen relative">
      <div>
     {init && <Particles
            id="tsparticles"
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
                        resize: {
                            enable: true,
                        },
                    },
                    modes: {
                        push: {
                            quantity: 400,
                            speed: 2,
                            distance: 10,
                        },
                        repulse: {
                            distance: 4,
                            duration: 1,
                           // speed: .5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#0f9f93",
                    },
                    move: {
                        direction: "top",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: .5,
                        straight: false,
                    },
                    number: {
                        value: 1450,
                    },
                    opacity: {
                        value:1,
                        animation: {
                            enable: true,
                            speed: 3,
                            sync: true,
                            mode: "random",
                        },
                        
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: .01, max: 1 },
                    },
                },
                detectRetina: true,
            }} 
         
        />}
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
