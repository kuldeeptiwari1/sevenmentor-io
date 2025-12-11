"use client"
import React, { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Menu, X, Star, CheckCircle, Award, Users, BookOpen } from "lucide-react"

export default function HomeSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTrendingSlide, setCurrentTrendingSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    mode: "",
    course: "",
  })

  // Courses Data
  const courses = [
    { id: 1, name: "Python Course", image: "/placeholder.svg?height=60&width=60" },
    { id: 2, name: "Data Science Course", image: "/placeholder.svg?height=60&width=60" },
    { id: 3, name: "Java Course", image: "/placeholder.svg?height=60&width=60" },
    { id: 4, name: "Power BI Course", image: "/placeholder.svg?height=60&width=60" },
    { id: 5, name: "AWS Course", image: "/placeholder.svg?height=60&width=60" },
    { id: 6, name: "Full Stack Course", image: "/placeholder.svg?height=60&width=60" },
    { id: 7, name: "Software Testing Course", image: "/placeholder.svg?height=60&width=60" },
    { id: 8, name: "CCNA Course", image: "/placeholder.svg?height=60&width=60" },
  ]

  // Benefits Data
  const benefits = [
    {
      title: "Practical Training",
      icon: "💻",
      description:
        "The training provided by Seven Mentor is completely practical oriented. We provide a mix of theory as well as practical knowledge to our students.",
    },
    {
      title: "Real Time Projects",
      icon: "📊",
      description:
        "Along with the practical training we also provide real time projects to our students. This helps them to understand the concepts in a better way.",
    },
    {
      title: "Certification",
      icon: "🎓",
      description:
        "We provide a certification to our students after the completion of the course. This certification is valid all over the world.",
    },
  ]

  // Stats Data
  const stats = [
    { number: "2000+", label: "Batches Completed" },
    { number: "100000+", label: "Students Trained" },
    { number: "2500+", label: "Corporate Training" },
    { number: "100%", label: "Job Placement" },
  ]

  // Course Categories
  const courseCategories = [
    { name: "Networking", phone: "020-711-73125" },
    { name: "Software", phone: "020-711-73125" },
    { name: "SAP", phone: "020-711-73125" },
    { name: "HR/Finance", phone: "020-711-73125" },
    { name: "Cad/Cam", phone: "020-711-73125" },
    { name: "Digital Marketing", phone: "020-711-73125" },
    { name: "Languages", phone: "020-711-73125" },
  ]

  // Trending Courses Data
  const trendingCourses = [
    {
      title: "Software Testing Course",
      rating: 5,
      description:
        "Software testing is an investigation conducted to provide stakeholders with information about the quality of the software product or...",
    },
    {
      title: "Python Course",
      rating: 5,
      description:
        "Python is a widely used high-level, general-purpose, interpreted, dynamic programming language. Its design philosophy emphasizes...",
    },
    {
      title: "Data Science Course",
      rating: 5,
      description:
        "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights...",
    },
    {
      title: "Java Course",
      rating: 5,
      description:
        "Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to...",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length)
  }

  const nextTrendingSlide = () => {
    setCurrentTrendingSlide((prev) => (prev + 1) % trendingCourses.length)
  }

  const prevTrendingSlide = () => {
    setCurrentTrendingSlide((prev) => (prev - 1 + trendingCourses.length) % trendingCourses.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">




      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-20 lg:py-32"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Best IT Training Institute In Pune
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-xl">
              SevenMentor is one of the leading IT Training Institutes in Pune. We provide the best training in various
              IT technologies.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition-colors text-lg">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Floating Badges */}
        <div className="hidden lg:block absolute top-[20%] right-[10%] bg-white p-4 rounded-lg shadow-lg text-gray-800 animate-bounce">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div>
              <p className="font-bold text-sm">100%</p>
              <p className="text-xs text-gray-500">Placement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 px-4 shadow-md relative z-10 -mt-10 mx-4 lg:mx-auto max-w-7xl rounded-lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SevenMentor</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
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

      {/* Trending Courses Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trending Courses</h2>
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-2">
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
              </div>
            </div>
            <p className="text-gray-600 max-w-4xl mx-auto text-base">
              Learn The Best And Most In-Demand Courses From SevenMentor To Get Industry-Relevant Training And A Highly
              Paid Job Profile.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={prevTrendingSlide} className="flex-shrink-0 p-2 hover:bg-white rounded-full transition">
              <ChevronLeft size={32} className="text-gray-600 hover:text-gray-900" />
            </button>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[0, 1, 2].map((offset) => {
                  const idx = (currentTrendingSlide + offset) % trendingCourses.length
                  const course = trendingCourses[idx]
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-lg border border-gray-300 overflow-hidden hover:shadow-lg transition flex flex-col h-full"
                    >
                      {/* Best Seller Badge */}
                      <div className="relative pt-4 px-4">
                        <div className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                          BEST SELLER
                        </div>
                      </div>

                      {/* Course Content */}
                      <div className="flex flex-col flex-1 px-6 pb-6 pt-4">
                        <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{course.title}</h3>

                        {/* Star Rating */}
                        <div className="flex justify-center mb-6">
                          {[...Array(course.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-lg">
                              ★
                            </span>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed text-center mb-6 flex-grow">
                          {course.description}
                        </p>

                        {/* Explore Now Button */}
                        <div className="flex justify-center">
                          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded text-sm transition flex items-center gap-2">
                            Explore Now
                            <span>›</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <button onClick={nextTrendingSlide} className="flex-shrink-0 p-2 hover:bg-white rounded-full transition">
              <ChevronRight size={32} className="text-gray-600 hover:text-gray-900" />
            </button>
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
      <section className="bg-gray-600 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title and decorative line */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-white mb-4">Request For Call Back</h2>
            <div className="flex justify-center items-center gap-2">
              <div className="h-1 w-8 bg-orange-500"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="h-1 w-8 bg-orange-500"></div>
            </div>
          </div>

          {/* Subtitle badge */}
          <div className="text-center mb-10">
            <span className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block text-sm font-medium">
              Class Room & Online Training Quotation | Free Career Counselling
            </span>
          </div>

          {/* Form container */}
          <div className="bg-gray-900 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              {/* Name field */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">Your Name *</label>
                <input
                  type="text"
                  placeholder=""
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Email field */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">Your Email *</label>
                <input
                  type="email"
                  placeholder=""
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Contact field */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">Contact No. *</label>
                <input
                  type="tel"
                  placeholder=""
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Mode of Training dropdown */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">Mode of Training*</label>
                <select
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="w-full px-4 py-3 bg-white text-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">—Please choose an option—</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              {/* Course field and Send button in same row */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">Enter Course Name *</label>
                <input
                  type="text"
                  placeholder=""
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Send button - positioned below form on smaller screens, right-aligned on larger */}
            <div className="mt-6 flex justify-end">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded transition-colors">
                SEND
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
