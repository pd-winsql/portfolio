import { About, Certifications, CurrentlyLearning, Footer, Hero, Navigation, Projects, Socials, TechStack } from './components/PortfolioSections.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="page-shell">
        <Navigation />
        <main id="main">
          <Hero />
          <Projects />
          <section className="background-section" id="about" aria-labelledby="about-heading">
            <About />
            <div className="background-details"><TechStack /><CurrentlyLearning /><Certifications /></div>
          </section>
          <Socials />
        </main>
        <Footer />
      </div>
    </>
  );
}
