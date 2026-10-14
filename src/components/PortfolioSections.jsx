import { certifications, profile, projects, socials, techStack } from '../data/portfolio.js';

// Props are inputs from a parent; children contains the JSX nested inside <Section>.
function Section({ className, title, children }) {
  return (
    <section className={className}>
      <div className={`${className}-container`}>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

// Destructuring reads named props; projects and certificates share this layout.
function LinkedCard({ title, description, url, linkLabel }) {
  return (
    <div className="title-desc-container">
      <div><h5>{title}</h5><h6>{description}</h6></div>
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img width="20" height="20" src="https://img.icons8.com/material-outlined/96/link--v1.png" alt={linkLabel} loading="lazy" />
        </a>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-img-container">
          <img className="img-hero" src={profile.portrait} alt={`Portrait of ${profile.name}`} fetchPriority="high" />
        </div>
        <div className="hero-text">
          <div className="hero-name"><h1>{profile.name}</h1></div>
          <div className="hero-details">
            <div className="hero-location">
              <img width="18" height="17" src="https://img.icons8.com/ios/50/marker--v1.png" alt="" />
              <h4>{profile.location}</h4>
            </div>
            <h4>{profile.education}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section className="about-me" title="About Me">
      <p>
        Hi! I’m a Junior Information Systems student who loves working with data.
        Currently, I’m honing my skills in data analysis and visualization using
        PostgreSQL and Power BI. I’m passionate about transforming raw data into
        meaningful insights that can drive informed decision-making.
        <br /><br />
        In my free time, I write poems, and explore new technologies. Most of my
        times are divided between studying, working on personal projects,
        spending time with friends and family and serving God Jehovah.
      </p>
    </Section>
  );
}

export function TechStack() {
  return (
    <Section className="techstack" title="Tech Stack">
      <div>
        {/* map turns data into JSX; stable keys let React track items when lists change. */}
        {techStack.map(({ category, items }) => (
          <div key={category}>
            <h3>{category}</h3>
            <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section className="certifications" title="Certifications">
      {certifications.map((certificate) => <LinkedCard key={certificate.url} {...certificate} />)}
    </Section>
  );
}

export function Projects() {
  return (
    <Section className="projects" title="Projects">
      <div className="project-cards">
        {/* Spread passes each object's fields as named props to LinkedCard. */}
        {projects.map((project) => <LinkedCard key={project.url} {...project} />)}
      </div>
    </Section>
  );
}

export function Socials() {
  return (
    <Section className="socials" title="Socials">
      <ul>
        {socials.map(({ name, url, icon, width, height }) => (
          <li key={name}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={icon} width={width} height={height} alt={`${name} profile`} loading="lazy" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Footer() {
  // A calculated value needs no state or Effect; braces insert it directly into JSX.
  const year = new Date().getFullYear();
  return (
    <section className="footer">
      <div className="footer-container">
        <p>© {year} {profile.name}. All rights reserved.</p>
      </div>
    </section>
  );
}
