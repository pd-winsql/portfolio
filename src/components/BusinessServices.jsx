import { projects } from "../data/portfolio.js";

function ProjectExample({ project, children }) {
    return (
        <div className="service-example">
            <p className="example-label">From my portfolio</p>
            <h4>{project.title}</h4>
            <p>{children}</p>
            <a
                className="text-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                View project repository{" "}
                <span className="external-mark" aria-hidden="true">
                    ↗
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
            </a>
        </div>
    );
}

export function BusinessServices() {
    return (
        <section
            className="services-section"
            id="services"
            aria-labelledby="services-heading"
        >
            <div className="services-intro">
                <h2 id="services-heading">Put your data to work.</h2>
                <p>
                    I help businesses understand their data, organize their
                    work, and build their online presence. Data analysis is my
                    main focus.
                </p>
            </div>

            <article
                className="analysis-service"
                aria-labelledby="analysis-heading"
            >
                <div className="service-description">
                    <p className="service-index">01 / Data analysis</p>
                    <h3 id="analysis-heading">
                        See what your numbers are telling you.
                    </h3>
                    <p>
                        Which products sell well? Are customers coming back? I
                        can help turn your spreadsheets and sales records into
                        reports that answer practical business questions.
                    </p>
                    <ul className="service-deliverables">
                        <li>Data cleaning and organization in Excel and SQL</li>
                        <li>Sales performance and customer cohort analysis</li>
                        <li>Power BI dashboards and Excel reports</li>
                    </ul>
                    <ProjectExample project={projects[0]}>
                        This project explores retail sales and customer cohorts
                        using PostgreSQL and Power BI, showing how analysis can
                        help someone examine sales performance and returning
                        customers.
                    </ProjectExample>
                </div>
                <aside
                    className="privacy-note"
                    aria-labelledby="privacy-heading"
                >
                    <h3 id="privacy-heading">
                        Your business data stays private.
                    </h3>
                    <p>
                        I do not upload client data to AI tools, publish it, or
                        share it publicly. Your data is used only for the agreed
                        analysis and reporting.
                    </p>
                    <p>
                        Any portfolio use requires your explicit permission. We
                        agree on access, delivery, and file retention before
                        work begins.
                    </p>
                </aside>
            </article>

            <div className="development-services">
                <article
                    className="development-service"
                    aria-labelledby="systems-heading"
                >
                    <p className="service-index">
                        02 / AI-assisted system development
                    </p>
                    <h3 id="systems-heading">A system for the way you work.</h3>
                    <p>
                        Manage appointments, records, and everyday tasks with a
                        system built around your workflow.
                    </p>
                    <p className="ai-disclosure">
                        I use AI tools to assist with development and take
                        responsibility for reviewing and testing the final work.
                    </p>
                    <ProjectExample project={projects[1]}>
                        A web application built with PHP and MySQL for managing
                        appointments and patient records, demonstrating the kind
                        of workflow a custom system can support.
                    </ProjectExample>
                </article>
                <article
                    className="development-service"
                    aria-labelledby="websites-heading"
                >
                    <p className="service-index">03 / AI-assisted websites</p>
                    <h3 id="websites-heading">
                        Give your business a place online.
                    </h3>
                    <p>
                        A responsive website or landing page that introduces
                        your business, explains your services, and makes it easy
                        for customers to contact you.
                    </p>
                    <p className="ai-disclosure">
                        I use AI tools to assist with coding and development. I
                        review and test the final website before delivery.
                    </p>
                    <div className="service-example">
                        <p className="example-label">A live example</p>
                        <h4>This portfolio</h4>
                        <p>
                            The site you’re browsing is an example of how I
                            present information and make it accessible across
                            desktop and mobile.
                        </p>
                    </div>
                </article>
            </div>

            <p className="development-privacy">
                <strong>AI use has a clear boundary.</strong> AI-assisted
                development uses sample or synthetic data. Client records,
                credentials, and confidential business information are excluded
                from AI prompts.
            </p>

            <div className="services-next-step">
                <div>
                    <h3>Start with the question you need answered.</h3>
                    <p>
                        We’ll discuss your goal, review what’s available, and
                        agree on the scope and deliverables before work begins.
                    </p>
                </div>
                <div className="services-actions">
                    <a className="service-action" href="#contact">
                        Discuss a project
                    </a>
                </div>
            </div>
        </section>
    );
}
