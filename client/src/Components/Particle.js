import Particles from "react-particles-js";

import React from "react";

function Particle() {
  return (
    <Particles
      width="100%"
      height="100vh"
      params={{
        particles: {
          number: {
            value: 110,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: "#636e72",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
            },
            polygon: {
              nb_sides: 6,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            opacity: 0.8,
            width: 1,
            shadow: {
              enable: false,
              color: "#e74c3c",
              blur: 5,
            },
          },
          move: {
            enable: true,
            random: false,
            speed: 0.6,
            attract: {
              rotateX: 600,
              rotateY: 1200,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              speed: 40,
              size_min: 0.1,
            },
          },
          opacity: {
            value: 0.5,
            anim: {
              speed: 1,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
          detect_on: "window",
        },
      }}
    />
  );
}

export default Particle;
