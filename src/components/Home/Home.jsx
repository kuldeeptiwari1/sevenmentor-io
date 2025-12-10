"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const courses = [
    { id: 1, name: "CCNA", image: "/ccna-logo.jpg" },
    { id: 2, name: "Linux", image: "/linux-penguin-logo.jpg" },
    { id: 3, name: "Python", image: "/python-logo.png" },
    { id: 4, name: "Salesforce", image: "/salesforce-logo.png" },
    { id: 5, name: "IPA", image: "/ipa-logo.jpg" },
    { id: 6, name: "Data Science", image: "/data-science-logo.png" },
    { id: 7, name: "Fullstack", image: "/fullstack-logo.jpg" },
    { id: 8, name: "Java", image: "/java-logo.png" },
    { id: 9, name: "AWS", image: "/aws-logo.png" },
    { id: 10, name: "AI", image: "/artificial-intelligence-logo.jpg" },
    { id: 11, name: "Machine Learning", image: "/machine-learning-logo.jpg" },
    { id: 12, name: "DevOps", image: "/devops-logo.jpg" },
  ]

  const benefits = [
    {
      title: "Global Certification",
      description:
        "For the bright Future and job purpose, we have a facility for Global Certification Exams to ensure your job Guarantee for sure in MNCs and more.",
      icon: "📋",
    },
    {
      title: "Free Wi-Fi",
      description:
        "We understand how the internet is important for students, thus we have provided free internet service to students to learn confidently.",
      icon: "📡",
    },
    {
      title: "In-House Company",
      description: "The student will get direct benefits of on-going USA projects.",
      icon: "🏢",
    },
  ]

  const stats = [
    { number: "52 +", label: "Classroom" },
    { number: "72000 +", label: "Successful Career made" },
    { number: "75+", label: "Total Mentors" },
    { number: "200 +", label: "Online/Offline Courses" },
  ]

  const courseCategories = [
    { name: "Networking Courses", phone: "022-48904395" },
    { name: "Software Courses", phone: "022-48904395" },
    { name: "HR Training Courses", phone: "022-48904395" },
    { name: "Interior and Fashion Courses", phone: "022-48904395" },
    { name: "Python-Data Science", phone: "022-48904395" },
    { name: "Language Courses", phone: "022-48904395" },
    { name: "SAP Courses", phone: "022-48904395" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length)
  }

  return (
    <main className="w-full bg-white">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Top Nav */}
          <div className="flex items-center justify-between mb-3 text-xs">
            <div className="flex gap-6">
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                📊 Job Fair
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                📅 Events
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                👤 Teach With US
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                🏢 Corporate Training
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                🔗 Franchise Opportunities
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                ✓ Placement & CRM
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                👥 Careers
              </a>
            </div>
            <div className="flex gap-2 text-gray-500">
              <a href="#" className="hover:text-gray-700">
                f
              </a>
              <a href="#" className="hover:text-gray-700">
                ▶
              </a>
              <a href="#" className="hover:text-gray-700">
                in
              </a>
              <a href="#" className="hover:text-gray-700">
                @
              </a>
            </div>
          </div>

          {/* Main Nav */}
          <div className="flex items-center justify-between">
            <div className="font-bold text-2xl text-orange-500">SevenMentor</div>
            <nav className="flex gap-8 text-sm font-semibold">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Data Science
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Cyber Security
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Software Development
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Cloud Computing
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Blogs
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-32 px-4"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/placeholder.svg)",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <input type="text" placeholder="Search courses..." className="w-full px-6 py-3 text-gray-900 rounded-l" />
              <button className="absolute right-0 top-0 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-r">
                <Search size={20} />
              </button>
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-4 text-orange-500">SevenMentor & Training Pvt Ltd.</h1>
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <div className="h-1 w-16 bg-orange-500 rounded"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="h-1 w-16 bg-orange-500 rounded"></div>
            </div>
          </div>
          <p className="text-2xl text-white mb-16">A Step Ahead In Education</p>

          <div className="flex justify-center gap-16">
            <div className="text-center">
              <div className="text-4xl mb-2">💡</div>
              <p className="text-xs text-gray-200">Expert Training</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎓</div>
              <p className="text-xs text-gray-200">Certification</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">👥</div>
              <p className="text-xs text-gray-200">Industry Mentors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💻</div>
              <p className="text-xs text-gray-200">Hands-on Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <p className="text-xs text-gray-200">Career Growth</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-xs text-gray-200">Job Placement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Behind Every Successful Career</h2>
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
              </div>
            </div>
            <p className="text-gray-200 max-w-3xl mx-auto">
              SevenMentor – A Renowned Brand For Quality Education And In- House Job Placement Services Since, Past
              Decades.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-orange-500 text-white p-12 rounded text-center hover:shadow-xl transition">
                <div className="text-5xl font-bold mb-4">{stat.number}</div>
                <div className="h-1 w-16 bg-blue-400 mx-auto mb-4"></div>
                <p className="font-semibold text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Courses</h2>
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white border-2 border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center hover:shadow-xl hover:border-gray-400 transition h-40"
              >
                <img src={course.image || "/placeholder.svg"} alt={course.name} className="h-16 mb-3 object-contain" />
                <p className="font-semibold text-gray-900 text-center text-sm">{course.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why to Choose Us?</h2>
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
              </div>
            </div>
            <p className="text-gray-600">SevenMentor Offers Premier Benefits For The Students</p>
          </div>

          <div className="flex items-center gap-8">
            <button onClick={prevSlide} className="flex-shrink-0 p-2 hover:bg-gray-200 rounded-full transition">
              <ChevronLeft size={40} className="text-blue-600" />
            </button>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[0, 1, 2].map((offset) => {
                  const idx = (currentSlide + offset) % benefits.length
                  const benefit = benefits[idx]
                  return (
                    <div
                      key={idx}
                      className="bg-white p-8 rounded-lg border border-gray-300 hover:shadow-lg transition flex flex-col items-center"
                    >
                      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <span className="text-5xl">{benefit.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{benefit.title}</h3>
                      <p className="text-gray-600 text-center text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <button onClick={nextSlide} className="flex-shrink-0 p-2 hover:bg-gray-200 rounded-full transition">
              <ChevronRight size={40} className="text-blue-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="bg-orange-500 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-px border-l border-orange-400">
            {courseCategories.map((category, idx) => (
              <div
                key={idx}
                className="border-r border-orange-400 px-4 py-4 last:border-r-0 cursor-pointer hover:bg-orange-600 transition"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span>📞</span>
                  <h4 className="font-semibold text-sm">{category.name}</h4>
                </div>
                <p className="text-xs text-orange-100">{category.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome To SevenMentor</h2>
              <div className="flex mb-8">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-12 bg-orange-500 rounded"></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-600 text-justify leading-relaxed text-base">
                SevenMentor has improvised a tendency to cope with all International Standards within their courses, by
                engaging both ends of the industry for students, professionals, and individuals to corporate clients.
                The organization conjointly gives chance within their educational programs to meet the needs with
                projected desires of quick developing networking trade. SevenMentor education techniques allow honing
                the abilities of the Networking experts from Industries which allow them to be equipped with the updated
                technology and standards of their operating environment. The group is a center for technical excellence
                with the kingdom of the art lab centers and a properly exquisite curriculum which gives them exposure in
                advance and enables them to be specific inside the certification enterprise.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg border-4 border-orange-500 p-8 text-white h-fit">
              <h3 className="text-2xl font-bold mb-2 text-center">Request Call Back</h3>
              <p className="text-xs text-center mb-8 text-gray-400">Class Room & Online Training Quotation</p>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Contact No*"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded text-sm"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-white text-gray-900 rounded text-sm">
                    <option>—Please choose an option—</option>
                    <option>Online</option>
                    <option>Offline</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your Enquiry *"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold text-sm transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 SevenMentor. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
