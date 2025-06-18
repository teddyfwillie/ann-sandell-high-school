"use client";

import { useState, useEffect } from "react";
import {
  BookOpen,
  Clock,
  Users,
  Award,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";

export default function Curriculum() {
  const [courses, setCourses] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch courses
        const coursesRes = await fetch("/api/courses");
        if (coursesRes.ok) {
          const coursesData = await coursesRes.json();
          setCourses(Array.isArray(coursesData) ? coursesData : []);
        }

        // Fetch departments
        const deptRes = await fetch("/api/departments");
        if (deptRes.ok) {
          const deptData = await deptRes.json();
          setDepartments(Array.isArray(deptData) ? deptData : []);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCourses =
    selectedDepartment === "all"
      ? courses
      : courses.filter(
          (course) => course.department_name === selectedDepartment
        );

  const graduationRequirements = [
    {
      subject: "English",
      credits: 4,
      description: "Literature, composition, and communication skills",
    },
    {
      subject: "Mathematics",
      credits: 4,
      description: "Algebra through Calculus, Statistics",
    },
    {
      subject: "Science",
      credits: 4,
      description: "Biology, Chemistry, Physics, and electives",
    },
    {
      subject: "Social Studies",
      credits: 3,
      description: "World History, US History, Government",
    },
    {
      subject: "Foreign Language",
      credits: 2,
      description: "Two years of the same language",
    },
    {
      subject: "Fine Arts",
      credits: 1,
      description: "Visual arts, music, or performing arts",
    },
    {
      subject: "Physical Education",
      credits: 2,
      description: "Health and physical fitness",
    },
    {
      subject: "Electives",
      credits: 4,
      description: "Student choice from approved courses",
    },
  ];

  const pathways = [
    {
      title: "STEM Pathway",
      description: "Science, Technology, Engineering, and Mathematics focus",
      icon: Target,
      courses: [
        "Advanced Biology",
        "AP Chemistry",
        "AP Physics",
        "AP Calculus",
        "Computer Science",
        "Engineering",
      ],
      careers: [
        "Engineer",
        "Doctor",
        "Research Scientist",
        "Software Developer",
      ],
    },
    {
      title: "Liberal Arts Pathway",
      description: "Humanities and social sciences emphasis",
      icon: BookOpen,
      courses: [
        "AP Literature",
        "AP History",
        "Philosophy",
        "Foreign Languages",
        "Creative Writing",
        "Psychology",
      ],
      careers: ["Lawyer", "Teacher", "Journalist", "Social Worker"],
    },
    {
      title: "Business Pathway",
      description: "Entrepreneurship and business management track",
      icon: TrendingUp,
      courses: [
        "Economics",
        "Business Management",
        "Accounting",
        "Marketing",
        "Statistics",
        "Public Speaking",
      ],
      careers: [
        "Business Owner",
        "Manager",
        "Financial Analyst",
        "Marketing Specialist",
      ],
    },
    {
      title: "Arts Pathway",
      description: "Creative and performing arts concentration",
      icon: Star,
      courses: [
        "Studio Art",
        "Music Theory",
        "Theater Arts",
        "Digital Media",
        "Art History",
        "Creative Writing",
      ],
      careers: ["Artist", "Musician", "Designer", "Actor"],
    },
  ];

  const apCourses = [
    "AP Biology",
    "AP Chemistry",
    "AP Physics",
    "AP Calculus AB",
    "AP Calculus BC",
    "AP Statistics",
    "AP English Literature",
    "AP English Language",
    "AP US History",
    "AP World History",
    "AP Government",
    "AP Spanish",
    "AP French",
    "AP Computer Science",
    "AP Psychology",
    "AP Art History",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-gray-200 py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Curriculum & Courses
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive academic programs designed to prepare students for
              college and career success
            </p>
          </div>
        </div>
      </section>

      {/* Graduation Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Graduation Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Students must complete 24 credits across core subjects and
              electives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {graduationRequirements.map((req, index) => (
              <div
                key={index}
                className="bg-gray-200 p-6 rounded-xl shadow-lg border-l-4 border-blue-800"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {req.subject}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {req.credits} credits
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{req.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 inline-block">
              <div className="text-3xl font-bold text-amber-800 mb-2">
                24 Total Credits
              </div>
              <div className="text-amber-700">Required for Graduation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Pathways */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic Pathways
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized tracks to help students focus on their interests and
              career goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pathways.map((pathway, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <pathway.icon className="h-10 w-10 text-blue-800 mr-4" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {pathway.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{pathway.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Featured Courses
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {pathway.courses.map((course, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-sm"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Career Opportunities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pathway.careers.map((career, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AP Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Placement Program
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive AP program offers 22 courses across all major
                subject areas, giving students the opportunity to earn college
                credit while still in high school.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-800">22</div>
                  <div className="text-sm text-gray-600">
                    AP Courses Offered
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-800">98%</div>
                  <div className="text-sm text-gray-600">Pass Rate</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {apCourses.slice(0, 8).map((course, index) => (
                  <div
                    key={index}
                    className="bg-amber-50 text-amber-800 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Students in advanced laboratory"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">4.2</div>
                <div className="text-sm">Average AP Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Course Catalog
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive course offerings across all departments
            </p>
          </div>

          {/* Department Filter */}
          {loading ? (
            <div className="text-center py-8">
              <div className="text-lg text-gray-600">Loading courses...</div>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <div className="text-lg text-red-600">
                Error loading data: {error}
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                  onClick={() => setSelectedDepartment("all")}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedDepartment === "all"
                      ? "bg-blue-800 text-white"
                      : "bg-white text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  All Departments
                </button>
                {Array.isArray(departments) &&
                  departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDepartment(dept.name)}
                      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                        selectedDepartment === dept.name
                          ? "bg-blue-800 text-white"
                          : "bg-white text-gray-700 hover:bg-blue-50"
                      }`}
                    >
                      {dept.name}
                    </button>
                  ))}
              </div>

              {/* Course Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.isArray(filteredCourses) &&
                  filteredCourses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {course.name}
                          </h3>
                          <span className="text-sm text-blue-800 font-medium">
                            {course.course_code}
                          </span>
                          {course.department_name && (
                            <div className="text-xs text-gray-500 mt-1">
                              {course.department_name}
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Credits</div>
                          <div className="text-lg font-bold text-blue-800">
                            {course.credits}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {course.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Grade {course.grade_level}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{course.credits} Credits</span>
                        </div>
                      </div>

                      {(course.is_ap_course || course.is_honors_course) && (
                        <div className="flex gap-2 mb-3">
                          {course.is_ap_course && (
                            <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                              AP Course
                            </span>
                          )}
                          {course.is_honors_course && (
                            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                              Honors
                            </span>
                          )}
                        </div>
                      )}

                      {course.prerequisites && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <div className="text-xs text-gray-500 mb-1">
                            Prerequisites:
                          </div>
                          <div className="text-sm text-gray-700">
                            {course.prerequisites}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>

              {filteredCourses.length === 0 && (
                <div className="text-center py-8">
                  <div className="text-lg text-gray-600">
                    No courses found for the selected department.
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Academic Support */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Academic Support Services
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Comprehensive support to ensure every student reaches their full
              potential
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-amber-400" />
              <h3 className="text-xl font-semibold mb-3">Tutoring Center</h3>
              <p className="opacity-90">
                Free peer and teacher tutoring available in all subjects
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-amber-400" />
              <h3 className="text-xl font-semibold mb-3">Study Groups</h3>
              <p className="opacity-90">
                Collaborative learning opportunities for challenging courses
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-amber-400" />
              <h3 className="text-xl font-semibold mb-3">
                Academic Counseling
              </h3>
              <p className="opacity-90">
                Personalized guidance for course selection and college planning
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
