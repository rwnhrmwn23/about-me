import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Particle = ({ colorTheme }: { colorTheme: string }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              particles_nb: 4,
            },
            remove: {
              distance: 200,
              duration: 0.4,
              particles_nb: 8,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            bubles: {
              distance: 200,
              size: 20,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
          },
        },
        particles: {
          color: {
            value: colorTheme == "dark" ? "#121212" : "#b6b6b6",
          },
          links: {
            color: colorTheme == "dark" ? "#121212" : "#b6b6b6",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
