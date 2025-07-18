"use client"
import { useState } from "react"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import {
  Users,
  MessageSquare,
  Calendar,
  TrendingUp,
  Activity,
  Server,
  Database,
  Mail,
  CheckCircle,
  UserPlus,
  MessageCircle,
} from "lucide-react"

export default function AdminDashboard() {
  const { isDarkMode } = useSelector((state) => state.theme)
  const [stats, setStats] = useState({
    totalUsers: 1247,
    totalMessages: 89,
    totalApplications: 156,
    activeUsers: 892,
  })

  const [recentActivities, setRecentActivities] = useState([
    {
      id: 1,
      type: "user",
      message: "New user registration: john.doe@email.com",
      time: "2 minutes ago",
      icon: UserPlus,
    },
    {
      id: 2,
      type: "message",
      message: "Contact form submitted by Sarah Wilson",
      time: "5 minutes ago",
      icon: MessageCircle,
    },
    {
      id: 3,
      type: "application",
      message: "New job application received",
      time: "10 minutes ago",
      icon: Calendar,
    },
    {
      id: 4,
      type: "user",
      message: "User profile updated: mike.smith@email.com",
      time: "15 minutes ago",
      icon: Users,
    },
    {
      id: 5,
      type: "system",
      message: "System backup completed successfully",
      time: "1 hour ago",
      icon: CheckCircle,
    },
  ])

  const [systemStatus, setSystemStatus] = useState({
    server: { status: "online", uptime: "99.9%" },
    database: { status: "online", uptime: "99.8%" },
    email: { status: "online", uptime: "99.7%" },
  })

  const statsCards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      change: "+12%",
      changeType: "positive",
      icon: Users,
      color: "blue",
    },
    {
      title: "Messages",
      value: stats.totalMessages,
      change: "+8%",
      changeType: "positive",
      icon: MessageSquare,
      color: "green",
    },
    {
      title: "Applications",
      value: stats.totalApplications,
      change: "+15%",
      changeType: "positive",
      icon: Calendar,
      color: "purple",
    },
    {
      title: "Active Users",
      value: stats.activeUsers,
      change: "+5%",
      changeType: "positive",
      icon: Activity,
      color: "orange",
    },
  ]

  const quickActions = [
    {
      title: "View Users",
      description: "Manage user accounts",
      icon: Users,
      color: "blue",
      action: "users",
    },
    {
      title: "Check Messages",
      description: "Review contact messages",
      icon: MessageSquare,
      color: "green",
      action: "messages",
    },
    {
      title: "Applications",
      description: "Handle applications",
      icon: Calendar,
      color: "purple",
      action: "applications",
    },
    {
      title: "System Settings",
      description: "Configure system",
      icon: Server,
      color: "gray",
      action: "settings",
    },
  ]

  const getColorClasses = (color, type = "bg") => {
    const colors = {
      blue: type === "bg" ? "bg-blue-500" : "text-blue-500",
      green: type === "bg" ? "bg-green-500" : "text-green-500",
      purple: type === "bg" ? "bg-purple-500" : "text-purple-500",
      orange: type === "bg" ? "bg-orange-500" : "text-orange-500",
      gray: type === "bg" ? "bg-gray-500" : "text-gray-500",
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } rounded-xl p-6 shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Welcome back, Admin!
            </h1>
            <p className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Here's what's happening with your platform today.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>All systems operational</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } rounded-xl p-6 shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{card.title}</p>
                <p className={`text-2xl font-bold mt-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {card.value.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500 font-medium">{card.change}</span>
                  <span className={`text-sm ml-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    from last month
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${getColorClasses(card.color)}`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-xl p-6 shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Recent Activities
            </h3>
            <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${getColorClasses("blue")} bg-opacity-10`}>
                  <activity.icon className={`w-4 h-4 ${getColorClasses("blue", "text")}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{activity.message}</p>
                  <p className={`text-xs mt-1 ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-xl p-6 shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
        >
          <h3 className={`text-lg font-semibold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Server className="w-5 h-5 text-blue-500" />
                <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Server</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-500">Online</span>
                <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  ({systemStatus.server.uptime})
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Database className="w-5 h-5 text-purple-500" />
                <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Database</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-500">Online</span>
                <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  ({systemStatus.database.uptime})
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Email Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-500">Online</span>
                <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  ({systemStatus.email.uptime})
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } rounded-xl p-6 shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
      >
        <h3 className={`text-lg font-semibold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <motion.button
              key={action.title}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-lg border-2 border-dashed ${
                isDarkMode ? "border-gray-600 hover:border-gray-500" : "border-gray-300 hover:border-gray-400"
              } transition-all duration-200 text-left`}
            >
              <div className={`p-2 rounded-lg ${getColorClasses(action.color)} bg-opacity-10 inline-block mb-3`}>
                <action.icon className={`w-5 h-5 ${getColorClasses(action.color, "text")}`} />
              </div>
              <h4 className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>{action.title}</h4>
              <p className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{action.description}</p>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
