import { About, Certifications, Footer, Hero, Projects, Socials, TechStack } from './components/PortfolioSections.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';

// JSX uses className for CSS classes; capitalized tags refer to React components.
export default function App() {
  return (
    <>
      <ParticleBackground />
      <main className="parent-container">
        <Hero />
        <div className="sub-container">
          <div className="left-part"><About /><TechStack /></div>
          <Certifications />
        </div>
        <div className="bottom-part"><Socials /><Projects /></div>
        <hr className="footer-divider" />
        <Footer />
      </main>
    </>
  );
}
