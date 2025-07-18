"use client"
import { useState } from "react"
import { useSelector } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle,
  Shield,
  Sparkles,
  Star,
  Zap,
  Globe,
  Phone,
  Building2,
} from "lucide-react"

export default function AuthPage() {
  const { isDarkMode } = useSelector((state) => state.theme)
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target
    setLoginData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSignupChange = (e) => {
    const { name, value, type, checked } = e.target
    setSignupData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log("Login data:", loginData)
    // Handle login logic here
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    console.log("Signup data:", signupData)
    // Handle signup logic here
  }

  const loginFeatures = ["Secure Authentication", "24/7 Access", "Multi-device Support", "Data Protection"]

  const signupBenefits = ["Free Account Setup", "Expert Consultation", "Priority Support", "Advanced Features"]

  // Floating animation elements
  const FloatingElements = () => (
    <>
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-16 h-16 bg-green-500/10 rounded-full blur-xl"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-32 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Animated Icons */}
      <motion.div
        className="absolute top-32 right-40"
        animate={{
          rotate: [0, 360],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Sparkles className="w-6 h-6 text-yellow-400/30" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-40"
        animate={{
          rotate: [360, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Star className="w-5 h-5 text-blue-400/30" />
      </motion.div>

      <motion.div
        className="absolute top-60 left-32"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Zap className="w-4 h-4 text-purple-400/30" />
      </motion.div>
    </>
  )

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5" />
        <FloatingElements />
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <motion.div
          className={`w-full max-w-6xl ${isDarkMode ? "bg-gray-800/95" : "bg-white/95"} backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex min-h-[600px]">
            <AnimatePresence mode="wait">
              {isLogin ? (
                <motion.div
                  key="login"
                  className="flex w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Login Image Section */}
                  <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
                      <div className="absolute inset-0 bg-black/20" />
                      <img
                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
                        alt="Business Login"
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 flex flex-col justify-center p-12 text-white">
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        <div className="mb-8">
                          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl inline-block mb-6">
                            <Shield className="w-8 h-8" />
                          </div>
                          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                          <p className="text-blue-100 text-lg mb-6">
                            Access your business dashboard and continue managing your operations with our powerful
                            tools.
                          </p>
                        </div>

                        <div className="space-y-3">
                          {loginFeatures.map((feature, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center space-x-3"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                            >
                              <CheckCircle className="w-5 h-5 text-green-400" />
                              <span className="text-blue-100">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Login Form Section */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-12">
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <div className="mb-8">
                        <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                          Sign In
                        </h1>
                        <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                          Enter your credentials to access your account
                        </p>
                      </div>

                      <form onSubmit={handleLoginSubmit} className="space-y-6">
                        {/* Email Field */}
                        <div>
                          <label
                            className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                          >
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail
                              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                            />
                            <input
                              type="email"
                              name="email"
                              value={loginData.email}
                              onChange={handleLoginChange}
                              required
                              className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                                isDarkMode
                                  ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                                  : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                              } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200`}
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>

                        {/* Password Field */}
                        <div>
                          <label
                            className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                          >
                            Password
                          </label>
                          <div className="relative">
                            <Lock
                              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                            />
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              value={loginData.password}
                              onChange={handleLoginChange}
                              required
                              className={`w-full pl-12 pr-12 py-3 rounded-xl border ${
                                isDarkMode
                                  ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                                  : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                              } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200`}
                              placeholder="Enter your password"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`}
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="rememberMe"
                              checked={loginData.rememberMe}
                              onChange={handleLoginChange}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className={`ml-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                              Remember me
                            </span>
                          </label>
                          <button type="button" className="text-sm text-blue-600 hover:text-blue-500 font-medium">
                            Forgot password?
                          </button>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>Sign In</span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>

                        {/* Switch to Signup */}
                        <div className="text-center">
                          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                            Don't have an account?{" "}
                            <button
                              type="button"
                              onClick={() => setIsLogin(false)}
                              className="text-blue-600 hover:text-blue-500 font-medium"
                            >
                              Sign up here
                            </button>
                          </p>
                        </div>
                      </form>
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="signup"
                  className="flex w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Signup Form Section */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-12">
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <div className="mb-8">
                        <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                          Create Account
                        </h1>
                        <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                          Join us and start transforming your business today
                        </p>
                      </div>

                      <form onSubmit={handleSignupSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                          <label
                            className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                          >
                            Full Name
                          </label>
                          <div className="relative">
                            <User
                              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                            />
                            <input
                              type="text"
                              name="fullName"
                              value={signupData.fullName}
                              onChange={handleSignupChange}
                              required
                              className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                                isDarkMode
                                  ? "bg-gray-700 border-gray-600 text-white focus:border-green-500"
                                  : "bg-white border-gray-300 text-gray-900 focus:border-green-500"
                              } focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200`}
                              placeholder="Enter your full name"
                            />
                          </div>
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label
                              className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                            >
                              Email Address
                            </label>
                            <div className="relative">
                              <Mail
                                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                              />
                              <input
                                type="email"
                                name="email"
                                value={signupData.email}
                                onChange={handleSignupChange}
                                required
                                className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                                  isDarkMode
                                    ? "bg-gray-700 border-gray-600 text-white focus:border-green-500"
                                    : "bg-white border-gray-300 text-gray-900 focus:border-green-500"
                                } focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200`}
                                placeholder="your@email.com"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                            >
                              Phone Number
                            </label>
                            <div className="relative">
                              <Phone
                                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                              />
                              <input
                                type="tel"
                                name="phone"
                                value={signupData.phone}
                                onChange={handleSignupChange}
                                required
                                className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                                  isDarkMode
                                    ? "bg-gray-700 border-gray-600 text-white focus:border-green-500"
                                    : "bg-white border-gray-300 text-gray-900 focus:border-green-500"
                                } focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200`}
                                placeholder="+880 1XXX-XXXXXX"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Company */}
                        <div>
                          <label
                            className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                          >
                            Company Name
                          </label>
                          <div className="relative">
                            <Building2
                              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                            />
                            <input
                              type="text"
                              name="company"
                              value={signupData.company}
                              onChange={handleSignupChange}
                              className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                                isDarkMode
                                  ? "bg-gray-700 border-gray-600 text-white focus:border-green-500"
                                  : "bg-white border-gray-300 text-gray-900 focus:border-green-500"
                              } focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200`}
                              placeholder="Your company name (optional)"
                            />
                          </div>
                        </div>

                        {/* Password & Confirm Password */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label
                              className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                            >
                              Password
                            </label>
                            <div className="relative">
                              <Lock
                                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                              />
                              <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={signupData.password}
                                onChange={handleSignupChange}
                                required
                                className={`w-full pl-12 pr-12 py-3 rounded-xl border ${
                                  isDarkMode
                                    ? "bg-gray-700 border-gray-600 text-white focus:border-green-500"
                                    : "bg-white border-gray-300 text-gray-900 focus:border-green-500"
                                } focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200`}
                                placeholder="Create password"
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`}
                              >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                              </button>
                            </div>
                          </div>

                          <div>
                            <label
                              className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                            >
                              Confirm Password
                            </label>
                            <div className="relative">
                              <Lock
                                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                              />
                              <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={signupData.confirmPassword}
                                onChange={handleSignupChange}
                                required
                                className={`w-full pl-12 pr-12 py-3 rounded-xl border ${
                                  isDarkMode
                                    ? "bg-gray-700 border-gray-600 text-white focus:border-green-500"
                                    : "bg-white border-gray-300 text-gray-900 focus:border-green-500"
                                } focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200`}
                                placeholder="Confirm password"
                              />
                              <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`}
                              >
                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Terms Agreement */}
                        <div className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={signupData.agreeTerms}
                            onChange={handleSignupChange}
                            required
                            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
                          />
                          <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                            I agree to the{" "}
                            <button type="button" className="text-green-600 hover:text-green-500 font-medium">
                              Terms of Service
                            </button>{" "}
                            and{" "}
                            <button type="button" className="text-green-600 hover:text-green-500 font-medium">
                              Privacy Policy
                            </button>
                          </span>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>Create Account</span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>

                        {/* Switch to Login */}
                        <div className="text-center">
                          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                            Already have an account?{" "}
                            <button
                              type="button"
                              onClick={() => setIsLogin(true)}
                              className="text-green-600 hover:text-green-500 font-medium"
                            >
                              Sign in here
                            </button>
                          </p>
                        </div>
                      </form>
                    </motion.div>
                  </div>

                  {/* Signup Image Section */}
                  <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800">
                      <div className="absolute inset-0 bg-black/20" />
                      <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                        alt="Business Signup"
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 flex flex-col justify-center p-12 text-white">
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        <div className="mb-8">
                          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl inline-block mb-6">
                            <Globe className="w-8 h-8" />
                          </div>
                          <h2 className="text-3xl font-bold mb-4">Join Our Community!</h2>
                          <p className="text-green-100 text-lg mb-6">
                            Start your journey with us and unlock powerful business solutions that will transform your
                            operations.
                          </p>
                        </div>

                        <div className="space-y-3">
                          {signupBenefits.map((benefit, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center space-x-3"
                              initial={{ x: 20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                            >
                              <CheckCircle className="w-5 h-5 text-green-400" />
                              <span className="text-green-100">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
