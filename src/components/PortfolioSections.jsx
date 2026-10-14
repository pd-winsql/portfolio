import { useState } from 'react';
import { certifications, profile, projects, socials, techStack } from '../data/portfolio.js';

function ExternalLink({ href, children, className = '' }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<span className="external-mark" aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>;
}

export function Navigation() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Win Corpuz, back to introduction">Win Corpuz<span aria-hidden="true">.</span></a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="name-heading">
      <p className="hero-location">{profile.location}, Philippines</p>
      <h1 id="name-heading">Winjemelron<br /><span>Corpuz</span><span className="name-period">.</span></h1>
      <div className="hero-bottom">
        <p>I’m an Information Systems student exploring data through <strong>PostgreSQL</strong> and <strong>Power BI</strong>.</p>
        <a className="primary-link" href="#work">View my work <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="work-section" id="work" aria-labelledby="work-heading">
      <div className="section-heading"><h2 id="work-heading">Selected work</h2><span>SQL / Data visualization</span></div>
      {projects.length === 0 ? <p>New projects will appear here as I finish them.</p> : projects.map((project, index) => (
        <article className="project" key={project.url}>
          <div className="project-intro">
            <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{project.title}</h3><p>{project.description}</p></div>
            <ExternalLink className="text-link" href={project.url}>View repository</ExternalLink>
          </div>
          <div className="project-study">
            <div className="project-context">
              <p className="small-label">Inside the analysis</p>
              <h4>Following sales.<br />Understanding customers.</h4>
              <p>SQL queries explore sales by region, monthly performance, and customer purchase cohorts. A Power BI report is included in the repository.</p>
              <dl className="project-tools"><div><dt>Analysis</dt><dd>PostgreSQL</dd></div><div><dt>Visualization</dt><dd>Power BI</dd></div></dl>
            </div>
            <figure className="query-figure">
              <figcaption><span>Monthly sales trend</span><span>SQL excerpt</span></figcaption>
              <pre><code>{project.query}</code></pre>
              <ExternalLink className="query-source" href={`${project.url}/blob/main/data_analysis.sql`}>Read the full analysis</ExternalLink>
            </figure>
          </div>
        </article>
      ))}
    </section>
  );
}

export function About() {
  const [portraitFailed, setPortraitFailed] = useState(false);
  return (
    <div className="about-content">
      <h2 id="about-heading">A little about me</h2>
      <p className="about-lead">Curiosity, in and<br />outside the data.</p>
      <p>I’m a fourth-year Information Systems student developing my skills in data analysis and visualization. I enjoy working through raw data and finding patterns that help explain it.</p>
      <p>Away from my projects, I write poems, spend time with friends and family, and serve God Jehovah.</p>
      <div className="portrait-row">
        {!portraitFailed && <img src={profile.portrait} alt={`Portrait of ${profile.name}`} width="88" height="110" loading="lazy" onError={() => setPortraitFailed(true)} />}
        <div><span className="portrait-name">Win Corpuz</span><span>{profile.education}</span><span>{profile.location}</span></div>
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="skills" aria-labelledby="skills-heading">
      <h3 id="skills-heading">Tools I work with</h3>
      <dl>{techStack.map(({ category, items }) => <div key={category}><dt>{category}</dt><dd>{items.join(' · ')}</dd></div>)}</dl>
    </section>
  );
}

export function Certifications() {
  return (
    <section className="credentials" aria-labelledby="credentials-heading">
      <h3 id="credentials-heading">Learning & credentials</h3>
      <p className="education">{profile.education}</p>
      {certifications.map(({ title, description, url }) => <div className="credential" key={url}><ExternalLink href={url}>{title}</ExternalLink><p>{description}</p></div>)}
    </section>
  );
}

export function Socials() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div><h2 id="contact-heading">Let’s connect.</h2><p>You can find me and my work here.</p></div>
      <div className="contact-links">{socials.filter(({ name }) => ['LinkedIn', 'GitHub'].includes(name)).map(({ name, url }) => <ExternalLink href={url} key={name}>{name}</ExternalLink>)}</div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <div>{socials.filter(({ name }) => ['Instagram', 'Facebook'].includes(name)).map(({ name, url }) => <ExternalLink href={url} key={name}>{name}</ExternalLink>)}</div>
    </footer>
  );
}
