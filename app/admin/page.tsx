"use client"

import { useState, useEffect } from "react"
import { Users, GraduationCap, BookOpen, FileText, Edit, Trash2, Plus, X, Save } from "lucide-react"

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeView, setActiveView] = useState("dashboard")
  const [tableData, setTableData] = useState([])
  const [tableLoading, setTableLoading] = useState(false)
  const [tableError, setTableError] = useState(null)
  const [editingItem, setEditingItem] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)

  useEffect(() => {
    // Test database connection and get stats
    fetch("/api/test-connection")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStats(data.stats)
          setApplications(data.recentApplications || [])
        } else {
          setError(data.error)
        }
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching admin data:", err)
        setError("Failed to connect to database")
        setLoading(false)
      })
  }, [])

  const fetchTableData = async (type) => {
    setTableLoading(true)
    setTableError(null)
    try {
      let endpoint = ""
      switch (type) {
        case "staff":
          endpoint = "/api/staff"
          break
        case "students":
          endpoint = "/api/students"
          break
        case "courses":
          endpoint = "/api/courses"
          break
        case "applications":
          endpoint = "/api/applications"
          break
      }

      const response = await fetch(endpoint)

      if (!response.ok) {
        const errorData = await response.json()
        console.error(`API Error for ${type}:`, errorData)
        throw new Error(errorData.details || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      // Ensure data is always an array
      if (Array.isArray(data)) {
        setTableData(data)
      } else if (data && Array.isArray(data.data)) {
        setTableData(data.data)
      } else {
        console.warn(`API returned non-array data for ${type}:`, data)
        setTableData([])
        setTableError(`No ${type} data available`)
      }

      setActiveView(type)
    } catch (err) {
      console.error(`Error fetching ${type}:`, err)
      setTableError(`Failed to load ${type} data: ${err.message}`)
      setTableData([])
    }
    setTableLoading(false)
  }

  const handleEdit = (item) => {
    setEditingItem({ ...item })
  }

  const handleSave = async (type) => {
    try {
      const response = await fetch(`/api/${type}/${editingItem.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingItem),
      })

      if (response.ok) {
        // Refresh table data
        fetchTableData(type)
        setEditingItem(null)
      } else {
        throw new Error(`Failed to update ${type}`)
      }
    } catch (err) {
      console.error(`Error updating ${type}:`, err)
      alert(`Error updating ${type}: ${err.message}`)
    }
  }

  const handleDelete = async (type, id) => {
    if (confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await fetch(`/api/${type}/${id}`, {
          method: "DELETE",
        })

        if (response.ok) {
          // Refresh table data
          fetchTableData(type)
        } else {
          throw new Error(`Failed to delete ${type}`)
        }
      } catch (err) {
        console.error(`Error deleting ${type}:`, err)
        alert(`Error deleting ${type}: ${err.message}`)
      }
    }
  }

  const renderStaffTable = () => (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Staff Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Staff
        </button>
      </div>
      <div className="overflow-x-auto">
        {tableError ? (
          <div className="px-6 py-8 text-center text-red-600">
            <p>{tableError}</p>
          </div>
        ) : tableData.length === 0 ? (
          <div className="px-6 py-8 text-center text-gray-500">
            <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No staff members found</p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((staff) => (
                <tr key={staff.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingItem?.id === staff.id ? (
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={editingItem.first_name || ""}
                          onChange={(e) => setEditingItem({ ...editingItem, first_name: e.target.value })}
                          className="border rounded px-2 py-1 text-sm"
                        />
                        <input
                          type="text"
                          value={editingItem.last_name || ""}
                          onChange={(e) => setEditingItem({ ...editingItem, last_name: e.target.value })}
                          className="border rounded px-2 py-1 text-sm"
                        />
                      </div>
                    ) : (
                      <div className="text-sm font-medium text-gray-900">
                        {staff.first_name} {staff.last_name}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingItem?.id === staff.id ? (
                      <input
                        type="text"
                        value={editingItem.position || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, position: e.target.value })}
                        className="border rounded px-2 py-1 text-sm w-full"
                      />
                    ) : (
                      <div className="text-sm text-gray-900">{staff.position}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingItem?.id === staff.id ? (
                      <input
                        type="text"
                        value={editingItem.department || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, department: e.target.value })}
                        className="border rounded px-2 py-1 text-sm w-full"
                      />
                    ) : (
                      <div className="text-sm text-gray-900">{staff.department}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingItem?.id === staff.id ? (
                      <input
                        type="email"
                        value={editingItem.email || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, email: e.target.value })}
                        className="border rounded px-2 py-1 text-sm w-full"
                      />
                    ) : (
                      <div className="text-sm text-gray-900">{staff.email}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingItem?.id === staff.id ? (
                      <input
                        type="tel"
                        value={editingItem.phone || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, phone: e.target.value })}
                        className="border rounded px-2 py-1 text-sm w-full"
                      />
                    ) : (
                      <div className="text-sm text-gray-900">{staff.phone}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {editingItem?.id === staff.id ? (
                      <div className="flex space-x-2">
                        <button onClick={() => handleSave("staff")} className="text-green-600 hover:text-green-900">
                          <Save className="h-4 w-4" />
                        </button>
                        <button onClick={() => setEditingItem(null)} className="text-gray-600 hover:text-gray-900">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button onClick={() => handleEdit(staff)} className="text-blue-600 hover:text-blue-900">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete("staff", staff.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )

  const renderStudentsTable = () => (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Student Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Student
        </button>
      </div>
      <div className="overflow-x-auto">
        {tableError ? (
          <div className="px-6 py-8 text-center text-red-600">
            <p>{tableError}</p>
            <p className="text-sm mt-2">Check console for more details</p>
          </div>
        ) : tableData.length === 0 ? (
          <div className="px-6 py-8 text-center text-gray-500">
            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No students found</p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">First Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {student.student_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingItem?.id === student.id ? (
                      <input
                        type="text"
                        value={editingItem.first_name || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, first_name: e.target.value })}
                        className="border rounded px-2 py-1 text-sm w-full"
                      />
                    ) : (
                      <div className="text-sm font-medium text-gray-900">{student.first_name}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingItem?.id === student.id ? (
                      <input
                        type="text"
                        value={editingItem.last_name || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, last_name: e.target.value })}
                        className="border rounded px-2 py-1 text-sm w-full"
                      />
                    ) : (
                      <div className="text-sm font-medium text-gray-900">{student.last_name}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingItem?.id === student.id ? (
                      <input
                        type="email"
                        value={editingItem.email || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, email: e.target.value })}
                        className="border rounded px-2 py-1 text-sm w-full"
                      />
                    ) : (
                      <div className="text-sm text-gray-900">{student.email || "Not provided"}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingItem?.id === student.id ? (
                      <select
                        value={editingItem.grade_level || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, grade_level: e.target.value })}
                        className="border rounded px-2 py-1 text-sm"
                      >
                        <option value="9">9th Grade</option>
                        <option value="10">10th Grade</option>
                        <option value="11">11th Grade</option>
                        <option value="12">12th Grade</option>
                      </select>
                    ) : (
                      <div className="text-sm text-gray-900">Grade {student.grade_level}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingItem?.id === student.id ? (
                      <input
                        type="tel"
                        value={editingItem.phone || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, phone: e.target.value })}
                        className="border rounded px-2 py-1 text-sm w-full"
                      />
                    ) : (
                      <div className="text-sm text-gray-900">{student.phone || "Not provided"}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        student.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {editingItem?.id === student.id ? (
                      <div className="flex space-x-2">
                        <button onClick={() => handleSave("students")} className="text-green-600 hover:text-green-900">
                          <Save className="h-4 w-4" />
                        </button>
                        <button onClick={() => setEditingItem(null)} className="text-gray-600 hover:text-gray-900">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button onClick={() => handleEdit(student)} className="text-blue-600 hover:text-blue-900">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete("students", student.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )

  const renderCoursesTable = () => (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Course Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Course
        </button>
      </div>
      <div className="overflow-x-auto">
        {tableError ? (
          <div className="px-6 py-8 text-center text-red-600">
            <p>{tableError}</p>
          </div>
        ) : tableData.length === 0 ? (
          <div className="px-6 py-8 text-center text-gray-500">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No courses found</p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Grade Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Credits</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((course) => (
                <tr key={course.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {course.course_code}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingItem?.id === course.id ? (
                      <input
                        type="text"
                        value={editingItem.name || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                        className="border rounded px-2 py-1 text-sm w-full"
                      />
                    ) : (
                      <div className="text-sm font-medium text-gray-900">{course.name}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.department_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingItem?.id === course.id ? (
                      <select
                        value={editingItem.grade_level || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, grade_level: e.target.value })}
                        className="border rounded px-2 py-1 text-sm"
                      >
                        <option value="9">9th Grade</option>
                        <option value="10">10th Grade</option>
                        <option value="11">11th Grade</option>
                        <option value="12">12th Grade</option>
                      </select>
                    ) : (
                      <div className="text-sm text-gray-900">Grade {course.grade_level}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingItem?.id === course.id ? (
                      <input
                        type="number"
                        value={editingItem.credits || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, credits: e.target.value })}
                        className="border rounded px-2 py-1 text-sm w-20"
                      />
                    ) : (
                      <div className="text-sm text-gray-900">{course.credits}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-1">
                      {course.is_ap_course && (
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                          AP
                        </span>
                      )}
                      {course.is_honors_course && (
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          Honors
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {editingItem?.id === course.id ? (
                      <div className="flex space-x-2">
                        <button onClick={() => handleSave("courses")} className="text-green-600 hover:text-green-900">
                          <Save className="h-4 w-4" />
                        </button>
                        <button onClick={() => setEditingItem(null)} className="text-gray-600 hover:text-gray-900">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button onClick={() => handleEdit(course)} className="text-blue-600 hover:text-blue-900">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete("courses", course.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )

  const renderApplicationsTable = () => (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Application Management</h2>
      </div>
      <div className="overflow-x-auto">
        {tableError ? (
          <div className="px-6 py-8 text-center text-red-600">
            <p>{tableError}</p>
          </div>
        ) : tableData.length === 0 ? (
          <div className="px-6 py-8 text-center text-gray-500">
            <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No applications found</p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Application #</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Submitted</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((app) => (
                <tr key={app.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {app.application_number}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {app.student_first_name} {app.student_last_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.student_email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Grade {app.current_grade}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingItem?.id === app.id ? (
                      <select
                        value={editingItem.status || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, status: e.target.value })}
                        className="border rounded px-2 py-1 text-sm"
                      >
                        <option value="submitted">Submitted</option>
                        <option value="under_review">Under Review</option>
                        <option value="accepted">Accepted</option>
                        <option value="rejected">Rejected</option>
                        <option value="waitlisted">Waitlisted</option>
                      </select>
                    ) : (
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          app.status === "submitted"
                            ? "bg-yellow-100 text-yellow-800"
                            : app.status === "accepted"
                              ? "bg-green-100 text-green-800"
                              : app.status === "under_review"
                                ? "bg-blue-100 text-blue-800"
                                : app.status === "rejected"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {app.status.replace("_", " ")}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(app.submitted_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {editingItem?.id === app.id ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSave("applications")}
                          className="text-green-600 hover:text-green-900"
                        >
                          <Save className="h-4 w-4" />
                        </button>
                        <button onClick={() => setEditingItem(null)} className="text-gray-600 hover:text-gray-900">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button onClick={() => handleEdit(app)} className="text-blue-600 hover:text-blue-900">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete("applications", app.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 mb-4">
            <FileText className="h-12 w-12 mx-auto mb-2" />
            <p className="text-lg font-semibold">Database Connection Error</p>
          </div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry Connection
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Ann Sandell High School Administration</p>
            </div>
            {activeView !== "dashboard" && (
              <button
                onClick={() => setActiveView("dashboard")}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Back to Dashboard
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeView === "dashboard" && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div
                className="bg-white p-6 rounded-lg shadow cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => fetchTableData("staff")}
              >
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Active Staff</p>
                    <p className="text-2xl font-bold text-gray-900">{stats?.active_staff || 0}</p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white p-6 rounded-lg shadow cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => fetchTableData("students")}
              >
                <div className="flex items-center">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Enrolled Students</p>
                    <p className="text-2xl font-bold text-gray-900">{stats?.enrolled_students || 0}</p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white p-6 rounded-lg shadow cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => fetchTableData("courses")}
              >
                <div className="flex items-center">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Active Courses</p>
                    <p className="text-2xl font-bold text-gray-900">{stats?.active_courses || 0}</p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white p-6 rounded-lg shadow cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => fetchTableData("applications")}
              >
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-amber-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Applications</p>
                    <p className="text-2xl font-bold text-gray-900">{stats?.total_applications || 0}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Applications */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Applications</h2>
              </div>
              <div className="overflow-x-auto">
                {applications.length > 0 ? (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Application #
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Student Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Submitted
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {applications.map((app, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {app.application_number}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {app.student_first_name} {app.student_last_name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                app.status === "submitted"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : app.status === "accepted"
                                    ? "bg-green-100 text-green-800"
                                    : app.status === "under_review"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {app.status.replace("_", " ")}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(app.submitted_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="px-6 py-8 text-center text-gray-500">
                    <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>No applications submitted yet</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Table Views */}
        {tableLoading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading data...</p>
          </div>
        )}

        {!tableLoading && activeView === "staff" && renderStaffTable()}
        {!tableLoading && activeView === "students" && renderStudentsTable()}
        {!tableLoading && activeView === "courses" && renderCoursesTable()}
        {!tableLoading && activeView === "applications" && renderApplicationsTable()}
      </div>
    </div>
  )
}
