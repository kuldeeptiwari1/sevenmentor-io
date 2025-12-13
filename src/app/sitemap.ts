import type { MetadataRoute } from "next"
import axiosInstance from "../services/AxiosInstance"

const BASE_URL = "https://www.sevenmentor.io"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Define static routes
  const staticRoutes = [
    "",
    "about-us",
    "data-science-course-in-mumbai",
    "data-analytics-course-in-mumbai",
    "advanced-excel-course-in-mumbai",
    "python-course-in-mumbai",
    "python-sql-excel-powerbi-complete-course-in-mumbai",
    "python-sql-prob-stat-ds-machine-learning-ai-deep-learning-power-bi",
    "python-sql-probability-with-statistics-advexcel-power-bi",
    "cyber-security-courses-in-mumbai",
    "ccna-linux-aws-course-in-mumbai",
    "ccna-course-in-mumbai",
    "ccna-linux-ceh-course-in-mumbai",
    "cyber-security-analyst-program-training-in-mumbai",
    "ccna-linux-aws-devops-course-in-mumbai",
    "salesforce-admin-developer-course-in-mumbai",
    "devops-course-in-mumbai",
    "cloud-computing-course-in-mumbai",
    "ethical-hacking-training-in-mumbai",
    "soc-course-in-mumbai",
    "chfi-course-in-mumbai",
    "full-stack-java-course-in-mumbai",
    "full-stack-python-course-in-mumbai",
    "software-testing-course-in-mumbai",
    "ui-ux-course-in-mumbai",
    "web-full-stack-course-in-mumbai",
    "web-development-course-in-mumbai",
    "web-application-penetration-testing-course-in-mumbai",
    "sap-mm-s4-hana-course-in-mumbai",
    "sap-fico-s4-hana-course-in-mumbai",
    "sap-fico-course-in-mumbai",
    "sap-mm-course-in-mumbai",
    "soft-skills-course-in-mumbai",
    "soft-skills-personality-development-course-in-mumbai",
    "german-a1-a2-course-in-mumbai",
    "german-a1-course-in-mumbai",
    "hr-generalist-course-in-mumbai",

  ].map((route) => ({
    url: `${BASE_URL}/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))


  // Combine all routes into a single sitemap
  return [...staticRoutes]
}