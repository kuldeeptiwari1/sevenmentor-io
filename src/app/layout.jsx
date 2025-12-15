import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SevenMentor",
  description:
    "Welcome to SevenMentor – Explore our top-rated courses and training programs.",
  keywords: [
    "SevenMentor",
    "training",
    "courses",
    "IT training",
    "certification",
  ],
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T4E5VK7MDL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T4E5VK7MDL');
          `}
        </Script>

        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
