"use client"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Calculator,
  Users,
  Shield,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Building2,
  Settings,
  BarChart3,
  Sparkles,
  Award,
  Zap,
  Globe,
  Database,
  FileText,
  DollarSign,
  Truck,
  UserCheck,
  Briefcase,
  PieChart,
  Factory,
  Store,
  Calendar,
  BookOpen,
  Cog,
  UserPlus,
  Cloud,
} from "lucide-react"

export default function ServicesPage() {
  const { isDarkMode } = useSelector((state) => state.theme)
  const navigate = useNavigate()

  const erpServices = [
    {
      icon: DollarSign,
      title: "আর্থিক ব্যবস্থাপনা",
      titleEn: "Financial Management",
      description: "সম্পূর্ণ আর্থিক নিয়ন্ত্রণ এবং বিশ্লেষণের জন্য উন্নত অ্যাকাউন্টিং সিস্টেম",
      descriptionEn: "Advanced accounting system for complete financial control and analysis",
      gradient: "from-green-500 to-emerald-500",
      features: ["লেজার ম্যানেজমেন্ট", "বাজেট পরিকল্পনা", "আর্থিক রিপোর্ট", "ট্যাক্স ম্যানেজমেন্ট"],
    },
    {
      icon: Truck,
      title: "সাপ্লাই চেইন ম্যানেজমেন্ট",
      titleEn: "Supply Chain Management",
      description: "সম্পূর্ণ সাপ্লাই চেইন অপ্টিমাইজেশন এবং ইনভেন্টরি নিয়ন্ত্রণ",
      descriptionEn: "Complete supply chain optimization and inventory control",
      gradient: "from-blue-500 to-indigo-500",
      features: ["ইনভেন্টরি ট্র্যাকিং", "সাপ্লায়ার ম্যানেজমেন্ট", "অর্ডার প্রসেসিং", "ডিস্ট্রিবিউশন"],
    },
    {
      icon: UserCheck,
      title: "কাস্টমার রিলেশনশিপ ম্যানেজমেন্ট",
      titleEn: "Customer Relationship Management",
      description: "গ্রাহক সম্পর্ক উন্নতি এবং বিক্রয় বৃদ্ধির জন্য CRM সিস্টেম",
      descriptionEn: "CRM system for improving customer relationships and increasing sales",
      gradient: "from-purple-500 to-pink-500",
      features: ["গ্রাহক ডেটাবেস", "সেলস ট্র্যাকিং", "মার্কেটিং অটোমেশন", "কাস্টমার সাপোর্ট"],
    },
    {
      icon: Briefcase,
      title: "হিউম্যান রিসোর্স",
      titleEn: "Human Resources",
      description: "কর্মচারী ব্যবস্থাপনা এবং পেরোল সিস্টেমের সম্পূর্ণ সমাধান",
      descriptionEn: "Complete solution for employee management and payroll system",
      gradient: "from-orange-500 to-red-500",
      features: ["পেরোল ম্যানেজমেন্ট", "অ্যাটেন্ডেন্স ট্র্যাকিং", "পারফরমেন্স মূল্যায়ন", "ট্রেনিং ম্যানেজমেন্ট"],
    },
  ]

  const quickbooksFeatures = [
    {
      icon: UserPlus,
      title: "User Creation - Unlimited",
      description: "অসীমিত ব্যবহারকারী তৈরি করার সুবিধা",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cloud,
      title: "Remote Access - Online",
      description: "যেকোনো স্থান থেকে অনলাইন অ্যাক্সেস",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "উন্নত ডেটা নিরাপত্তা ব্যবস্থা",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: FileText,
      title: "Voucher Customization",
      description: "কাস্টমাইজেবল ভাউচার টেমপ্লেট",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: BarChart3,
      title: "Report Customization",
      description: "কাস্টম রিপোর্ট তৈরির সুবিধা",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Store,
      title: "Multiple Store Management",
      description: "একাধিক স্টোর ব্যবস্থাপনা",
      gradient: "from-teal-500 to-green-500",
    },
    {
      icon: Building2,
      title: "Unlimited Company Creation",
      description: "অসীমিত কোম্পানি তৈরির সুবিধা",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: PieChart,
      title: "Project wise P&L Account",
      description: "প্রজেক্ট ভিত্তিক লাভ-ক্ষতির হিসাব",
      gradient: "from-pink-500 to-red-500",
    },
  ]

  const quickbooksAdvantages = [
    "হিসাব রক্ষণের জন্য সব ধরণের লেজার তৈরী করার সুবিধা",
    "সকল হিসাব গুলোর কোডিং করার সুবিধা",
    "বিভিন্ন টেমপ্লেট সমৃদ্ধ ভাউচারে কাজ করার সুবিধা",
    "প্রতিটি পণ্য ও সেবার লাভ ক্ষতি নিরুপন করতে পারা",
    "মাসিক / বাৎসরিক বাজেট তৈরী করা ও এনালাইসিস করা",
    "মাল্টি কারেন্সি তে কাজ করার সুবিধা",
    "ক্রেতা /বিক্রেতার প্রতিটি লেনদেনের বিপরীতে আলাদা আলাদা রিসিভ /পেমেন্ট এর হিসাব রাখা",
    "ব্যাংক সমন্বয় বিবরণী প্রস্তুত করা",
    "ক্রয় ও বিক্রয় অর্ডার ব্যবস্থাপনা",
    "ডেবিট নোট ও ক্রেডিট নোটের ব্যবস্থাপনা",
    "ভ্যাট ব্যবস্থাপনা",
    "ক্রয় হিসাব , বিক্রয় হিসাব রেজিস্টার",
    "আন্তঃ ফেরত , বহিঃ ফেরত করার পদ্ধতি",
    "ক্রয় ও বিক্রয় চালানপত্র",
    "মজুদ পণ্যের মূল্য নির্ধারণ পদ্ধতি",
    "মাল্টি ওয়্যার হাউস ব্যবস্থাপনা",
    "ব্যবহারিত উপকরণ , উৎপাদিত পণ্য, ব্যবসায়িক পণ্য ও সেবা ব্যবস্থাপনা",
    "কর্মচারী/কর্মকর্তাদের বেতন ও মজুরির বিবিধ প্রকার আয়, কর্তন, প্রভিডেন্ড ফান্ড, ইন্স্যুরেন্স, অগ্রিম কর কর্তন ইত্যাদি ব্যবস্থাপনা",
  ]

  const industries = [
    { name: "Education ERP", icon: BookOpen, color: "from-blue-500 to-indigo-500" },
    { name: "Garments ERP", icon: Factory, color: "from-purple-500 to-pink-500" },
    { name: "Hospital ERP", icon: UserCheck, color: "from-green-500 to-emerald-500" },
    { name: "Retail Software", icon: Store, color: "from-orange-500 to-red-500" },
    { name: "Manufacturing", icon: Cog, color: "from-teal-500 to-cyan-500" },
    { name: "Construction", icon: Building2, color: "from-yellow-500 to-orange-500" },
  ]

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
              <Settings className="w-8 h-8 text-white" />
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
            আমাদের প্রিমিয়াম সেবাসমূহ
          </motion.h1>

          <motion.p
            className="text-lg lg:text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            আধুনিক ERP সিস্টেম এবং QuickBooks এর মাধ্যমে আপনার ব্যবসায়িক প্রক্রিয়াগুলিকে আরও দক্ষ এবং লাভজনক করে তুলুন
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg">
              <Phone className="w-5 h-5" />
              <span>যোগাযোগ করুন</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
              <ArrowRight className="w-5 h-5" />
              <span>ডেমো দেখুন</span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* ERP Services Section */}
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
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl shadow-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-bounce" />
              </div>
            </motion.div>

            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              ERP সিস্টেম সেবাসমূহ
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              আর্থিক ব্যবস্থাপনা, সাপ্লাই চেইন ম্যানেজমেন্ট, কাস্টমার রিলেশনশিপ ম্যানেজমেন্ট, হিউম্যান রিসোর্স এবং আরও অনেক কিছুর মতো মূল
              ব্যবসায়িক ক্রিয়াকলাপগুলিকে একটি সিস্টেমে সংযুক্ত করুন
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {erpServices.map((service, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? "bg-gray-700" : "bg-white"} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white`}>
                  <service.icon className="w-8 h-8 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.titleEn}</p>
                </div>

                <div className="p-6">
                  <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {service.description}
                  </p>
                  <p className={`text-xs mb-4 italic ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    {service.descriptionEn}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* QuickBooks Features Section */}
      <motion.div
        className="py-16 lg:py-20"
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
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <Zap className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
            </motion.div>

            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              QuickBooks Desktop ফিচারসমূহ
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              ব্যবসায়িক সকল হিসাব রাখার জন্য ব্যবহার করুন QuickBooks-Desktop যা একটি সমন্বিত Accounting, Inventory, Manufacturing
              এবং Payroll সফটওয়্যার
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickbooksFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`bg-gradient-to-r ${feature.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* QuickBooks Advantages Section */}
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
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-2xl shadow-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <Award className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-bounce" />
              </div>
            </motion.div>

            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              QuickBooks এর বিশেষ সুবিধাসমূহ
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              পৃথিবীব্যাপী ব্যবসায়ীদের আস্থা অর্জন করে চলেছে দুই যুগেরও বেশী সময় ধরে
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickbooksAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? "bg-gray-700" : "bg-white"} rounded-xl shadow-lg p-4 flex items-start space-x-3 hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ x: 5 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{advantage}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Industries Section */}
      <motion.div
        className="py-16 lg:py-20"
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
                <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-2xl shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <Globe className="absolute -top-1 -right-1 w-4 h-4 text-blue-400 animate-spin" />
              </div>
            </motion.div>

            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              বিভিন্ন ইন্ডাস্ট্রির জন্য সমাধান
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              শিক্ষা, গার্মেন্টস, হাসপাতাল, রিটেইল এবং আরও অনেক ক্ষেত্রের জন্য বিশেষায়িত ERP সমাধান
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group cursor-pointer`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className={`bg-gradient-to-r ${industry.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <industry.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* About QuickBooks Section */}
      <motion.div
        className={`py-16 lg:py-20 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl shadow-lg inline-block mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  QuickBooks সম্পর্কে
                </h2>
              </div>

              <div className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <p className="mb-4">
                  <strong>Intuit</strong> ১৯৮৩ সালে <strong>Scott Cook</strong> এবং <strong>Tom Proulx</strong> দ্বারা
                  Mountain View, California, USA-এ প্রতিষ্ঠিত হয়েছিল।
                </p>
                <p className="mb-4">
                  ব্যবসায়িক সকল হিসাব রাখার জন্য ব্যবহার করুন একটি সমন্বিত Accounting, Inventory, Manufacturing এবং Payroll
                  সফটওয়্যার হলো QuickBooks।
                </p>
                <p>
                  এটি পৃথিবীব্যাপী ব্যবসায়ীদের আস্থা অর্জন করে চলেছে ২ যুগেরও বেশী সময় ধরে। রয়েছে ব্যবহারকারীদের জন্য আধুনিক ও সহজ
                  ইউজার ইন্টারফেস।
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className={`${isDarkMode ? "bg-gray-700" : "bg-white"} rounded-2xl shadow-2xl p-8`}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>40+</h3>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>বছরের অভিজ্ঞতা</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? "text-green-400" : "text-green-600"}`}>180+</h3>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>দেশে ব্যবহৃত</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}>7M+</h3>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>সন্তুষ্ট গ্রাহক</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? "text-orange-400" : "text-orange-600"}`}>#1</h3>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>অ্যাকাউন্টিং সফটওয়্যার</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden"
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
            <Sparkles className="w-12 h-12 mx-auto text-yellow-300" />
          </motion.div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-4">আজই শুরু করুন আপনার ব্যবসায়িক যাত্রা</h2>
          <p className="text-lg text-blue-100 mb-8">আমাদের বিশেষজ্ঞ দলের সাথে যোগাযোগ করুন এবং পেয়ে যান সম্পূর্ণ ফ্রি কনসালটেশন</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
            >
              <Phone className="w-5 h-5" />
              <span>কল করুন: +8801712-244886</span>
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
            >
              <ArrowRight className="w-5 h-5" />
              <span>ফ্রি কনসালটেশন</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
