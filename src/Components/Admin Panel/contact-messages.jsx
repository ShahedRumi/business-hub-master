"use client"
import { useState } from "react"
import { useSelector } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, Eye, Reply, Trash2, Mail, Phone, Calendar, Clock, X, Send, AlertCircle } from "lucide-react"

export default function ContactMessages() {
  const { isDarkMode } = useSelector((state) => state.theme)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState("view") // view, reply, delete
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [replyText, setReplyText] = useState("")

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+880 1712-345678",
      subject: "Business Consultation Request",
      message:
        "Hello, I'm interested in your business consultation services. Could you please provide more information about your packages and pricing? I'm looking to expand my tech startup and need expert guidance.",
      date: "2024-01-18",
      time: "10:30 AM",
      status: "unread",
      priority: "high",
      replied: false,
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      phone: "+880 1812-345678",
      subject: "Partnership Opportunity",
      message:
        "Hi there! I represent a digital marketing agency and we're looking for strategic partnerships. Your company's expertise aligns perfectly with our client needs. Would love to discuss potential collaboration opportunities.",
      date: "2024-01-18",
      time: "09:15 AM",
      status: "read",
      priority: "medium",
      replied: true,
    },
    {
      id: 3,
      name: "Mike Smith",
      email: "mike.smith@email.com",
      phone: "+880 1912-345678",
      subject: "Technical Support",
      message:
        "I'm experiencing some issues with the platform integration. The API seems to be returning inconsistent responses. Could someone from your technical team help me resolve this?",
      date: "2024-01-17",
      time: "02:45 PM",
      status: "read",
      priority: "urgent",
      replied: false,
    },
    {
      id: 4,
      name: "Emily Johnson",
      email: "emily.johnson@email.com",
      phone: "+880 1612-345678",
      subject: "Service Inquiry",
      message:
        "I'm interested in learning more about your services. Could you send me a detailed brochure and pricing information? I'm particularly interested in your enterprise solutions.",
      date: "2024-01-17",
      time: "11:20 AM",
      status: "unread",
      priority: "low",
      replied: false,
    },
  ])

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = filterStatus === "all" || message.status === filterStatus

    return matchesSearch && matchesFilter
  })

  const handleViewMessage = (message) => {
    setModalType("view")
    setSelectedMessage(message)
    setShowModal(true)
    // Mark as read
    setMessages(messages.map((msg) => (msg.id === message.id ? { ...msg, status: "read" } : msg)))
  }

  const handleReplyMessage = (message) => {
    setModalType("reply")
    setSelectedMessage(message)
    setReplyText("")
    setShowModal(true)
  }

  const handleDeleteMessage = (message) => {
    setModalType("delete")
    setSelectedMessage(message)
    setShowModal(true)
  }

  const handleSendReply = (e) => {
    e.preventDefault()
    // Mark message as replied
    setMessages(messages.map((msg) => (msg.id === selectedMessage.id ? { ...msg, replied: true } : msg)))
    console.log("Reply sent:", replyText)
    setShowModal(false)
    setReplyText("")
  }

  const handleDelete = () => {
    setMessages(messages.filter((msg) => msg.id !== selectedMessage.id))
    setShowModal(false)
  }

  const getStatusColor = (status) => {
    return status === "read" ? "text-green-500 bg-green-100" : "text-blue-500 bg-blue-100"
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

  const unreadCount = messages.filter((msg) => msg.status === "unread").length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Contact Messages</h1>
          <p className={`mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Manage and respond to customer inquiries
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {unreadCount} Unread
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
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className={`pl-10 pr-8 py-2 rounded-lg border ${
                isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              <option value="all">All Messages</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } rounded-xl shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-200"} overflow-hidden`}
      >
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredMessages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`p-6 ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"} transition-colors duration-200 ${
                message.status === "unread" ? "bg-blue-50 dark:bg-blue-900/10" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {message.name}
                    </h3>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        message.status,
                      )}`}
                    >
                      {message.status}
                    </span>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(
                        message.priority,
                      )}`}
                    >
                      {message.priority}
                    </span>
                    {message.replied && (
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full text-green-500 bg-green-100">
                        Replied
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 text-sm mb-3">
                    <div className="flex items-center space-x-1">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{message.email}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{message.phone}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                        {message.date} at {message.time}
                      </span>
                    </div>
                  </div>

                  <h4 className={`font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {message.subject}
                  </h4>
                  <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} line-clamp-2`}>{message.message}</p>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => handleViewMessage(message)}
                    className="text-blue-600 hover:text-blue-900 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    title="View Message"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleReplyMessage(message)}
                    className="text-green-600 hover:text-green-900 p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20"
                    title="Reply"
                  >
                    <Reply className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteMessage(message)}
                    className="text-red-600 hover:text-red-900 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
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
                  {modalType === "view" && "Message Details"}
                  {modalType === "reply" && "Reply to Message"}
                  {modalType === "delete" && "Delete Message"}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className={`p-2 rounded-lg ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Content */}
              {modalType === "delete" ? (
                <div className="text-center">
                  <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Are you sure you want to delete this message from <strong>{selectedMessage?.name}</strong>? This
                    action cannot be undone.
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
                      onClick={handleDelete}
                      className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : modalType === "reply" ? (
                <div>
                  {/* Original Message */}
                  <div className={`p-4 rounded-lg mb-6 ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className="flex items-center space-x-3 mb-3">
                      <h4 className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        {selectedMessage?.name}
                      </h4>
                      <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {selectedMessage?.email}
                      </span>
                    </div>
                    <h5 className={`font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {selectedMessage?.subject}
                    </h5>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {selectedMessage?.message}
                    </p>
                  </div>

                  {/* Reply Form */}
                  <form onSubmit={handleSendReply}>
                    <div className="mb-4">
                      <label
                        className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        Your Reply
                      </label>
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        required
                        rows={6}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          isDarkMode
                            ? "bg-gray-700 border-gray-600 text-white"
                            : "bg-white border-gray-300 text-gray-900"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                        placeholder="Type your reply here..."
                      />
                    </div>
                    <div className="flex space-x-3">
                      <button
                        type="button"
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
                        type="submit"
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Reply</span>
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Message Header */}
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        {selectedMessage?.name}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                            selectedMessage?.status,
                          )}`}
                        >
                          {selectedMessage?.status}
                        </span>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(
                            selectedMessage?.priority,
                          )}`}
                        >
                          {selectedMessage?.priority}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{selectedMessage?.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{selectedMessage?.phone}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                          {selectedMessage?.date} at {selectedMessage?.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Message Content */}
                  <div>
                    <h5 className={`text-lg font-medium mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {selectedMessage?.subject}
                    </h5>
                    <div className={`prose max-w-none ${isDarkMode ? "prose-invert text-gray-300" : "text-gray-700"}`}>
                      <p className="whitespace-pre-wrap">{selectedMessage?.message}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => {
                        setModalType("reply")
                        setReplyText("")
                      }}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
                    >
                      <Reply className="w-4 h-4" />
                      <span>Reply</span>
                    </button>
                    <button
                      onClick={() => setModalType("delete")}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center justify-center space-x-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
