"use client"

import type React from "react"
import { useState } from "react"
import { User, Mail, Phone, FileText, CheckCircle, Clock, Users, GraduationCap } from "lucide-react"

export default function ApplyNow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Student Information
    studentFirstName: "",
    studentLastName: "",
    studentEmail: "",
    studentPhone: "",
    dateOfBirth: "",
    gender: "",
    currentGrade: "",
    currentSchool: "",
    intendedStartDate: "",

    // Parent/Guardian Information
    parentFirstName: "",
    parentLastName: "",
    parentRelationship: "",
    parentEmail: "",
    parentPhone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",

    // Academic Information
    currentGpa: "",
    testScores: "",
    academicInterests: "",
    extracurriculars: "",

    // Additional Information
    whyApplying: "",
    specialNeeds: "",
    additionalInfo: "",
  })

  const steps = [
    { number: 1, title: "Student Info", icon: User },
    { number: 2, title: "Parent Info", icon: Users },
    { number: 3, title: "Academic Info", icon: GraduationCap },
    { number: 4, title: "Additional Info", icon: FileText },
    { number: 5, title: "Review & Submit", icon: CheckCircle },
  ]

  const requirements = [
    {
      title: "Application Form",
      description: "Complete online application with all required fields",
      status: "required",
    },
    {
      title: "Academic Transcripts",
      description: "Official transcripts from current and previous schools",
      status: "required",
    },
    {
      title: "Teacher Recommendations",
      description: "Two letters of recommendation from current teachers",
      status: "required",
    },
    {
      title: "Personal Essay",
      description: "Written essay responses to application questions",
      status: "required",
    },
    {
      title: "Standardized Test Scores",
      description: "PSAT, SAT, or ACT scores (if available)",
      status: "optional",
    },
    {
      title: "Portfolio/Samples",
      description: "For arts programs or special interests",
      status: "optional",
    },
  ]

  const deadlines = [
    {
      date: "January 15, 2025",
      title: "Early Decision Deadline",
      description: "Priority consideration and financial aid review",
    },
    {
      date: "March 1, 2025",
      title: "Regular Decision Deadline",
      description: "Standard application deadline for fall enrollment",
    },
    {
      date: "May 1, 2025",
      title: "Final Decision Date",
      description: "Enrollment confirmation and deposit due",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.studentFirstName && formData.studentLastName && formData.currentGrade && formData.currentSchool
      case 2:
        return formData.parentFirstName && formData.parentLastName && formData.parentEmail && formData.parentPhone
      case 3:
        return formData.academicInterests
      case 4:
        return formData.whyApplying
      default:
        return true
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        alert(`Application submitted successfully! Your application number is: ${result.applicationNumber}`)
        // Reset form
        setCurrentStep(1)
        setFormData({
          studentFirstName: "",
          studentLastName: "",
          studentEmail: "",
          studentPhone: "",
          dateOfBirth: "",
          gender: "",
          currentGrade: "",
          currentSchool: "",
          intendedStartDate: "",
          parentFirstName: "",
          parentLastName: "",
          parentRelationship: "",
          parentEmail: "",
          parentPhone: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          currentGpa: "",
          testScores: "",
          academicInterests: "",
          extracurriculars: "",
          whyApplying: "",
          specialNeeds: "",
          additionalInfo: "",
        })
      } else {
        alert("Error submitting application. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      alert("Error submitting application. Please try again.")
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Student Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  name="studentFirstName"
                  required
                  value={formData.studentFirstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="studentLastName"
                  required
                  value={formData.studentLastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="studentEmail"
                  value={formData.studentEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter student email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="studentPhone"
                  value={formData.studentPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter student phone"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Grade Level *</label>
                <select
                  name="currentGrade"
                  required
                  value={formData.currentGrade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select grade level</option>
                  <option value="8">8th Grade</option>
                  <option value="9">9th Grade</option>
                  <option value="10">10th Grade</option>
                  <option value="11">11th Grade</option>
                  <option value="12">12th Grade</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current School *</label>
                <input
                  type="text"
                  name="currentSchool"
                  required
                  value={formData.currentSchool}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter current school name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Intended Start Date</label>
                <input
                  type="date"
                  name="intendedStartDate"
                  value={formData.intendedStartDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Parent/Guardian Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  name="parentFirstName"
                  required
                  value={formData.parentFirstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Parent/Guardian first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="parentLastName"
                  required
                  value={formData.parentLastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Parent/Guardian last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relationship *</label>
                <select
                  name="parentRelationship"
                  required
                  value={formData.parentRelationship}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select relationship</option>
                  <option value="mother">Mother</option>
                  <option value="father">Father</option>
                  <option value="guardian">Guardian</option>
                  <option value="stepmother">Stepmother</option>
                  <option value="stepfather">Stepfather</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="parentEmail"
                  required
                  value={formData.parentEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="parentPhone"
                  required
                  value={formData.parentPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter street address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter city"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter state"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter ZIP code"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Academic Information</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current GPA</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="4.0"
                  name="currentGpa"
                  value={formData.currentGpa}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter GPA (e.g., 3.75)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Test Scores</label>
                <textarea
                  name="testScores"
                  rows={2}
                  value={formData.testScores}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter any standardized test scores (SAT, ACT, PSAT, etc.)"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Academic Interests *</label>
                <textarea
                  name="academicInterests"
                  required
                  rows={3}
                  value={formData.academicInterests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your academic interests and favorite subjects..."
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Extracurricular Activities</label>
                <textarea
                  name="extracurriculars"
                  rows={3}
                  value={formData.extracurriculars}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="List your extracurricular activities, sports, clubs, volunteer work, etc."
                ></textarea>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Additional Information</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to attend Ann Sandell High School? *
                </label>
                <textarea
                  name="whyApplying"
                  required
                  rows={4}
                  value={formData.whyApplying}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us what attracts you to our school..."
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Needs or Accommodations</label>
                <textarea
                  name="specialNeeds"
                  rows={3}
                  value={formData.specialNeeds}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe any special needs, accommodations, or support services required..."
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  rows={3}
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any additional information you would like to share..."
                ></textarea>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Review & Submit</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Application Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Student Name:</strong> {formData.studentFirstName} {formData.studentLastName}
                </div>
                <div>
                  <strong>Grade Level:</strong> {formData.currentGrade}
                </div>
                <div>
                  <strong>Current School:</strong> {formData.currentSchool}
                </div>
                <div>
                  <strong>Parent/Guardian:</strong> {formData.parentFirstName} {formData.parentLastName}
                </div>
                <div>
                  <strong>Parent Email:</strong> {formData.parentEmail}
                </div>
                <div>
                  <strong>Parent Phone:</strong> {formData.parentPhone}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I certify that all information provided is accurate and complete. *
              </label>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Apply Now</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Take the first step toward joining our community of academic excellence
            </p>
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Requirements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about applying to Ann Sandell High School
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-3">
                  <div
                    className={`w-3 h-3 rounded-full mr-3 ${req.status === "required" ? "bg-red-500" : "bg-green-500"}`}
                  ></div>
                  <span
                    className={`text-xs font-medium uppercase tracking-wide ${req.status === "required" ? "text-red-600" : "text-green-600"}`}
                  >
                    {req.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{req.title}</h3>
                <p className="text-gray-600 text-sm">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Important Dates</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mark your calendar with these crucial application deadlines
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deadlines.map((deadline, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-800" />
                </div>
                <div className="text-xl font-bold text-blue-800 mb-2">{deadline.date}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{deadline.title}</h3>
                <p className="text-gray-600 text-sm">{deadline.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Online Application</h2>
            <p className="text-xl text-gray-600">Complete your application in just a few simple steps</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium mb-2 ${
                      currentStep >= step.number ? "bg-blue-800 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-gray-600 text-center">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={currentStep === 5 ? handleSubmit : (e) => e.preventDefault()}>
              {renderStepContent()}

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    currentStep === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Previous
                </button>

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!validateStep(currentStep)}
                    className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                      validateStep(currentStep)
                        ? "bg-blue-800 text-white hover:bg-blue-900"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-amber-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors flex items-center"
                  >
                    Submit Application
                    <CheckCircle className="ml-2 h-5 w-5" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help with Your Application?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our admissions team is here to help guide you through the process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:555-123-4567"
              className="bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-600 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Admissions
            </a>
            <a
              href="mailto:admissions@annsandellhs.edu"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
