import { useState } from 'react';
import { About, Certifications, Footer, Hero, Navigation, Projects, Socials, TechStack } from './components/PortfolioSections.jsx';
import { BusinessServices } from './components/BusinessServices.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('profile');
  const tabs = [{ id: 'profile', label: 'Profile' }, { id: 'help', label: 'How I Can Help' }];

  function handleTabKeyDown(event, index) {
    let nextIndex;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = tabs.length - 1;
    else return;
    event.preventDefault();
    setActiveTab(tabs[nextIndex].id);
    document.getElementById(`tab-${tabs[nextIndex].id}`).focus();
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="page-shell">
        <Navigation activeTab={activeTab} />
        <main id="main">
          <Hero activeTab={activeTab} />
          <div className="portfolio-tabs" role="tablist" aria-label="Explore my portfolio">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-controls={`panel-${tab.id}`}
                aria-selected={activeTab === tab.id}
                tabIndex={activeTab === tab.id ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >{tab.label}</button>
            ))}
          </div>
          <div role="tabpanel" id="panel-profile" aria-labelledby="tab-profile" hidden={activeTab !== 'profile'} tabIndex={0}>
            <Projects />
            <section className="background-section" id="about" aria-labelledby="about-heading">
              <About />
              <div className="background-details"><TechStack /><Certifications /></div>
            </section>
          </div>
          <div role="tabpanel" id="panel-help" aria-labelledby="tab-help" hidden={activeTab !== 'help'} tabIndex={0}>
            <BusinessServices />
          </div>
          <Socials />
        </main>
        <Footer />
      </div>
    </>
  );
}
