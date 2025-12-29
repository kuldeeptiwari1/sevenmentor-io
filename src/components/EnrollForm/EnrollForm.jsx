import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  User,
  Mail,
  Phone,
  Award,
  MessageSquare,
  CheckCircle,
  XCircle,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe,
  Users,
  BadgeCheck,
  Rocket
} from "lucide-react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const EnrollForm = ({ mailTo, course, contactNumber }) => {
  const [popup, setPopup] = useState({
    show: false,
    type: "", // success | error
    message: "",
  });

  // Initialize form values
  const initialValues = {
    Name: "",
    Email: "",
    PhoneNumber: "",
    Course: course || "",
    Message: "",
    PageUrl: typeof window !== "undefined" ? window.location.href : "",
  };

  const validationSchema = Yup.object({
    Name: Yup.string()
      .trim()
      .min(3, "Name must be at least 3 characters")
      .required("Full Name is required"),
    Email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    PhoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone Number is required"),
    Course: Yup.string().required("Please select a course"),
    Message: Yup.string(),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setSubmitting(true);
    try {
      const payload = {
        formData: values,
        to: mailTo,
        Course: course,
        contactNo: contactNumber,
        bannerTitle: course,
        mailSubject: "New Course Enrollment",
        userEmailSubject: "Thanks for Enrolling",
      };

      await axios.post("/api/main-form", payload);
      setPopup({
        show: true,
        type: "success",
        message: "Thank you for your interest. Your enrollment request has been received, and our admissions team will contact you shortly.",
      });
      resetForm();
    } catch (err) {
      setPopup({
        show: true,
        type: "error",
        message: "An error occurred while processing your request. Please verify your connection and try again, or contact our support desk.",
      });
    } finally {
      setSubmitting(false);
      setTimeout(() => setPopup((prev) => ({ ...prev, show: false })), 5000);
    }
  };

  return (
    <>
      {/* ---------------- Premium Feedback Modal ---------------- */}
      <AnimatePresence>
        {popup.show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-gray-900/90 backdrop-blur-xl z-[9999] p-4 min-h-screen h-screen overflow-auto"
          >
            <motion.div
              initial={{ scale: 0.8, y: 40, rotateX: 10 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.8, y: 40, rotateX: 10 }}
              className="bg-white rounded-[2.5rem] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] w-full max-w-md border border-white/20 max-h-[calc(100vh-48px)] overflow-auto"
            >
              <div className={`p-10 text-center ${popup.type === "success" ? "bg-gradient-to-b from-emerald-50 to-white" : "bg-gradient-to-b from-rose-50 to-white"}`}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
                  className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${popup.type === "success" ? "bg-emerald-100 text-emerald-600 shadow-[0_8px_30px_rgb(16,185,129,0.3)]" : "bg-rose-100 text-rose-600 shadow-[0_8px_30px_rgb(244,63,94,0.3)]"}`}
                >
                  {popup.type === "success" ? <CheckCircle className="w-12 h-12" /> : <XCircle className="w-12 h-12" />}
                </motion.div>
                <h3 className="text-4xl font-black text-gray-900 mb-3 tracking-tighter">
                  {popup.type === "success" ? "Submission Successful" : "Submission Error"}
                </h3>
                <p className="text-gray-600 text-lg font-semibold leading-relaxed">
                  {popup.message}
                </p>
              </div>
              {/* <div className="p-8 bg-gray-50 flex justify-center">
                <button
                  onClick={() => setPopup({ ...popup, show: false })}
                  className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-black transition-all hover:scale-[1.02] shadow-xl active:scale-[0.98]"
                >
                  Confirm & Continue
                </button>
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------- Main Form Section ---------------- */}
      <motion.section
        id="enroll"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto relative overflow-hidden bg-white/50 backdrop-blur-md rounded-[3rem] shadow-[0_50px_120px_-30px_rgba(0,0,0,0.12)] border border-white/60 lg:flex"
      >
        {/* Floating Background Effects */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-400/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Left Side: Visual & Content */}
        <div className="lg:w-5/12 relative min-h-[350px] lg:min-h-full overflow-hidden flex flex-col justify-between">
          {/* Background Image with Parallax-like effect (CSS) */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
              alt="Students enrolling"
              className="w-full h-full object-cover grayscale-[0.3] brightness-[0.3]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900/80 to-transparent"></div>
          </div>

          <div className="relative z-10 p-6 lg:p-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 backdrop-blur-xl rounded-xl border border-orange-500/20 text-orange-400 text-[10px] font-black mb-6 uppercase tracking-[0.2em]"
            >
              <Rocket className="w-3.5 h-3.5 animate-bounce" />
              Next Batch Starting Soon
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-4 tracking-tighter">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-rose-500">Education</span>.
            </h2>

            <p className="text-gray-400 text-base font-medium mb-8 leading-relaxed max-w-xs">
              Transform your skills and master the industry with our premium learning environment.
            </p>

            {/* Trust Badges - Grid Style */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: ShieldCheck, text: "Accredited Global Certificate", color: "text-emerald-400", bg: "bg-emerald-400/10" },
                { icon: Users, text: "Elite Mentor Network", color: "text-blue-400", bg: "bg-blue-400/10" },
                { icon: BadgeCheck, text: "Job Marketplace Access", color: "text-purple-400", bg: "bg-purple-400/10" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className={`w-10 h-10 ${item.bg} backdrop-blur-md rounded-xl flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-all shadow-inner`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-gray-100 text-[13px] font-black uppercase tracking-tight group-hover:text-white transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Featured Courses Indicator */}
          <div className="relative z-10 mt-auto p-6 lg:p-10 border-t border-white/5 flex items-center justify-between bg-white/[0.02] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-orange-500/50 rounded-full"></div>
              <div>
                <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.25em] mb-0.5">Current Enrollment</p>
                <p className="text-white font-black text-lg tracking-tight leading-none">{course || "Global Learning Space"}</p>
              </div>
            </div>
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
              <Globe className="w-5 h-5 text-white/20 animate-spin-slow" />
            </div>
          </div>
        </div>

        {/* Right Side: High-Conversion Form */}
        <div className="lg:w-7/12 p-6 lg:p-11 relative overflow-hidden">
          {/* Form side decorative lights */}
          <div className="absolute top-[-10%] left-[-10%] w-[250px] h-[250px] bg-orange-500/5 rounded-full blur-[60px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-[60px]"></div>

          <div className="max-w-xl mx-auto relative z-10">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-1 bg-orange-500 rounded-full"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">Secure Enrollment</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900 tracking-tighter">Ready to Start?</h3>
                <p className="text-gray-500 font-bold text-base leading-snug">Join our exclusive learning community.</p>
              </div>
              <Sparkles className="w-6 h-6 text-orange-400 animate-pulse" />
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize={true}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1 group">
                      <label className="text-[11px] font-black text-gray-400 ml-1 uppercase tracking-[0.15em] group-focus-within:text-orange-600 transition-colors">Enter Your Name</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors">
                          <User className="w-4.5 h-4.5" />
                        </div>
                        <Field
                          name="Name"
                          placeholder="Ex: John Harrison"
                          className={`w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border-[2px] rounded-[1rem] outline-none transition-all font-bold text-sm ${errors.Name && touched.Name ? "border-rose-100 bg-rose-50/20 shadow-[0_0_20px_rgba(244,63,94,0.05)]" : "border-transparent focus:border-orange-500 focus:bg-white"}`}
                        />
                      </div>
                      <ErrorMessage name="Name" component="div" className="text-rose-500 text-[9px] font-semibold pl-1 lowercase italic" />
                    </div>

                    {/* Email */}
                    <div className="space-y-1 group">
                      <label className="text-[11px] font-black text-gray-400 ml-1 uppercase tracking-[0.15em] group-focus-within:text-orange-600 transition-colors">Enter Your Email</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors">
                          <Mail className="w-4.5 h-4.5" />
                        </div>
                        <Field
                          name="Email"
                          type="email"
                          placeholder="your-email@gmail.com"
                          className={`w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border-[2px] rounded-[1rem] outline-none transition-all font-bold text-sm ${errors.Email && touched.Email ? "border-rose-100 bg-rose-50/20 shadow-[0_0_20px_rgba(244,63,94,0.05)]" : "border-transparent focus:border-orange-500 focus:bg-white"}`}
                        />
                      </div>
                      <ErrorMessage name="Email" component="div" className="text-rose-500 text-[9px] font-semibold pl-1 lowercase italic" />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1 group">
                      <label className="text-[11px] font-black text-gray-400 ml-1 uppercase tracking-[0.15em] group-focus-within:text-orange-600 transition-colors">Enter Your Phone</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors">
                          <Phone className="w-4.5 h-4.5" />
                        </div>
                        <Field
                          name="PhoneNumber"
                          placeholder="1234567890"
                          className={`w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border-[2px] rounded-[1rem] outline-none transition-all font-bold text-sm ${errors.PhoneNumber && touched.PhoneNumber ? "border-rose-100 bg-rose-50/20 shadow-[0_0_20px_rgba(244,63,94,0.05)]" : "border-transparent focus:border-orange-500 focus:bg-white"}`}
                        />
                      </div>
                      <ErrorMessage name="PhoneNumber" component="div" className="text-rose-500 text-[9px] font-semibold pl-1 lowercase italic" />
                    </div>

                    {/* Course */}
                    <div className="space-y-1 group">
                      <label className="text-[11px] font-black text-gray-400 ml-1 uppercase tracking-[0.15em] group-focus-within:text-orange-600 transition-colors">Enrolling Course</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors">
                          <Award className="w-4.5 h-4.5" />
                        </div>
                        <Field
                          name="Course"
                          placeholder="Select Specialization"
                          className={`w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border-[2px] rounded-[1rem] outline-none transition-all font-bold text-sm ${errors.Course && touched.Course ? "border-rose-100 bg-rose-50/20 shadow-[0_0_20px_rgba(244,63,94,0.05)]" : "border-transparent focus:border-orange-500 focus:bg-white"}`}
                        />
                      </div>
                      <ErrorMessage name="Course" component="div" className="text-rose-500 text-[9px] font-semibold pl-1 lowercase italic" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1 group">
                    <label className="text-[11px] font-black text-gray-400 ml-1 uppercase tracking-[0.15em] group-focus-within:text-orange-600 transition-colors">Message</label>
                    <div className="relative">
                      <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-orange-500 transition-colors">
                        <MessageSquare className="w-4.5 h-4.5" />
                      </div>
                      <Field
                        as="textarea"
                        name="Message"
                        rows="2"
                        placeholder="Your Message..."
                        className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border-transparent border-[2px] rounded-[1rem] outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-sm resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex flex-col items-center gap-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.01, y: -2 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full relative group overflow-hidden bg-gray-900 text-white py-4 rounded-[1.25rem] font-black text-lg flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </motion.button>

                    {/* <p className="text-gray-400 font-bold text-[8px] uppercase tracking-tighter">Your data is secured with AES-256 Encryption</p> */}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default EnrollForm;
