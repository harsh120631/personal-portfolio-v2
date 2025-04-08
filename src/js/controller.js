import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";

document.addEventListener("DOMContentLoaded", async () => {
  await loadFull(tsParticles);

  tsParticles.load("particles-js", {
    particles: {
      number: { value: 50 },
      size: { value: 2, random: true },
      move: { enable: true, speed: 3 },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#ffffff",
        opacity: 0.3,
        width: 0.8,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
      },
    },
    retina_detect: true,
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   if (particlesJS) {
//     particlesJS("particles-js", {
//       "particles": {
//         "number": {
//           "value": 50
//         },
//         "size": {
//           "value": 2,
//           "random": true
//         },
//         "move": {
//           "enable": true,
//           "speed": 3
//         },
//         "line_linked": {
//           "enable": true,
//           "distance": 120,
//           "color": "#ffffff",
//           "opacity": 0.3,
//           "width": 0.8
//         }
//       },
//       "interactivity": {
//         "detect_on": "canvas",
//         "events": {
//           "onhover": {
//             "enable": true,
//             "mode": "grab"
//           },
//           "onclick": {
//             "enable": true,
//             "mode": "push"
//           }
//         }
//       },
//       "retina_detect": true
//     });
//   } else {
//     console.error("particlesJS is not available");
//   }
// });
