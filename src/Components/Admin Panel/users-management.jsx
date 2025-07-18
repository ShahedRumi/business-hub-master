"use client"
import { useState } from "react"
import { useSelector } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, Plus, Edit, Trash2, Eye, Mail, Phone, Calendar, X, AlertTriangle } from "lucide-react"

export default function UsersManagement() {
  const { isDarkMode } = useSelector((state) => state.theme)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState("create") // create, edit, view, delete
  const [selectedUser, setSelectedUser] = useState(null)

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+880 1712-345678",
      company: "Tech Solutions Ltd",
      role: "Admin",
      status: "active",
      joinDate: "2024-01-15",
      lastLogin: "2024-01-18 10:30 AM",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      phone: "+880 1812-345678",
      company: "Digital Marketing Pro",
      role: "User",
      status: "active",
      joinDate: "2024-01-10",
      lastLogin: "2024-01-18 09:15 AM",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Mike Smith",
      email: "mike.smith@email.com",
      phone: "+880 1912-345678",
      company: "Creative Agency",
      role: "User",
      status: "inactive",
      joinDate: "2024-01-05",
      lastLogin: "2024-01-16 02:45 PM",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Emily Johnson",
      email: "emily.johnson@email.com",
      phone: "+880 1612-345678",
      company: "Startup Hub",
      role: "User",
      status: "active",
      joinDate: "2024-01-12",
      lastLogin: "2024-01-18 11:20 AM",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "User",
    status: "active",
  })

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = filterStatus === "all" || user.status === filterStatus

    return matchesSearch && matchesFilter
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCreateUser = () => {
    setModalType("create")
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      role: "User",
      status: "active",
    })
    setShowModal(true)
  }

  const handleEditUser = (user) => {
    setModalType("edit")
    setSelectedUser(user)
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      company: user.company,
      role: user.role,
      status: user.status,
    })
    setShowModal(true)
  }

  const handleViewUser = (user) => {
    setModalType("view")
    setSelectedUser(user)
    setShowModal(true)
  }

  const handleDeleteUser = (user) => {
    setModalType("delete")
    setSelectedUser(user)
    setShowModal(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (modalType === "create") {
      const newUser = {
        id: users.length + 1,
        ...formData,
        joinDate: new Date().toISOString().split("T")[0],
        lastLogin: "Never",
        avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`,
      }
      setUsers([...users, newUser])
    } else if (modalType === "edit") {
      setUsers(users.map((user) => (user.id === selectedUser.id ? { ...user, ...formData } : user)))
    }
    setShowModal(false)
  }

  const handleDelete = () => {
    setUsers(users.filter((user) => user.id !== selectedUser.id))
    setShowModal(false)
  }

  const getStatusColor = (status) => {
    return status === "active" ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100"
  }

  const getRoleColor = (role) => {
    return role === "Admin" ? "text-blue-500 bg-blue-100" : "text-gray-500 bg-gray-100"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Users Management</h1>
          <p className={`mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Manage user accounts and permissions
          </p>
        </div>
        <motion.button
          onClick={handleCreateUser}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Plus className="w-4 h-4" />
          <span>Add User</span>
        </motion.button>
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
              placeholder="Search users..."
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
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } rounded-xl shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-200"} overflow-hidden`}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
              <tr>
                <th
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}
                >
                  User
                </th>
                <th
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}
                >
                  Contact
                </th>
                <th
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}
                >
                  Role
                </th>
                <th
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}
                >
                  Status
                </th>
                <th
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}
                >
                  Last Login
                </th>
                <th
                  className={`px-6 py-3 text-right text-xs font-medium uppercase tracking-wider ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} divide-y ${isDarkMode ? "divide-gray-700" : "divide-gray-200"}`}
            >
              {filteredUsers.map((user) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"} transition-colors duration-200`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-full" src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <div className="ml-4">
                        <div className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                          {user.name}
                        </div>
                        <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                          {user.company}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-900"}`}>{user.email}</div>
                    <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{user.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        user.status,
                      )}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? "text-gray-300" : "text-gray-900"}`}
                  >
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => handleViewUser(user)}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEditUser(user)}
                        className="text-green-600 hover:text-green-900 p-1 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user)}
                        className="text-red-600 hover:text-red-900 p-1 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
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
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-6 w-full max-w-md shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {modalType === "create" && "Add New User"}
                  {modalType === "edit" && "Edit User"}
                  {modalType === "view" && "User Details"}
                  {modalType === "delete" && "Delete User"}
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
                  <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Are you sure you want to delete <strong>{selectedUser?.name}</strong>? This action cannot be undone.
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
              ) : modalType === "view" ? (
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <img
                      src={selectedUser?.avatar || "/placeholder.svg"}
                      alt={selectedUser?.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h4 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {selectedUser?.name}
                    </h4>
                    <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{selectedUser?.company}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>{selectedUser?.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>{selectedUser?.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                        Joined: {selectedUser?.joinDate}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 py-2 rounded-lg border ${
                        isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 py-2 rounded-lg border ${
                        isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 rounded-lg border ${
                        isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 rounded-lg border ${
                        isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        Role
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          isDarkMode
                            ? "bg-gray-700 border-gray-600 text-white"
                            : "bg-white border-gray-300 text-gray-900"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      >
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        Status
                      </label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          isDarkMode
                            ? "bg-gray-700 border-gray-600 text-white"
                            : "bg-white border-gray-300 text-gray-900"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex space-x-3 pt-4">
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
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      {modalType === "create" ? "Create" : "Update"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
