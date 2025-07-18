"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, NavLink, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toggleThemeSuccess } from "../../Redux/ThemeSlice/themeSlice"
import { Search, Menu, X, Calculator, ArrowRight, Users, Building2, Phone, TrendingUp, Settings, Sun, Moon, Clock,
  ArrowUpRight, 
  Target,
  Zap,
  Award,
  Star} from 'lucide-react'


export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchHistory, setSearchHistory] = useState([
    "Digital Marketing Services",
    "Strategic Consulting",
    "Team Development Programs",
    "Risk Management Solutions",
  ])
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchCategory, setSearchCategory] = useState("all")
  const searchRef = useRef(null)
  const location = useLocation()
  const dispatch = useDispatch()

  // Get dark mode state from Redux
  const { isDarkMode } = useSelector((state) => state.theme)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle click outside search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const navigationItems = [
    { name: "Home", path: "/", icon: Building2 },
    { name: "Services", path: "/services", icon: Settings },
    { name: "About", path: "/about", icon: Users },
    { name: "Contact", path: "/contact", icon: Phone },
  ]

  const searchCategories = [
    { value: "all", label: "All" },
    { value: "service", label: "Services" },
    { value: "training", label: "Training" },
    { value: "about", label: "About" },
    { value: "contact", label: "Contact" },
  ]

  const searchRecommendations = [
    { title: "Strategic Consulting", category: "Services", icon: <Target className="w-4 h-4" /> },
    { title: "Digital Marketing", category: "Services", icon: <TrendingUp className="w-4 h-4" /> },
    { title: "Team Development", category: "Services", icon: <Users className="w-4 h-4" /> },
    { title: "Process Optimization", category: "Services", icon: <Zap className="w-4 h-4" /> },
    { title: "About Our Company", category: "Company", icon: <Award className="w-4 h-4" /> },
    { title: "Client Success Stories", category: "Testimonials", icon: <Star className="w-4 h-4" /> },
  ]



  const toggleDarkMode = () => {
    dispatch(toggleThemeSuccess())
  }

  const handleSearch = (query) => {
    if (query.trim() && !searchHistory.includes(query.trim())) {
      setSearchHistory((prev) => [query.trim(), ...prev.slice(0, 4)])
    }
    setSearchQuery(query)
    setIsSearchFocused(false)
  }


   const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value)
  }
  

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700/50"
            : "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : isDarkMode
            ? "bg-gray-900/90 backdrop-blur-sm"
            : "bg-white/90 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 sm:space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-2 sm:p-2.5 rounded-lg shadow-md">
                <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-lg sm:text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Business Hub
              </h1>
              <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>QuickBooks Solutions</p>
            </div>
            <div className="sm:hidden">
              <h1 className={`text-base font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Business Hub</h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-1 font-medium transition-all duration-200 relative group px-3 py-2 rounded-full text-sm ${
                    isActive
                      ? isDarkMode
                        ? "text-blue-400 bg-blue-400/10"
                        : "text-blue-600 bg-blue-50"
                      : isDarkMode
                        ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`
                }
              >
                {({ isActive }) => (
                  <motion.div
                    className="flex items-center space-x-1"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                        layoutId="activeIndicator"
                      />
                    )}
                  </motion.div>
                )}
              </NavLink>
            ))}
          </div>

          {/* Search Bar & Controls */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-200 ${
                isDarkMode
                  ? "bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>

            {/* Enhanced Search Bar */}
            <div className="relative" ref={searchRef}>
              <motion.div
                className={`flex items-center rounded-full transition-all duration-300 border ${
                  isSearchOpen ? "w-72 lg:w-80" : "w-56 lg:w-64"
                } ${
                  isDarkMode
                    ? isSearchOpen
                      ? "bg-gray-800 border-blue-500 shadow-lg shadow-blue-500/20"
                      : "bg-gray-800/80 border-gray-600 hover:border-gray-500"
                    : isSearchOpen
                      ? "bg-white border-blue-500 shadow-lg shadow-blue-500/20"
                      : "bg-white/80 border-gray-200 hover:border-gray-300"
                }`}
                whileHover={{ scale: 1.01 }}
              >
                

                {isSearchOpen && (
                  <motion.div
                    className="flex items-center border-l border-gray-300 dark:border-gray-600"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    transition={{ duration: 0.2 }}
                  >
                    <select
                      value={searchCategory}
                      onChange={(e) => setSearchCategory(e.target.value)}
                      className={`px-2 py-1 bg-transparent focus:outline-none text-xs ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {searchCategories.map((category) => (
                        <option
                          key={category.value}
                          value={category.value}
                          className={isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"}
                        >
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                )}

                {searchQuery && (
                  <motion.button
                    onClick={() => {
                      setSearchQuery("")
                      setIsSearchOpen(false)
                    }}
                    className={`mr-3 p-1 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-gray-300 hover:bg-gray-700"
                        : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-3 h-3" />
                  </motion.button>
                )}
              </motion.div>

              {/* Search Suggestions Dropdown */}
                <div className="hidden lg:flex items-center space-x-4">
              <div className="relative" ref={searchRef}>
                <input
                  type="text"
                  placeholder="Search services, solutions..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onFocus={() => setIsSearchFocused(true)}
                  className="pl-10 pr-4 py-2 w-80 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-all duration-300 focus:w-96"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />

                {/* Search Dropdown */}
                <AnimatePresence>
                  {isSearchFocused && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    >
                      {/* Recent Searches */}
                      {searchHistory.length > 0 && (
                        <div className="p-4 border-b border-gray-100">
                          <div className="flex items-center text-gray-500 text-sm font-medium mb-3">
                            <Clock className="w-4 h-4 mr-2" />
                            Recent Searches
                          </div>
                          <div className="space-y-2">
                            {searchHistory.map((item, index) => (
                              <button
                                key={index}
                                onClick={() => handleSearch(item)}
                                className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                              >
                                <Search className="w-4 h-4 text-gray-400 mr-3" />
                                <span className="text-gray-700 group-hover:text-blue-600">{item}</span>
                                <ArrowUpRight className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Recommendations */}
                      <div className="p-4">
                        <div className="text-gray-500 text-sm font-medium mb-3">Recommendations</div>
                        <div className="space-y-2">
                          {searchRecommendations
                            .filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
                            .slice(0, 6)
                            .map((item, index) => (
                              <button
                                key={index}
                                onClick={() => handleSearch(item.title)}
                                className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                              >
                                <div className="text-blue-600 mr-3">{item.icon}</div>
                                <div className="flex-1">
                                  <div className="text-gray-900 group-hover:text-blue-600 font-medium">
                                    {item.title}
                                  </div>
                                  <div className="text-gray-500 text-sm">{item.category}</div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </button>
                            ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
            </div>
            </div>

            {/* Get Started Button */}
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center space-x-1 shadow-md hover:shadow-lg text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to='login'>Get Started</Link>
              <ArrowRight className="w-3 h-3" />
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Mobile Search Toggle */}
            <motion.button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Mobile Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode
                  ? "bg-yellow-400/20 text-yellow-400"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              className="md:hidden py-3 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className={`flex items-center rounded-full border ${
                  isDarkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"
                }`}
              >
                <Search className={`w-4 h-4 ml-3 ${isDarkMode ? "text-gray-400" : "text-gray-400"}`} />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full py-3 px-3 bg-transparent focus:outline-none text-sm ${
                    isDarkMode ? "text-gray-200 placeholder-gray-400" : "text-gray-700 placeholder-gray-400"
                  }`}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className={`mr-3 ${isDarkMode ? "text-gray-400" : "text-gray-400"}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`lg:hidden border-t backdrop-blur-sm ${
                isDarkMode ? "border-gray-700 bg-gray-900/95" : "border-gray-200 bg-white/95"
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-1">
                {/* Mobile Navigation Items */}
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-3 transition-colors duration-200 ${
                        isActive
                          ? isDarkMode
                            ? "bg-blue-900/30 text-blue-400 border-r-2 border-blue-400"
                            : "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                          : isDarkMode
                            ? "text-gray-300 hover:bg-gray-800/50 hover:text-blue-400"
                            : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </NavLink>
                ))}

                {/* Mobile Get Started Button */}
                <div className="px-4 pt-3">
                  <motion.button
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-md"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
