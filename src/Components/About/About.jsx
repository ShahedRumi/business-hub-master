"use client"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Users,
  Shield,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Building2,
  Award,
  Target,
  Heart,
  Lightbulb,
  TrendingUp,
  Globe,
  Calendar,
  Mail,
  Clock,
  Handshake,
  Zap,
  Eye,
  Compass,
  Sparkles,
  UserCheck,
  GraduationCap,
  Code,
  Database,
} from "lucide-react"

export default function AboutPage() {
  const { isDarkMode } = useSelector((state) => state.theme)
  const navigate = useNavigate()

  const companyStats = [
    {
      number: "20+",
      label: "Years Experience",
      labelBn: "বছরের অভিজ্ঞতা",
      icon: Calendar,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "500+",
      label: "Happy Clients",
      labelBn: "সন্তুষ্ট গ্রাহক",
      icon: Users,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      number: "1000+",
      label: "Projects Completed",
      labelBn: "সম্পন্ন প্রকল্প",
      icon: CheckCircle,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "24/7",
      label: "Support Available",
      labelBn: "সাপোর্ট সেবা",
      icon: Shield,
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      titleBn: "সততা",
      description: "We maintain the highest standards of integrity in all our business dealings",
      descriptionBn: "আমরা আমাদের সকল ব্যবসায়িক কার্যক্রমে সর্বোচ্চ মানের সততা বজায় রাখি",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      titleBn: "উদ্ভাবন",
      description: "Constantly innovating to provide cutting-edge solutions for our clients",
      descriptionBn: "আমাদের ক্লায়েন্টদের জন্য অত্যাধুনিক সমাধান প্রদানের জন্য ক্রমাগত উদ্ভাবন করি",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      titleBn: "গ্রাহক কেন্দ্রিক",
      description: "Our clients' success is our primary focus and driving motivation",
      descriptionBn: "আমাদের ক্লায়েন্টদের সাফল্যই আমাদের প্রধান লক্ষ্য এবং অনুপ্রেরণা",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      titleBn: "উৎকর্ষতা",
      description: "We strive for excellence in every project and service we deliver",
      descriptionBn: "আমরা প্রতিটি প্রকল্প এবং সেবায় উৎকর্ষতার জন্য প্রচেষ্টা চালাই",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  const teamMembers = [
    {
      name: "আহমেদ হাসান",
      nameEn: "Ahmed Hasan",
      position: "Chief Executive Officer",
      positionBn: "প্রধান নির্বাহী কর্মকর্তা",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      experience: "15+ Years",
      specialization: "Business Strategy & ERP Implementation",
      specializationBn: "ব্যবসায়িক কৌশল ও ERP বাস্তবায়ন",
    },
    {
      name: "ফাতিমা খান",
      nameEn: "Fatima Khan",
      position: "Chief Technology Officer",
      positionBn: "প্রধান প্রযুক্তি কর্মকর্তা",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      experience: "12+ Years",
      specialization: "Software Development & System Architecture",
      specializationBn: "সফটওয়্যার ডেভেলপমেন্ট ও সিস্টেম আর্কিটেকচার",
    },
    {
      name: "মোহাম্মদ রহমান",
      nameEn: "Mohammad Rahman",
      position: "Head of Operations",
      positionBn: "অপারেশন প্রধান",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      experience: "10+ Years",
      specialization: "Project Management & Client Relations",
      specializationBn: "প্রকল্প ব্যবস্থাপনা ও ক্লায়েন্ট সম্পর্ক",
    },
    {
      name: "সারা আলম",
      nameEn: "Sara Alam",
      position: "Lead Financial Consultant",
      positionBn: "প্রধান আ���্থিক পরামর্শদাতা",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      experience: "8+ Years",
      specialization: "QuickBooks & Financial Systems",
      specializationBn: "QuickBooks ও আর্থিক সিস্টেম",
    },
  ]

  const milestones = [
    {
      year: "2004",
      title: "Company Founded",
      titleBn: "কোম্পানি প্রতিষ্ঠা",
      description: "Started as a small accounting consultancy firm",
      descriptionBn: "একটি ছোট অ্যাকাউন্টিং পরামর্শ প্রতিষ্ঠান হিসেবে যাত্রা শুরু",
      icon: Building2,
    },
    {
      year: "2008",
      title: "First ERP Implementation",
      titleBn: "প্রথম ERP বাস্তবায়ন",
      description: "Successfully implemented our first comprehensive ERP solution",
      descriptionBn: "সফলভাবে আমাদের প্রথম সম্পূর্ণ ERP সমাধান বাস্তবায়ন",
      icon: Database,
    },
    {
      year: "2012",
      title: "QuickBooks Partnership",
      titleBn: "QuickBooks অংশীদারিত্ব",
      description: "Became certified QuickBooks solution provider",
      descriptionBn: "প্রত্যয়িত QuickBooks সমাধান প্রদানকারী হয়ে উঠি",
      icon: Handshake,
    },
    {
      year: "2016",
      title: "Team Expansion",
      titleBn: "দল সম্প্রসারণ",
      description: "Expanded team to 50+ professionals across multiple domains",
      descriptionBn: "একাধিক ক্ষেত্রে ৫০+ পেশাদারদের নিয়ে দল সম্প্রসারণ",
      icon: Users,
    },
    {
      year: "2020",
      title: "Digital Transformation",
      titleBn: "ডিজিটাল রূপান্তর",
      description: "Launched cloud-based solutions and remote services",
      descriptionBn: "ক্লাউড-ভিত্তিক সমাধান এবং দূরবর্তী সেবা চালু করা",
      icon: Globe,
    },
    {
      year: "2024",
      title: "Industry Leadership",
      titleBn: "শিল্প নেতৃত্ব",
      description: "Recognized as leading ERP solution provider in Bangladesh",
      descriptionBn: "বাংলাদেশে শীর্ষস্থানীয় ERP সমাধান প্রদানকারী হিসেবে স্বীকৃতি",
      icon: Award,
    },
  ]

  const whyChooseUs = [
    {
      icon: GraduationCap,
      title: "Expert Team",
      titleBn: "বিশেষজ্ঞ দল",
      description: "Certified professionals with extensive industry experience",
      descriptionBn: "ব্যাপক শিল্প অভিজ্ঞতা সহ প্রত্যয়িত পেশাদারগণ",
    },
    {
      icon: Code,
      title: "Custom Solutions",
      titleBn: "কাস্টম সমাধান",
      description: "Tailored solutions designed specifically for your business needs",
      descriptionBn: "আপনার ব্যবসায়িক প্রয়োজনের জন্য বিশেষভাবে ডিজাইন করা সমাধান",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      titleBn: "২৪/৭ সাপোর্ট",
      description: "Round-the-clock technical support and maintenance services",
      descriptionBn: "সার্বক্ষণিক প্রযুক্তিগত সহায়তা এবং রক্ষণাবেক্ষণ সেবা",
    },
    {
      icon: Shield,
      title: "Data Security",
      titleBn: "ডেটা নিরাপত্তা",
      description: "Enterprise-grade security measures to protect your sensitive data",
      descriptionBn: "আপনার সংবেদনশীল ডেটা সুরক্ষার জন্য এন্টারপ্রাইজ-গ্রেড নিরাপত্তা ব্যবস্থা",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      titleBn: "প্রমাণিত ফলাফল",
      description: "Track record of successful implementations and satisfied clients",
      descriptionBn: "সফল বাস্তবায়ন এবং সন্তুষ্ট ক্লায়েন্টদের ট্র্যাক রেকর্ড",
    },
    {
      icon: Zap,
      title: "Quick Implementation",
      titleBn: "দ্রুত বাস্তবায়ন",
      description: "Fast and efficient implementation with minimal business disruption",
      descriptionBn: "ন্যূনতম ব্যবসায়িক ব্যাঘাত সহ দ্রুত এবং দক্ষ বাস্তবায়ন",
    },
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 pt-16 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      {/* Hero Section */}
      <motion.div
        className="relative py-20 lg:py-24 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 text-white overflow-hidden"
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
              <Building2 className="w-8 h-8 text-white" />
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
            আমাদের সম্পর্কে
          </motion.h1>

          <motion.p
            className="text-lg lg:text-xl text-purple-100 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            ২০ বছরেরও বেশি অভিজ্ঞতা নিয়ে আমরা বাংলাদেশের শীর্ষস্থানীয় ERP এবং QuickBooks সমাধান প্রদানকারী প্রতিষ্ঠান। আমাদের লক্ষ্য হলো
            আপনার ব্যবসায়িক প্রক্রিয়াগুলিকে আরও দক্ষ এবং লাভজনক করে তোলা।
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg">
              <Phone className="w-5 h-5" />
              <span>যোগাযোগ করুন</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 flex items-center justify-center space-x-2">
              <ArrowRight className="w-5 h-5" />
              <span>আমাদের সেবা দেখুন</span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Company Stats */}
      <motion.div
        className={`py-16 lg:py-20 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                className={`text-center p-6 rounded-2xl ${isDarkMode ? "bg-gray-700/50" : "bg-white"} shadow-lg hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`bg-gradient-to-r ${stat.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                  {stat.number}
                </h3>
                <p className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {stat.labelBn}
                </p>
                <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mission & Vision */}
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
            {/* Mission */}
            <motion.div
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-lg p-8`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl shadow-lg mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>আমাদের লক্ষ্য</h3>
                  <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Our Mission</p>
                </div>
              </div>
              <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                আমাদের লক্ষ্য হলো বাংলাদেশের ব্যবসায়িক প্রতিষ্ঠানগুলিকে আধুনিক প্রযুক্তির মাধ্যমে আরও দক্ষ, স্বচ্ছ এবং লাভজনক করে তোলা। আমরা
                বিশ্বমানের ERP এবং অ্যাকাউন্টিং সমাধান প্রদানের মাধ্যমে আমাদের ক্লায়েন্টদের ব্যবসায়িক সাফল্যে অবদান রাখতে প্রতিশ্রুতিবদ্ধ।
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-lg p-8`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-2xl shadow-lg mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    আমাদের দৃষ্টিভঙ্গি
                  </h3>
                  <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Our Vision</p>
                </div>
              </div>
              <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                ২০৩০ সালের মধ্যে বাংলাদেশের শীর্ষস্থানীয় ব্যবসায়িক সমাধান প্রদানকারী প্রতিষ্ঠান হিসেবে প্রতিষ্ঠিত হওয়া এবং দক্ষিণ এশিয়ার বাজারে
                আমাদের উপস্থিতি সম্প্রসারণ করা। আমরা চাই প্রতিটি ব্যবসায়িক প্রতিষ্ঠান আমাদের সেবার মাধ্যমে ডিজিটাল রূপান্তরের সুবিধা পাক।
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Core Values */}
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
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-bounce" />
              </div>
            </motion.div>

            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              আমাদের মূল্যবোধ
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              যে মূল্যবোধগুলি আমাদের কাজের প্রতিটি ক্ষেত্রে পথ দেখায় এবং আমাদের সেবার মান নিশ্চিত করে
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? "bg-gray-700" : "bg-white"} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`bg-gradient-to-r ${value.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {value.titleBn}
                </h3>
                <p className={`text-sm mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{value.title}</p>
                <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {value.descriptionBn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Company Timeline */}
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
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <Clock className="absolute -top-1 -right-1 w-4 h-4 text-blue-400 animate-pulse" />
              </div>
            </motion.div>

            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              আমাদের যাত্রাপথ
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              ২০০৪ সাল থেকে আজ পর্যন্ত আমাদের বিকাশের গল্প এবং অর্জনসমূহ
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-lg p-6`}>
                      <div className="flex items-center mb-3">
                        <div
                          className={`bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 rounded-full flex items-center justify-center ${index % 2 === 0 ? "mr-3" : "ml-3 order-2"}`}
                        >
                          <milestone.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className={index % 2 === 0 ? "" : "order-1"}>
                          <h3 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                            {milestone.titleBn}
                          </h3>
                          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                            {milestone.title}
                          </p>
                        </div>
                      </div>
                      <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                        {milestone.descriptionBn}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{milestone.year.slice(-2)}</span>
                    </div>
                  </div>

                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
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
                  <Users className="w-6 h-6 text-white" />
                </div>
                <UserCheck className="absolute -top-1 -right-1 w-4 h-4 text-green-400 animate-bounce" />
              </div>
            </motion.div>

            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              আমাদের নেতৃত্ব
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              অভিজ্ঞ এবং দক্ষ পেশাদারদের নিয়ে গঠিত আমাদের নেতৃত্ব দল
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
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
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{member.experience}</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-lg font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {member.name}
                  </h3>
                  <p className={`text-sm mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{member.nameEn}</p>
                  <p className={`text-sm font-medium mb-2 text-blue-600 dark:text-blue-400`}>{member.positionBn}</p>
                  <p className={`text-xs mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{member.position}</p>
                  <p className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {member.specializationBn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us */}
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
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-3 rounded-2xl shadow-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <Award className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-bounce" />
              </div>
            </motion.div>

            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              কেন আমাদের বেছে নেবেন?
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              আমাদের অনন্য বৈশিষ্ট্য এবং সেবার মান যা আমাদের প্রতিযোগীদের থেকে আলাদা করে
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {reason.titleBn}
                    </h3>
                    <p className={`text-sm mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{reason.title}</p>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {reason.descriptionBn}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        className="py-16 lg:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden"
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
            <Handshake className="w-12 h-12 mx-auto text-yellow-300" />
          </motion.div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-4">আমাদের সাথে যোগ দিন</h2>
          <p className="text-lg text-purple-100 mb-8">
            আপনার ব্যবসায়িক সাফল্যের জন্য আমাদের অভিজ্ঞ দলের সাথে কাজ করুন। আজই যোগাযোগ করুন এবং পেয়ে যান বিনামূল্যে পরামর্শ।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
            >
              <Phone className="w-5 h-5" />
              <span>কল করুন: +8801712-244886</span>
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
            >
              <Mail className="w-5 h-5" />
              <span>ইমেইল পাঠান</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
