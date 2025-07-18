"use client"
import { useState } from "react"
import AdminLayout from "./admin-layout"
import AdminDashboard from "./admin-dashboard"
import UsersManagement from "./users-management"
import ContactMessages from "./contact-messages"
import ApplicationsManagement from "./applications-management"

export default function AdminMain() {
  const [currentPage, setCurrentPage] = useState("dashboard")

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Admin logged out")
    // Redirect to login page or clear session
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <AdminDashboard />
      case "users":
        return <UsersManagement />
      case "admins":
        return <UsersManagement /> // You can create a separate AdminsManagement component
      case "messages":
        return <ContactMessages />
      case "applications":
        return <ApplicationsManagement />
      case "settings":
        return (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold mb-4">Settings</h3>
            <p className="text-gray-600">Settings panel coming soon...</p>
          </div>
        )
      default:
        return <AdminDashboard />
    }
  }

  return (
    <AdminLayout currentPage={currentPage} onPageChange={handlePageChange} onLogout={handleLogout}>
      {renderCurrentPage()}
    </AdminLayout>
  )
}
