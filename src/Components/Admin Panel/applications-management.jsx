"use client"
import { useState } from "react"
import { useSelector } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  Search,
  Filter,
  Eye,
  Check,
  X,
  Clock,
  Mail,
  Phone,
  Building2,
  DollarSign,
  Briefcase,
  CheckCircle,
  XCircle,
} from "lucide-react"

export default function ApplicationsManagement() {
  const { isDarkMode } = useSelector((state) => state.theme)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState("view") // view, approve, reject
  const [selectedApplication, setSelectedApplication] = useState(null)

  const [applications, setApplications] = useState([
    {
      id: 1,
      type: "meeting",
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+880 1712-345678",
      company: "Tech Solutions Ltd",
      subject: "Business Partnership Discussion",
      message:
        "I would like to schedule a meeting to discuss potential partnership opportunities between our companies.",
      preferredDate: "2024-01-25",
      preferredTime: "10:00 AM",
      status: "pending",
      priority: "high",
      submittedDate: "2024-01-18",
    },
    {
      id: 2,
      type: "job",
      name: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      phone: "+880 1812-345678",
      position: "Senior Frontend Developer",
      experience: "5 years",
      expectedSalary: "$80,000",
      skills: "React, TypeScript, Next.js, Tailwind CSS",
      message:
        "I'm excited to apply for the Senior Frontend Developer position. I have extensive experience in modern web technologies.",
      resumeUrl: "#",
      portfolioUrl: "https://sarahwilson.dev",
      status: "pending",
      priority: "medium",
      submittedDate: "2024-01-17",
    },
    {
      id: 3,
      type: "meeting",
      name: "Mike Smith",
      email: "mike.smith@email.com",
      phone: "+880 1912-345678",
      company: "Creative Agency",
      subject: "Project Consultation",
      message:
        "Need consultation for a large-scale web development project. Looking for technical expertise and project timeline estimation.",
      preferredDate: "2024-01-22",
      preferredTime: "02:00 PM",
      status: "approved",
      priority: "urgent",
      submittedDate: "2024-01-16",
    },
    {
      id: 4,
      type: "job",
      name: "Emily Johnson",
      email: "emily.johnson@email.com",
      phone: "+880 1612-345678",
      position: "UI/UX Designer",
      experience: "3 years",
      expectedSalary: "$60,000",
      skills: "Figma, Adobe XD, Sketch, Prototyping",
      message: "I'm passionate about creating user-centered designs and would love to contribute to your team.",
      resumeUrl: "#",
      portfolioUrl: "https://emilydesigns.com",
      status: "rejected",
      priority: "low",
      submittedDate: "2024-01-15",
    },
  ])

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (app.company && app.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (app.position && app.position.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (app.subject && app.subject.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesType = filterType === "all" || app.type === filterType
    const matchesStatus = filterStatus === "all" || app.status === filterStatus

    return matchesSearch && matchesType && matchesStatus
  })

  const handleViewApplication = (application) => {
    setModalType("view")
    setSelectedApplication(application)
    setShowModal(true)
  }

  const handleApproveApplication = (application) => {
    setModalType("approve")
    setSelectedApplication(application)
    setShowModal(true)
  }

  const handleRejectApplication = (application) => {
    setModalType("reject")
    setSelectedApplication(application)
    setShowModal(true)
  }

  const handleApprove = () => {
    setApplications(
      applications.map((app) => (app.id === selectedApplication.id ? { ...app, status: "approved" } : app)),
    )
    setShowModal(false)
  }

  const handleReject = () => {
    setApplications(
      applications.map((app) => (app.id === selectedApplication.id ? { ...app, status: "rejected" } : app)),
    )
    setShowModal(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "text-yellow-500 bg-yellow-100"
      case "approved":
        return "text-green-500 bg-green-100"
      case "rejected":
        return "text-red-500 bg-red-100"
      default:
        return "text-gray-500 bg-gray-100"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "urgent":
        return "text-red-500 bg-red-100"
      case "high":
        return "text-orange-500 bg-orange-100"
      case "medium":
        return "text-yellow-500 bg-yellow-100"
      case "low":
        return "text-gray-500 bg-gray-100"
      default:
        return "text-gray-500 bg-gray-100"
    }
  }

  const getTypeColor = (type) => {
    return type === "meeting" ? "text-blue-500 bg-blue-100" : "text-purple-500 bg-purple-100"
  }

  const pendingCount = applications.filter((app) => app.status === "pending").length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Applications Management
          </h1>
          <p className={`mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Manage meeting requests and job applications
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            {pendingCount} Pending
          </div>
        </div>
      </div>

      {/* Filters */}
      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } rounded-xl p-6 shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <input
              type="text"
              placeholder="Search applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
          </div>

          {/* Type Filter */}
          <div className="relative">
            <Filter
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className={`pl-10 pr-8 py-2 rounded-lg border ${
                isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              <option value="all">All Types</option>
              <option value="meeting">Meetings</option>
              <option value="job">Jobs</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className={`pl-4 pr-8 py-2 rounded-lg border ${
                isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Applications List */}
      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } rounded-xl shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-200"} overflow-hidden`}
      >
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredApplications.map((application) => (
            <motion.div
              key={application.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`p-6 ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"} transition-colors duration-200`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {application.name}
                    </h3>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(
                        application.type,
                      )}`}
                    >
                      {application.type}
                    </span>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        application.status,
                      )}`}
                    >
                      {application.status}
                    </span>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(
                        application.priority,
                      )}`}
                    >
                      {application.priority}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 text-sm mb-3">
                    <div className="flex items-center space-x-1">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{application.email}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{application.phone}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                        {application.submittedDate}
                      </span>
                    </div>
                  </div>

                  {application.type === "meeting" ? (
                    <div className="space-y-2">
                      <h4 className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        {application.subject}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Building2 className="w-4 h-4 text-gray-500" />
                          <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{application.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                            {application.preferredDate} at {application.preferredTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <h4 className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        {application.position}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4 text-gray-500" />
                          <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                            {application.experience} experience
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4 text-gray-500" />
                          <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                            {application.expectedSalary}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <p className={`mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"} line-clamp-2`}>
                    {application.message}
                  </p>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => handleViewApplication(application)}
                    className="text-blue-600 hover:text-blue-900 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  {application.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleApproveApplication(application)}
                        className="text-green-600 hover:text-green-900 p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20"
                        title="Approve"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleRejectApplication(application)}
                        className="text-red-600 hover:text-red-900 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                        title="Reject"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } rounded-xl p-6 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {modalType === "view" && "Application Details"}
                  {modalType === "approve" && "Approve Application"}
                  {modalType === "reject" && "Reject Application"}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className={`p-2 rounded-lg ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Content */}
              {modalType === "approve" ? (
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Are you sure you want to approve this application from <strong>{selectedApplication?.name}</strong>?
                  </p>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setShowModal(false)}
                      className={`flex-1 px-4 py-2 rounded-lg border ${
                        isDarkMode
                          ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleApprove}
                      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Approve
                    </button>
                  </div>
                </div>
              ) : modalType === "reject" ? (
                <div className="text-center">
                  <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Are you sure you want to reject this application from <strong>{selectedApplication?.name}</strong>?
                  </p>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setShowModal(false)}
                      className={`flex-1 px-4 py-2 rounded-lg border ${
                        isDarkMode
                          ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleReject}
                      className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Application Header */}
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        {selectedApplication?.name}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(
                            selectedApplication?.type,
                          )}`}
                        >
                          {selectedApplication?.type}
                        </span>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                            selectedApplication?.status,
                          )}`}
                        >
                          {selectedApplication?.status}
                        </span>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(
                            selectedApplication?.priority,
                          )}`}
                        >
                          {selectedApplication?.priority}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                          {selectedApplication?.email}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                          {selectedApplication?.phone}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                          {selectedApplication?.submittedDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Application Details */}
                  {selectedApplication?.type === "meeting" ? (
                    <div className="space-y-4">
                      <div>
                        <h5 className={`text-lg font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                          Meeting Request
                        </h5>
                        <p className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                          {selectedApplication?.subject}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            className={`block text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                          >
                            Company
                          </label>
                          <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                            {selectedApplication?.company}
                          </p>
                        </div>
                        <div>
                          <label
                            className={`block text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                          >
                            Preferred Date & Time
                          </label>
                          <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                            {selectedApplication?.preferredDate} at {selectedApplication?.preferredTime}
                          </p>
                        </div>
                      </div>
                      <div>
                        <label
                          className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                        >
                          Message
                        </label>
                        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} whitespace-pre-wrap`}>
                          {selectedApplication?.message}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <h5 className={`text-lg font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                          Job Application
                        </h5>
                        <p className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                          {selectedApplication?.position}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            className={`block text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                          >
                            Experience
                          </label>
                          <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                            {selectedApplication?.experience}
                          </p>
                        </div>
                        <div>
                          <label
                            className={`block text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                          >
                            Expected Salary
                          </label>
                          <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                            {selectedApplication?.expectedSalary}
                          </p>
                        </div>
                      </div>
                      <div>
                        <label
                          className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                        >
                          Skills
                        </label>
                        <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>{selectedApplication?.skills}</p>
                      </div>
                      <div>
                        <label
                          className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                        >
                          Cover Letter
                        </label>
                        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} whitespace-pre-wrap`}>
                          {selectedApplication?.message}
                        </p>
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href={selectedApplication?.resumeUrl}
                          className="text-blue-600 hover:text-blue-500 font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Resume
                        </a>
                        <a
                          href={selectedApplication?.portfolioUrl}
                          className="text-blue-600 hover:text-blue-500 font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Portfolio
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  {selectedApplication?.status === "pending" && (
                    <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <button
                        onClick={() => setModalType("approve")}
                        className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2"
                      >
                        <Check className="w-4 h-4" />
                        <span>Approve</span>
                      </button>
                      <button
                        onClick={() => setModalType("reject")}
                        className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center justify-center space-x-2"
                      >
                        <X className="w-4 h-4" />
                        <span>Reject</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
