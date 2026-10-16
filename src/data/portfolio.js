// Content stays separate from JSX so adding an item does not require copying markup.
export const profile = {
    name: "Winjemelron Corpuz",
    location: "Alcala, Cagayan",
    education: "4th Year BS in Information Systems",
    portrait: `${import.meta.env.BASE_URL}assets/win-image-v2.png`,
};

export const techStack = [
    { category: "Data", items: ["PostgreSQL", "Power BI", "Excel"] },
];

export const technologyIcons = {
    PostgreSQL: `${import.meta.env.BASE_URL}assets/postgresql.svg`,
    'Power BI': `${import.meta.env.BASE_URL}assets/power-bi.svg`,
    Excel: `${import.meta.env.BASE_URL}assets/excel.svg`,
};

export const certifications = [
    {
        title: "Associate Data Analyst",
        description: "DataCamp",
        url: "https://www.datacamp.com/certificate/DAA0010251773990",
        linkLabel: "Datacamp certificate link",
    },
];

export const projects = [
    {
        title: "Sales Performance and Cohort Analysis",
        description:
            "An exploratory analysis of retail sales and customer cohorts using PostgreSQL and Power BI.",
        url: "https://github.com/pd-winsql/sales-perf-and-cohort-analysis",
        linkLabel: "Project repo link",
    },
    {
        title: "Online Appointment with Patient Records Management System",
        description:
            "A web-based application for managing appointments and patient records, built with PHP and MySQL.",
        url: "https://github.com/pd-winsql/Odaprms",
        linkLabel: "Project repo link",
    },
];

export const socials = [
    {
        name: "Instagram",
        url: "https://www.instagram.com/win.ter.melon/",
        icon: "https://img.icons8.com/windows/32/instagram-new.png",
        width: 35,
        height: 35,
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/winsql",
        icon: "https://img.icons8.com/ios/50/facebook-new.png",
        width: 32,
        height: 32,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/winsight",
        icon: "https://img.icons8.com/windows/32/linkedin.png",
        width: 32,
        height: 32,
    },
    {
        name: "GitHub",
        url: "https://github.com/pd-winsql",
        icon: "https://img.icons8.com/material-rounded/24/github.png",
        width: 32,
        height: 32,
    },
];
