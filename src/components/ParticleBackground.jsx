import { useEffect, useState } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// A stable callback lets the provider initialize the engine once across renders.
const initializeParticles = (engine) => loadSlim(engine);

const options = {
  fullScreen: { enable: false },
  background: { color: '#ffffff' },
  fpsLimit: 60,
  particles: {
    number: { value: 80, density: { enable: true } },
    paint: { color: { value: '#222222' }, fill: { enable: true } },
    shape: { type: 'circle' },
    opacity: { value: 0.75 },
    size: { value: { min: 1, max: 3 } },
    links: { enable: true, distance: 150, color: '#444444', opacity: 0.52, width: 0.96 },
    move: { enable: true, speed: 6, outModes: { default: 'out' } },
  },
  interactivity: {
    detectsOn: 'window',
    events: { onClick: { enable: true, mode: 'repulse' } },
    modes: { repulse: { distance: 200, duration: 0.4 } },
  },
  detectRetina: true,
};

export default function ParticleBackground() {
  // State triggers a render when the preference changes; the initializer runs at mount.
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  // Effects connect React to external systems after the component enters the DOM.
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event) => setReducedMotion(event.matches);
    preference.addEventListener('change', handleChange);

    // Cleanup prevents duplicate listeners during StrictMode checks and Fast Refresh.
    return () => preference.removeEventListener('change', handleChange);
  }, []); // No changing inputs: setup belongs to this component's mount lifecycle.

  return (
    <div id="particles-js" aria-hidden="true">
      {/* Conditional JSX removes the animation when the visitor requests less motion. */}
      {!reducedMotion && (
        <ParticlesProvider init={initializeParticles}>
          <Particles id="portfolio-particles" options={options} />
        </ParticlesProvider>
      )}
    </div>
  );
}
