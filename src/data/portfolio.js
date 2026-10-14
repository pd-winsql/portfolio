// Content stays separate from JSX so adding an item does not require copying markup.
export const profile = {
  name: 'Winjemelron Corpuz',
  location: 'Alcala, Cagayan',
  education: '4th Year BS in Information Systems',
  portrait: `${import.meta.env.BASE_URL}assets/win-image-v2.png`,
};

export const techStack = [
  { category: 'Data', items: ['PostgreSQL', 'Power BI'] },
  { category: 'Frontend', items: ['React', 'Vite'] },
  { category: 'Development', items: ['PHP', 'C#', 'VB.Net'] },
];

export const certifications = [
  {
    title: 'Associate Data Analyst', description: 'DataCamp',
    url: 'https://www.datacamp.com/certificate/DAA0010251773990',
    linkLabel: 'Datacamp certificate link',
  },
];

export const projects = [
  {
    title: 'Sales Performance and Cohort Analysis',
    description: 'An exploratory analysis of retail sales and customer cohorts using PostgreSQL and Power BI.',
    query: `SELECT
    DATE_TRUNC('month', date)::date as month,
    ROUND(SUM(sales_amount), 2) as total_sales,
    ROUND(SUM(profit), 2) total_profit,
    ROUND(SUM(profit)/SUM(sales_amount),2) as profit_margin
FROM sales_fact
GROUP BY month
ORDER BY month;`,
    url: 'https://github.com/pd-winsql/sales-perf-and-cohort-analysis',
    linkLabel: 'Project repo link',
  },
];

export const socials = [
  { name: 'Instagram', url: 'https://www.instagram.com/win.ter.melon/', icon: 'https://img.icons8.com/windows/32/instagram-new.png', width: 35, height: 35 },
  { name: 'Facebook', url: 'https://www.facebook.com/winsql', icon: 'https://img.icons8.com/ios/50/facebook-new.png', width: 32, height: 32 },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/winsight', icon: 'https://img.icons8.com/windows/32/linkedin.png', width: 32, height: 32 },
  { name: 'GitHub', url: 'https://github.com/pd-winsql', icon: 'https://img.icons8.com/material-rounded/24/github.png', width: 32, height: 32 },
];
