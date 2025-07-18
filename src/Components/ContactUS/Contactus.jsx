"use client"
import { useState } from "react"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building2,
  CheckCircle,
  Sparkles,
  Headphones,
  Shield,
  Zap,
} from "lucide-react"

export default function ContactPage() {
  const { isDarkMode } = useSelector((state) => state.theme)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const contactMethods = [
    {
      icon: Phone,
      title: "হটলাইন",
      titleEn: "Hotline",
      value: "+8801712-244886",
      description: "সরাসরি কল করুন",
      descriptionEn: "Call us directly",
      gradient: "from-green-500 to-emerald-500",
      action: "tel:+8801712244886",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      titleEn: "WhatsApp",
      value: "+8801712-244886",
      description: "WhatsApp এ মেসেজ করুন",
      descriptionEn: "Message us on WhatsApp",
      gradient: "from-green-600 to-green-500",
      action: "https://wa.me/8801712244886",
    },
    {
      icon: Mail,
      title: "ইমেইল",
      titleEn: "Email",
      value: "businesshubok@gmail.com",
      description: "ইমেইল পাঠান",
      descriptionEn: "Send us an email",
      gradient: "from-blue-500 to-indigo-500",
      action: "mailto:businesshubok@gmail.com",
    },
    {
      icon: MapPin,
      title: "অফিস ঠিকানা",
      titleEn: "Office Address",
      value: "House# 72/B, Malibagh Chowdhurypara",
      description: "Dhaka-1219, Bangladesh",
      descriptionEn: "Visit our office",
      gradient: "from-purple-500 to-pink-500",
      action: "https://maps.google.com/?q=Malibagh+Chowdhurypara+Dhaka",
    },
  ]

  const services = [
    "ERP Implementation",
    "QuickBooks Setup",
    "Financial Consulting",
    "Training & Support",
    "Custom Development",
    "System Integration",
    "Other",
  ]

  const workingHours = [
    { day: "রবিবার - বৃহস্পতিবার", dayEn: "Sunday - Thursday", time: "9:00 AM - 6:00 PM" },
    { day: "শুক্রবার", dayEn: "Friday", time: "9:00 AM - 5:00 PM" },
    { day: "শনিবার", dayEn: "Saturday", time: "10:00 AM - 4:00 PM" },
  ]

  const supportFeatures = [
    {
      icon: Clock,
      title: "দ্রুত সাড়া",
      titleEn: "Quick Response",
      description: "২৪ ঘন্টার মধ্যে উত্তর",
      descriptionEn: "Response within 24 hours",
    },
    {
      icon: Headphones,
      title: "বিশেষজ্ঞ সাপোর্ট",
      titleEn: "Expert Support",
      description: "অভিজ্ঞ টিমের সহায়তা",
      descriptionEn: "Help from experienced team",
    },
    {
      icon: Shield,
      title: "বিনামূল্যে পরামর্শ",
      titleEn: "Free Consultation",
      description: "প্রাথমিক পরামর্শ সম্পূর্ণ বিনামূল্যে",
      descriptionEn: "Initial consultation completely free",
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add your form submission logic here
  }

  const handleContactMethod = (action) => {
    if (action.startsWith("http")) {
      window.open(action, "_blank")
    } else {
      window.location.href = action
    }
  }

  return (
    <div className={`min-h-screen transition-all duration-500 pt-16 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      {/* Hero Section */}
      <motion.div
        className="relative py-20 lg:py-24 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-6"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-2xl shadow-lg inline-block">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl lg:text-5xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            যোগাযোগ করুন
          </motion.h1>

          <motion.p
            className="text-lg lg:text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            আপনার ব্যবসায়িক প্রয়োজন নিয়ে আমাদের সাথে আলোচনা করুন। আমাদের বিশেষজ্ঞ দল আপনাকে সর্বোত্তম সমাধান প্রদান করতে প্রস্তুত।
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <button
              onClick={() => handleContactMethod("tel:+8801712244886")}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>এখনই কল করুন</span>
            </button>
            <button
              onClick={() => handleContactMethod("https://wa.me/8801712244886")}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp করুন</span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Methods */}
      <motion.div
        className={`py-16 lg:py-20 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-2xl shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-bounce" />
              </div>
            </motion.div>

            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              যোগাযোগের মাধ্যম
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              আপনার সুবিধামতো যেকোনো মাধ্যমে আমাদের সাথে যোগাযোগ করুন
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? "bg-gray-700" : "bg-white"} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group cursor-pointer`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -5 }}
                onClick={() => handleContactMethod(method.action)}
              >
                <div
                  className={`bg-gradient-to-r ${method.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {method.title}
                </h3>
                <p className={`text-sm mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{method.titleEn}</p>
                <p className={`text-sm font-medium mb-2 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                  {method.value}
                </p>
                <p className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Form & Office Info */}
      <motion.div
        className="py-16 lg:py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl shadow-lg mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>মেসেজ পাঠান</h3>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Send us a message</p>
                  </div>
                </div>
                <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  আপনার প্রয়োজন সম্পর্কে বিস্তারিত জানান। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      নাম *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        isDarkMode
                          ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                          : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200`}
                      placeholder="আপনার নাম লিখুন"
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      ইমেইল *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        isDarkMode
                          ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                          : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      ফোন নম্বর
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        isDarkMode
                          ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                          : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200`}
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      কোম্পানি
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        isDarkMode
                          ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                          : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200`}
                      placeholder="আপনার কোম্পানির নাম"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    সেবার ধরন
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                        : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200`}
                  >
                    <option value="">সেবা নির্বাচন করুন</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    বার্তা *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                        : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none`}
                    placeholder="আপনার প্রয়োজন সম্পর্কে বিস্তারিত লিখুন..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>বার্তা পাঠান</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-8"
            >
              {/* Office Details */}
              <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-lg p-8`}>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-2xl shadow-lg mr-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>আমাদের অফিস</h3>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Our Office</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-purple-500 mt-1" />
                    <div>
                      <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        House# 72/B, Malibagh Chowdhurypara
                      </p>
                      <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Dhaka-1219, Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-500" />
                    <div>
                      <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>+8801712-244886</p>
                      <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>WhatsApp Available</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        businesshubok@gmail.com
                      </p>
                      <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Email us anytime</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => handleContactMethod("https://maps.google.com/?q=Malibagh+Chowdhurypara+Dhaka")}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>মানচিত্রে দেখুন</span>
                  </button>
                </div>
              </div>

              {/* Working Hours */}
              <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-lg p-8`}>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-2xl shadow-lg mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>কার্যসময়</h3>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Working Hours</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>{schedule.day}</p>
                        <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{schedule.dayEn}</p>
                      </div>
                      <p className={`font-medium ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>{schedule.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Support Features */}
      <motion.div
        className={`py-16 lg:py-20 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-3 rounded-2xl shadow-lg">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <Zap className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
            </motion.div>

            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              আমাদের সাপোর্ট সেবা
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              আপনার সন্তুষ্টিই আমাদের অগ্রাধিকার। আমরা সর্বদা আপনার সেবায় নিয়োজিত।
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? "bg-gray-700" : "bg-white"} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{feature.titleEn}</p>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        className="py-16 lg:py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-6"
          >
            <CheckCircle className="w-12 h-12 mx-auto text-yellow-300" />
          </motion.div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-4">আজই শুরু করুন</h2>
          <p className="text-lg text-green-100 mb-8">
            আপনার ব্যবসায়িক সাফল্যের জন্য আমাদের সাথে যোগাযোগ করুন। বিনামূল্যে পরামর্শ পান এবং সঠিক সমাধান খুঁজে নিন।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleContactMethod("tel:+8801712244886")}
            >
              <Phone className="w-5 h-5" />
              <span>+8801712-244886</span>
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-200 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleContactMethod("https://wa.me/8801712244886")}
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp করুন</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
