"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSelector } from "react-redux"
import { X, Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Calendar, Clock, User, Home, Send } from 'lucide-react'

// Contact Options Modal
export function ContactModal({ isOpen, onClose, onContactNow }) {
  const { isDarkMode } = useSelector((state) => state.theme)

  const contactOptions = [
    {
      icon: Phone,
      title: "কল করুন",
      titleEn: "Call Now",
      value: "+8801712-244886",
      action: () => (window.location.href = "tel:+8801712244886"),
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      titleEn: "WhatsApp",
      value: "+8801712-244886",
      action: () => window.open("https://wa.me/8801712244886", "_blank"),
      gradient: "from-green-600 to-green-500",
    },
    {
      icon: Mail,
      title: "ইমেইল",
      titleEn: "Email",
      value: "businesshubok@gmail.com",
      action: () => (window.location.href = "mailto:businesshubok@gmail.com"),
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: MapPin,
      title: "অফিস ঠিকানা",
      titleEn: "Office Address",
      value: "Malibagh, Dhaka-1219",
      action: () => window.open("https://maps.google.com/?q=Malibagh+Chowdhurypara+Dhaka", "_blank"),
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/businesshub",
      color: "text-blue-600",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/businesshub",
      color: "text-pink-600",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/company/businesshub",
      color: "text-blue-700",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/businesshub",
      color: "text-blue-500",
    },
  ]

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className={`relative w-full max-w-2xl mx-4 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-2xl shadow-2xl overflow-hidden`}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">যোগাযোগ করুন</h2>
                <p className="text-blue-100 text-sm">আমাদের সাথে সংযুক্ত হন</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Contact Options */}
            <div className="mb-8">
              <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                যোগাযোগের মাধ্যম
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {contactOptions.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={option.action}
                    className={`${
                      isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-50 hover:bg-gray-100"
                    } p-4 rounded-xl transition-all duration-200 text-left group`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`bg-gradient-to-r ${option.gradient} w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                      >
                        <option.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>{option.title}</p>
                        <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{option.value}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-8">
              <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                সোশ্যাল মিডিয়া
              </h3>
              <div className="flex justify-center space-x-4">
                {socialMedia.map((social, index) => (
                  <motion.button
                    key={index}
                    onClick={() => window.open(social.url, "_blank")}
                    className={`${
                      isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-50 hover:bg-gray-100"
                    } w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className={`w-6 h-6 ${social.color}`} />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Contact Now Button */}
            <div className="text-center">
              <motion.button
                onClick={onContactNow}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2 mx-auto shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                <span>এখনই যোগাযোগ করুন</span>
              </motion.button>
              <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                মিটিং এর জন্য অ্যাপয়েন্টমেন্ট নিন
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

// Contact Form Modal
export function ContactFormModal({ isOpen, onClose }) {
  const { isDarkMode } = useSelector((state) => state.theme)
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    meetingDate: "",
    meetingTime: "",
    message: "",
  })

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
    console.log("Meeting request submitted:", formData)
    // You can add your form submission logic here
    alert("আপনার অ্যাপয়েন্টমেন্ট রিকোয়েস্ট পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।")
    onClose()
  }

  // Get today's date for min date attribute
  const today = new Date().toISOString().split("T")[0]

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className={`relative w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-2xl shadow-2xl`}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">অ্যাপয়েন্টমেন্ট বুক করুন</h2>
                <p className="text-green-100 text-sm">মিটিং এর জন্য সময় নির্ধারণ করুন</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Client Name */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <User className="w-4 h-4 inline mr-2" />
                  ক্লায়েন্টের নাম *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white focus:border-green-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-green-500"
                  } focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200`}
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                />
              </div>

              {/* Address */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <Home className="w-4 h-4 inline mr-2" />
                  ঠিকানা *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white focus:border-green-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-green-500"
                  } focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200 resize-none`}
                  placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <Phone className="w-4 h-4 inline mr-2" />
                  ফোন নম্বর *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white focus:border-green-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-green-500"
                  } focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200`}
                  placeholder="+880 1XXX-XXXXXX"
                />
              </div>

              {/* Meeting Date and Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    <Calendar className="w-4 h-4 inline mr-2" />
                    মিটিং এর তারিখ *
                  </label>
                  <input
                    type="date"
                    name="meetingDate"
                    value={formData.meetingDate}
                    onChange={handleInputChange}
                    min={today}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white focus:border-green-500"
                        : "bg-white border-gray-300 text-gray-900 focus:border-green-500"
                    } focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    <Clock className="w-4 h-4 inline mr-2" />
                    মিটিং এর সময় *
                  </label>
                  <select
                    name="meetingTime"
                    value={formData.meetingTime}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white focus:border-green-500"
                        : "bg-white border-gray-300 text-gray-900 focus:border-green-500"
                    } focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200`}
                  >
                    <option value="">সময় নির্বাচন করুন</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  অতিরিক্ত বার্তা
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white focus:border-green-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-green-500"
                  } focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200 resize-none`}
                  placeholder="মিটিং সম্পর্কে কোন বিশেষ তথ্য বা প্রয়োজনীয়তা থাকলে লিখুন..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex space-x-4">
                <motion.button
                  type="button"
                  onClick={onClose}
                  className={`flex-1 ${
                    isDarkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  } px-6 py-3 rounded-lg font-semibold transition-all duration-200`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  বাতিল করুন
                </motion.button>

                <motion.button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>অ্যাপয়েন্টমেন্ট বুক করুন</span>
                </motion.button>
              </div>
            </form>

            {/* Working Hours Info */}
            <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
              <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                <Clock className="w-4 h-4 inline mr-2" />
                আমাদের কার্যসময়:
              </h4>
              <div className={`text-sm space-y-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <p>রবিবার - বৃহস্পতিবার: 9:00 AM - 6:00 PM</p>
                <p>শুক্রবার: 9:00 AM - 5:00 PM</p>
                <p>শনিবার: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
