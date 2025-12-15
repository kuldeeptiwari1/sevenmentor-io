import { parseStringPromise } from "xml2js"
import SitemapDisplay from "../../../components/SitemapDisplay/SitemapDisplay"

// const SitemapDisplay = dynamic(()=> import("../../../components/Sitemap/SitemapDisplay.jsx"), {ssr:false});
// import SitemapDisplay from "../../../components/Sitemap/SitemapDisplay.jsx"
export const generateMetadata = () => ({
  title: "Complete Sitemap | SevenMentor Training ",
  description: "Explore the complete sitemap of SevenMentor — find links to all core sections including courses, services, branches, and contact information for easy navigation.",
  keywords: "Complete Sitemap",
  
})
async function getSitemapData() {
  try {
    // Use hardcoded base URL instead of environment variable
    const baseUrl = "https://sevenmentor.io/"
    const sitemapUrl = `${baseUrl}sitemap.xml`

    // Fetch the sitemap
    const response = await fetch(sitemapUrl, { next: { revalidate: 3600 } }) // Revalidate every hour

    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap: ${response.status}`)
    }

    const xmlData = await response.text()

    // Parse XML to JSON
    const result = await parseStringPromise(xmlData, { explicitArray: false })

    // Extract URL data
    const urlset = result.urlset
    const urls = Array.isArray(urlset.url) ? urlset.url : [urlset.url]

    // Format data for the component
    return urls.map((url) => ({
      loc: url.loc,
      priority: url.priority || "N/A",
    }))
  } catch (error) {
    console.error("Error fetching sitemap:", error)
    return []
  }
}

export default async function SitemapPage() {
  const sitemapData = await getSitemapData()

  return (
    <div className="container mx-auto py-8">
      <SitemapDisplay initialData={sitemapData} />
    </div>
  )
}