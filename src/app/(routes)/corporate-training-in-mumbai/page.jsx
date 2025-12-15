"use client";

import { useState } from "react";
import {
    Building2,
    Users,
    Award,
    Target,
    TrendingUp,
    CheckCircle,
    Phone,
    Mail,
    MessageCircle,
    MapPin,
    ChevronDown,
    ChevronUp,
    Shield,
    BookOpen,
    Zap,
    UserCheck,
    Clock,
    Star,
    ArrowRight,
    BarChart,
    Layers,
    FileText,
    Code,
    Rocket,
    Briefcase,
    Sparkles,
    TrendingDown,
    DollarSign,
    RefreshCw,
    Monitor,
    Globe,
    Server,
    Database
} from "lucide-react";
import PoupFormEnroll from "../../../components/EnrollForm/PoupFormEnroll";

export default function CorporateTrainingPage() {
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const contactNumber = "02248904395";
    const whatsappNumber = "+918421176876";
    const whatsappMessage = "Hi+I+am+looking+for+Corporate+Training+in+Mumbai";
    const contactEmail = "mumbaileads@sevenmentor.com";

    // const stats = [
    //     { value: "160", label: "Corporate Clients", icon: Building2 },
    //     { value: "4,697", label: "Professionals Trained", icon: Users },
    //     { value: "3,700", label: "Training Hours Delivered", icon: Clock },
    //     { value: "420", label: "Programs Completed", icon: Award }
    // ];

    const whyImportant = [
        {
            icon: Target,
            title: "Bridge Skill Gaps",
            description: "Address specific competency shortages within your team to ensure they meet modern industry demands."
        },
        {
            icon: TrendingUp,
            title: "Improve Team Efficiency",
            description: "Streamline workflows and enhance productivity by equipping your team with the right tools and knowledge."
        },
        {
            icon: Users,
            title: "Build Confidence & Leadership",
            description: "Empower employees with the skills they need to take initiative, lead projects, and drive innovation."
        },
        {
            icon: BarChart,
            title: "Ensure Organizational Growth",
            description: "Foster a culture of continuous learning that drives long-term business sustainability and market competitiveness."
        }
    ];

    const courseCategories = [
        {
            title: "IT & Software Development",
            description: "Full-stack development, mobile apps, and enterprise software solutions.",
            icon: Code,
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Data Science & Analytics",
            description: "Unlock insights with big data, machine learning, and business intelligence training.",
            icon: Database,
            color: "from-purple-500 to-purple-600"
        },
        {
            title: "Cyber Security & Networking",
            description: "Protect your infrastructure with advanced security protocols and networking skills.",
            icon: Shield,
            color: "from-green-500 to-green-600"
        },
        {
            title: "Cloud Computing & DevOps",
            description: "Master AWS, Azure, GCP, and DevOps practices for scalable operations.",
            icon: Server,
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Digital Marketing",
            description: "Strategic marketing in the digital age, covering SEO, PPC, and social media.",
            icon: Globe,
            color: "from-red-500 to-red-600"
        },
        {
            title: "HR, Management & Soft Skills",
            description: "Leadership development, communication, and human resource management.",
            icon: Users,
            color: "from-teal-500 to-teal-600"
        }
    ];

    const deliveryModes = [
        {
            title: "On-site Corporate Training",
            description: "We bring our experts to your office for hands-on, face-to-face training sessions tailored to your team's environment.",
            icon: Building2
        },
        {
            title: "Online Instructor-led Sessions",
            description: "Live, interactive virtual classrooms that allow your distributed teams to learn from anywhere.",
            icon: Monitor
        },
        {
            title: "Hybrid Training Models",
            description: "The best of both worlds – blending flexibility of online learning with the impact of in-person practicals.",
            icon: Layers
        }
    ];

    const advantages = [
        {
            title: "Industry-Expert Trainers",
            description: "Learn from seasoned professionals with years of real-world experience in top companies.",
            icon: Star
        },
        {
            title: "Hands-on Practical Learning",
            description: "Focus on doing, not just knowing. Our training emphasizes practical application and skills.",
            icon: Code
        },
        {
            title: "Real-time Case Studies",
            description: "Solve actual industry problems and analyze case studies relevant to your business domain.",
            icon: FileText
        },
        {
            title: "Flexible Schedules",
            description: "Training that fits your business hours. Weekday, weekend, or custom fast-track options available.",
            icon: Clock
        },
        {
            title: "Post-training Support",
            description: "We don't just train and leave. We provide ongoing support to ensure successful implementation.",
            icon: MessageCircle
        }
    ];

    const faqs = [
        {
            id: 1,
            question: "What is Corporate Training and how does it benefit organizations?",
            answer: "Corporate Training is customized professional development programs designed specifically for companies to upskill their employees in latest technologies, tools, and methodologies. Benefits include improved productivity, reduced skill gaps, better employee retention, enhanced team performance, and faster project delivery."
        },
        {
            id: 2,
            question: "What courses do you offer for Corporate Training?",
            answer: "We offer comprehensive corporate training programs across IT & Software Development, Data Science & Analytics, Cyber Security, Cloud Computing & DevOps, Digital Marketing, as well as HR, Management & Soft Skills."
        },
        {
            id: 3,
            question: "How customized can the training be?",
            answer: "We believe every company is different. We offer fully customizable training programs. We assess your business needs and develop a training plan that adapts to the skills of your workforce and the specific needs of your active projects."
        },
        {
            id: 4,
            question: "What delivery modes are available?",
            answer: "We offer flexible delivery modes including On-site corporate training at your premises, Online instructor-led sessions for remote teams, and Hybrid training models."
        },
        {
            id: 5,
            question: "Do you offer certification?",
            answer: (
                <span>
                    Yes, we provide{" "}
                    <a
                        href="https://www.sevenmentor.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-700 hover:underline"
                    >
                        SevenMentor
                    </a>{" "}
                    Course Completion Certificates to all participants. Additionally, we can prepare
                    employees for industry-recognized certifications (AWS, PMP, etc.) depending on
                    the course.
                </span>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* SEO Header */}
            <header className="sr-only">
                <h1>Corporate Training in Mumbai - SevenMentor</h1>
            </header>

            {/* Floating Contact Buttons */}
            <div className="fixed left-6 bottom-6 z-50 flex flex-col gap-3">
                <a
                    href={`tel:${contactNumber}`}
                    className="w-14 h-14 bg-red-600 hover:bg-red-700 rounded-xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300"
                    aria-label="Call us"
                >
                    <Phone className="w-7 h-7 text-white" />
                </a>
                <a
                    href={`https://wa.me/${whatsappNumber.replace(/\+/g, "")}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-green-600 hover:bg-green-700 rounded-xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300"
                    aria-label="WhatsApp us"
                >
                    <MessageCircle className="w-7 h-7 text-white" />
                </a>
            </div>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white py-22 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC00Yy0xLjEgMC0yIC45LTIgMnY0YzAgMS4xLjkgMiAyIDJoNGMxLjEgMCAyLS45IDItMnYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 px-6 py-3 rounded-full mb-8">
                            <Building2 className="w-6 h-6 text-orange-300" />
                            <span className="text-lg font-semibold text-orange-200">
                                UPSKILL YOUR WORKFORCE
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Corporate Training <span className="text-orange-400">in Mumbai</span>
                        </h1>

                        <p className="text-[20px] md:text-[20px] text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                            In the ever-evolving business world, upskilling employees isn’t something you should do — it’s something that you have to do. The right blend of Corporate Training in Mumbai will help companies to create a learning/business culture, and the same is imperative to survive in the market. We know corporate reality and provide training that matches real-world needs, rather than theory.

                        </p>

                        <div className="flex flex-wrap justify-center gap-6 mb-12">
                            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                                <Users className="w-5 h-5 text-orange-400" />
                                <span className="text-base font-medium">Real-World Needs</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                                <Target className="w-5 h-5 text-orange-400" />
                                <span className="text-base font-medium">Practical Training</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button
                                onClick={() => setShowForm(true)}
                                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                <span className="flex items-center gap-3">
                                    Get Started Today
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            {/* <section className="py-16 bg-white shadow-xl -mt-12 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <div key={idx} className="text-center group">
                                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <div className="text-4xl font-bold text-gray-900 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section> */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                {/* Why Corporate Training is Important */}
                <section className="bg-gradient-to-br from-white via-orange-50/30 to-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Why Corporate Training in Mumbai is Important
                        </h2>
                        <p className="text-xl text-orange-100 max-w-4xl mx-auto">
                            Mumbai has become an IT and industrial hotspot, making Corporate Training a wise investment. With companies constantly striving to meet changing client needs, businesses need individuals who can learn quickly.
                        </p>
                    </div>

                    <div className="p-12">
                        <div className="mb-8 text-center">
                            <p className="text-lg text-gray-700 font-medium">Our corporate courses training in Mumbai are structured to:</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {whyImportant.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="group p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-300 text-center"
                                    >
                                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* About SevenMentor */}
                <section className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="p-12 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6 w-fit">
                                <Star className="w-5 h-5 text-orange-600" />
                                <span className="text-sm font-bold text-orange-700">YOUR TRAINING PARTNER</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                About SevenMentor – Your Best Training Partner
                            </h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                                <p>
                                    <a href="https://www.sevenmentor.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-orange-600 hover:text-orange-700 hover:underline">SevenMentor</a> is a firm that has become one of the leading Corporate Training Companies in Mumbai. We utilize facilitators with years of experience and industry knowledge to create a learning methodology that matches your organization.
                                </p>
                                <p>
                                    Small projects and measures assure you work at your company or along with seniors of Phone companies in India or a startup, <a href="https://www.sevenmentor.com" target="_blank" rel="noopener noreferrer" className="font-bold text-orange-600 hover:text-orange-700 hover:underline">SevenMentor</a> Corporate Training in Mumbai, for reports that are realistic.

                                </p>
                                {/* <p>
                                    We know corporate reality and provide training that matches real-world needs, rather than just theory.
                                </p> */}
                            </div>
                        </div>
                        <div className="bg-gray-100 relative min-h-[400px]">
                            {/* Abstract Visual Representation */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 opacity-90"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                                    <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 text-white text-center">
                                        <Users className="w-10 h-10 mx-auto mb-3" />
                                        <div className="font-bold text-2xl">Leaders</div>
                                        <div className="text-sm opacity-90">In Corporate Training</div>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 text-white text-center translate-y-8">
                                        <Clock className="w-10 h-10 mx-auto mb-3" />
                                        <div className="font-bold text-2xl">Realistic</div>
                                        <div className="text-sm opacity-90">Reporting & Timelines</div>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 text-white text-center">
                                        <Target className="w-10 h-10 mx-auto mb-3" />
                                        <div className="font-bold text-2xl">Custom</div>
                                        <div className="text-sm opacity-90">Methodologies</div>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 text-white text-center translate-y-8">
                                        <Award className="w-10 h-10 mx-auto mb-3" />
                                        <div className="font-bold text-2xl">Expert</div>
                                        <div className="text-sm opacity-90">Facilitators</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Corporate Training Programs */}
                <section className="bg-gray-50 rounded-3xl shadow-inner border border-gray-200 overflow-hidden py-16 px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our Corporate Training Programs
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Our Corporate Training In Mumbai is very comprehensive. Every corporate course in Mumbai is designed keeping industry needs and real-life scenarios in mind.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courseCategories.map((course, idx) => {
                            const Icon = course.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className={`h-2 w-full bg-gradient-to-r ${course.color}`}></div>
                                    <div className="p-8">
                                        <div className={`w-14 h-14 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 block">
                                            {course.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {course.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-500 italic">...and customized topics based on your specific requirements.</p>
                    </div>
                </section>

                {/* Customized Training Solutions */}
                <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl shadow-2xl overflow-hidden p-12">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <div className="inline-block px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 font-semibold mb-6">
                                TAILORED FOR YOU
                            </div>
                            <h2 className="text-4xl font-bold mb-6">
                                Customized Training Solutions for Corporations
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                We believe every company is different. That’s why we offer fully customizable Corporate Training in Mumbai programs. We assess your business needs and develop a training plan that adapts to the skills of the workforce and the needs of each project.

                            </p>
                            <p className="text-orange-400 font-semibold text-lg">
                                <a href="https://www.sevenmentor.com" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">SevenMentor</a>’s flexible delivery modes include:
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="space-y-4">
                                {deliveryModes.map((mode, idx) => {
                                    const Icon = mode.icon;
                                    return (
                                        <div key={idx} className="flex items-start gap-4 bg-white/10 p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                                            <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl mb-1">{mode.title}</h3>
                                                <p className="text-gray-400 text-sm">{mode.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages of SevenMentor */}
                <section className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden px-8 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Advantages of <a href="https://www.sevenmentor.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 hover:underline">SevenMentor</a> for Corporate Training in Mumbai
                        </h2>
                        <p className="text-xl text-gray-600">
                            When you choose <a href="https://www.sevenmentor.com" target="_blank" rel="noopener noreferrer" className="font-bold text-orange-600 hover:text-orange-700 hover:underline">SevenMentor</a>, you are choosing quality, reliability, and results.
                            With our corporate course in Mumbai, employees not only learn but also implement what they learn at work successfully.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {advantages.map((adv, idx) => {
                            const Icon = adv.icon;
                            return (
                                <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-orange-50 transition-colors duration-300 group border border-gray-100 hover:border-orange-200">
                                    <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Icon className="w-8 h-8 text-orange-500" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{adv.title}</h3>
                                    <p className="text-xs text-gray-500">{adv.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-50 to-white p-10 border-b border-gray-200">
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                                <FileText className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                                <p className="text-gray-600 mt-1">Everything you need to know about our corporate training</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12">
                        <div className="max-w-4xl mx-auto space-y-4">
                            {faqs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-orange-400 transition-all duration-300 shadow-md hover:shadow-xl"
                                >
                                    <button
                                        onClick={() =>
                                            setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                                        }
                                        className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-orange-50 transition-colors duration-300 text-left"
                                    >
                                        <span className="font-bold text-gray-900 text-lg pr-4">
                                            {faq.question}
                                        </span>
                                        {expandedFaq === faq.id ? (
                                            <ChevronUp className="w-6 h-6 text-orange-500 flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />
                                        )}
                                    </button>
                                    {expandedFaq === faq.id && (
                                        <div className="p-6 bg-white border-t-2 border-gray-200">
                                            <p className="text-gray-700 text-lg leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA with Contact Info */}
                <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="p-12 flex flex-col justify-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Invest in Your Future With Tailored Corporate Training
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Transform your workforce into high-performing teams ready to tackle tomorrow's challenges. Partner with <a href="https://www.sevenmentor.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 hover:underline">SevenMentor</a> for customized training solutions that deliver real results.
                            </p>
                            <div className="space-y-4 mb-8">
                                {/* <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-lg">50+ Customizable Training Programs</span>
                                </div> */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-lg">Industry-Expert Trainers with 10+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-lg">On-Site, Online, or Hybrid Training Options</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-lg">Comprehensive Post-Training Support</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 p-12 border-l border-slate-700">
                            <h3 className="text-3xl font-bold text-orange-500 mb-8 border-b-2 border-orange-500 inline-block pb-2">
                                Enquiry For Corporate Training
                            </h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-500/20 p-3 rounded-lg">
                                        <MapPin className="w-7 h-7 text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-orange-500 mb-2">Mumbai Office</h4>
                                        <a
                                            href="https://maps.app.goo.gl/wHWLQcDJERg3jEqp9"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 leading-relaxed hover:text-orange-500 transition-colors block"
                                        >
                                            Office no. 101 & part office no.1,<br />
                                            Civic Centre, MMGS Marg,<br />
                                            Dadar East, Mumbai,<br />
                                            <span className="text-orange-500 font-semibold">Maharashtra 400014</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-red-500 p-3 rounded-lg">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Call Us</p>
                                        <a
                                            href={`tel:${contactNumber}`}
                                            className="text-2xl font-bold hover:text-orange-500 transition-colors"
                                        >
                                            {contactNumber}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-green-500 p-3 rounded-lg">
                                        <MessageCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">WhatsApp</p>
                                        <a
                                            href={`https://wa.me/${whatsappNumber.replace(/\+/g, "")}?text=${whatsappMessage}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-2xl font-bold hover:text-orange-500 transition-colors"
                                        >
                                            {whatsappNumber}
                                        </a>
                                    </div>
                                </div>

                                {/* <div className="flex items-center gap-4">
                                    <div className="bg-blue-500 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email Us</p>
                                        <a
                                            href={`mailto:${contactEmail}`}
                                            className="text-xl font-bold hover:text-orange-500 transition-colors break-all"
                                        >
                                            {contactEmail}
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4"><a href="https://www.sevenmentor.com/corporate-training" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">SevenMentor Corporate Training Solutions</a></h3>
                        <p className="text-gray-400 mb-6">
                            Empowering Teams, Elevating Success.
                        </p>
                        <p className="text-gray-500">
                            © 2025 <a href="https://www.sevenmentor.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">SevenMentor</a> Pvt. Ltd. All rights reserved.
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                            Best Corporate Training Solutions Mumbai | Enterprise Technology Training Programs | Customized Workforce Development
                        </p>
                    </div>
                </div>
            </footer>

            {/* Contact Form Modal */}
            {/* Enrollment Popup Form */}
            {showForm && (
                <PoupFormEnroll
                    onClose={() => setShowForm(false)}
                    course="Corporate Training"
                    contactNumber={contactNumber}
                    mailTo={contactEmail}
                />
            )}

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "Product",
                        name: "Invisalign",
                        aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "44" }
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "LocalBusiness",
                        name: "SevenMentor",
                        openingHours: "Open 24 Hours From Monday to Sunday",
                        additionalProperty: "https://en.wikipedia.org/wiki/Data_science",
                        additionalType: "http://productontology.org/id/Data_science",
                        areaServed: {
                            "@type": "GeoCircle",
                            name: "SevenMentor service area",
                            geoMidpoint: {
                                "@type": "GeoCoordinates",
                                postalCode: "400014",
                                latitude: "19.1727165",
                                longitude: "72.3212996",
                                description: "Our office location can be found here.",
                                name: "SevenMentor geo location"
                            },
                            geoRadius: "20000",
                            description: "SevenMentor proudly serves the entire city of Mumbai Maharashtra"
                        },
                        email: "mumbaileads@sevenmentor.com",
                        address: {
                            "@type": "PostalAddress",
                            postalCode: "400014",
                            addressRegion: "Maharashtra",
                            addressCountry: "India",
                            streetAddress: "Office no. 101 & part, 1, Civic Centre, MMGS Marg, Dadar East, Dadar, Mumbai, Maharashtra 400014",
                            addressLocality: "Mumbai"
                        },
                        paymentAccepted: "Cash, Credit Card",
                        telephone: "02248904395",
                        image: {
                            "@type": "ImageObject",
                            name: "SevenMentor image",
                            url: "https://www.sevenmentor.io/"
                        },
                        ContactPoint: {
                            "@type": "ContactPoint",
                            name: "SevenMentor inquiry",
                            availableLanguage: "https://en.wikipedia.org/wiki/List_of_dialects_of_the_English_language",
                            telephone: "02248904395",
                            contactType: "customer support",
                            "@id": "https://www.sevenmentor.io/"
                        },
                        geo: {
                            "@type": "GeoCoordinates",
                            latitude: "19.1727165",
                            longitude: "72.3212996",
                            description: "Our office location can be found here.",
                            name: "SevenMentor geo location"
                        },
                        description: "SevenMentor is a leading IT and Non-IT training institute in Mumbai, offering industry-focused courses, expert trainers, and career-oriented programs for students and professionals.",
                        priceRange: "10000-1000000",
                        url: "https://www.sevenmentor.io/",
                        currenciesAccepted: "₹",
                        hasMap: "https://maps.app.goo.gl/pFGziECJ1BNyZyZu6",
                        logo: "https://www.sevenmentor.io/",
                        serviceArea: {
                            "@type": "GeoCircle",
                            name: "SevenMentor service area",
                            geoMidpoint: {
                                "@type": "GeoCoordinates",
                                postalCode: "411005",
                                latitude: "19.1727165",
                                longitude: "72.3212996",
                                description: "Our office location can be found here.",
                                name: "SevenMentor geo location"
                            },
                            geoRadius: "20000",
                            description: "SevenMentor proudly serves the entire city of Pune"
                        },
                        sameAs: [
                            "https://www.facebook.com/sevenmentor",
                            "https://twitter.com/SevenMentor",
                            "https://www.youtube.com/channel/UChNDri-8mgQhrlp2KHLpkYA",
                            "https://www.linkedin.com/company/sevenmentor/",
                            "https://www.instagram.com/sevenmentor/",
                            ""
                        ],
                        "@id": "https://www.sevenmentor.io/"
                    })
                }}
            />
        </div>
    );
}
