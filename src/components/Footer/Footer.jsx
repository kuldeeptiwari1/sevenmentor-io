import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-orange-500 px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-white text-center md:text-left">
            For More, Follow Us On Our Social Sites:
          </h3>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/sevenmentor"
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
              target="_blank"
            >
              <span className="text-lg font-bold">f</span>
            </a>
            {/* <a
              href="https://x.com/SevenMentor"
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
              target="_blank"
            >
              <span className="text-lg font-bold">𝕏</span>
            </a> */}
            <a
              href="https://www.youtube.com/@SevenMentor"
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
              target="_blank"
            >
              <span className="text-lg font-bold">▶</span>
            </a>
            <a
              href="https://www.linkedin.com/company/sevenmentor"
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
              target="_blank"
            >
              <span className="text-lg font-bold">in</span>
            </a>
            <a
              href="https://www.instagram.com/sevenmentor_it_courses/?igsh=dTh6NjhpemF3Mndl"
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
              target="_blank"
            >
              <span className="text-lg font-bold"><Instagram size={18} /></span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-6">
            {/* About SevenMentor */}
           
            <div>
              <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b-2 border-orange-500 inline-block">
              Data Science
              </h4>
              <ul className="space-y-3 mt-4">
                <li>
                  <Link
                    href="/data-science-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Data Science
                  </Link>
                </li>
                <li>
                  <Link
                    href="/data-analytics-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Data Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/advanced-excel-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Advanced Excel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/python-sql-excel-powerbi-complete-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span>Python + SQL + Adv. Excel + Power BI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/python-sql-prob-stat-ds-machine-learning-ai-deep-learning-power-bi"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span>Python + Sql + Prob & Stat + DS(Machine Learning) + AI(Deep Learning) Power bi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/python-sql-probability-with-statistics-advexcel-power-bi"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span>Python +SQL+ Probability with statistics+Adv excel +Power bi
                  </Link>
                </li>
              </ul>
            </div>
            {/* Networking Courses */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b-2 border-orange-500 inline-block">
                Networking Courses
              </h4>
              <ul className="space-y-3 mt-4">
                <li>
                  <Link
                    href="/ccna-linux-aws-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> 
CCNA + Linux + AWS

                  </Link>
                </li>
                <li>
                  <Link
                    href="/ccna-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> CCNA
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ccna-linux-ceh-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> CCNA + Linux + CEH
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cyber-security-analyst-program-training-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span>Cyber Security Analyst Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/salesforce-admin-developer-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span>Salesforce ADM+DEV (PD-1+LWC)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/devops-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span>Devops
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cloud-computing-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span>Cloud Computing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ethical-hacking-training-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span>Certified Ethical Hacking (CEH v12) Course in Mumbai
                  </Link>
                </li>
              </ul>
            </div>

            {/* Software Courses */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b-2 border-orange-500 inline-block">
                Software Courses
              </h4>
              <ul className="space-y-3 mt-4">
                <li>
                  <Link
                    href="/full-stack-java-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Full Stack Java
                  </Link>
                </li>
                <li>
                  <Link
                    href="/full-stack-python-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Full Stack Python
                  </Link>
                </li>
                <li>
                  <Link
                    href="/software-testing-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Software Testing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ui-ux-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> UI UX
                  </Link>
                </li>
                <li>
                  <Link
                    href="/web-full-stack-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Web Full Stack
                  </Link>
                </li>
                <li>
                  <Link
                    href="/web-development-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/web-application-penetration-testing-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Web Application Penetration Testing (WAPT) Training Course in Mumbai
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b-2 border-orange-500 inline-block">
                SAP
              </h4>
              <ul className="space-y-3 mt-4">
                <li>
                  <Link
                    href="/sap-mm-s4-hana-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> SAP MM S4 HANA
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sap-fico-s4-hana-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> SAP Fico S4 HANA
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sap-fico-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> SAP FICO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sap-mm-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span>SAP MM
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b-2 border-orange-500 inline-block">
                Language
              </h4>
              <ul className="space-y-3 mt-4">
                <li>
                  <Link
                    href="/soft-skills-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Softskill
                  </Link>
                </li>
                <li>
                  <Link
                    href="/soft-skills-personality-development-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Softskill & Personality Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/german-a1-a2-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> German A1 and A2
                  </Link>
                </li>
                <li>
                  <Link
                    href="/german-a1-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span>German A1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hr-generalist-course-in-mumbai"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span>HR Generalist
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact/Other */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b-2 border-orange-500 inline-block">
                Contact Us
              </h4>
              <ul className="space-y-3 mt-4 text-gray-400 text-sm">
                <li>Office no. 101 & part office no.1, Civic Centre</li>
                <li>
                  MMGS Marg, Dadar East, Dadar, Mumbai, Maharashtra 400014
                </li>
                <li>Phone: 022-48904395</li>
                <li>Email: mumbaileads@sevenmentor.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} SevenMentor & Training Pvt Ltd. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
