import {
  BookOpen,
  Microscope,
  Calculator,
  Globe,
  Palette,
  Award,
  Users,
  Target,
  TrendingUp,
  GraduationCap,
  Star,
} from "lucide-react"

export default function Academics() {
  const features = [
    {
      icon: BookOpen,
      title: "Rigorous Curriculum",
      description: "Comprehensive academic programs designed to challenge and inspire students at every level",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "PhD and Master's level educators with extensive experience in their subject areas",
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description: "Individual attention and customized learning paths for each student",
    },
    {
      icon: Award,
      title: "Advanced Placement",
      description: "20+ AP courses available with exceptional pass rates and college credit opportunities",
    },
  ]

  const services = [
    {
      icon: Microscope,
      title: "STEM Excellence",
      description: "State-of-the-art laboratories, robotics, computer science, and engineering programs",
      programs: ["Advanced Biology", "Chemistry", "Physics", "Computer Science", "Engineering", "Robotics"],
    },
    {
      icon: Globe,
      title: "Liberal Arts",
      description: "Comprehensive humanities program fostering critical thinking and communication skills",
      programs: ["Literature", "History", "Philosophy", "Foreign Languages", "Social Studies", "Writing"],
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "From foundational algebra to advanced calculus and statistics",
      programs: ["Algebra", "Geometry", "Trigonometry", "Pre-Calculus", "AP Calculus", "Statistics"],
    },
    {
      icon: Palette,
      title: "Fine Arts",
      description: "Creative expression through visual arts, music, and performing arts",
      programs: ["Drawing & Painting", "Sculpture", "Photography", "Music Theory", "Band", "Theater"],
    },
  ]

  const benefits = [
    "Small class sizes (12-15 students)",
    "22 Advanced Placement courses",
    "100% college acceptance rate",
    "Average SAT score: 1450",
    "National Merit Scholars annually",
    "Research opportunities available",
  ]

  const stats = [
    { number: "98%", label: "College Acceptance Rate", description: "Students accepted to their first-choice college" },
    { number: "1450", label: "Average SAT Score", description: "200 points above national average" },
    { number: "4.2", label: "Average GPA", description: "Weighted GPA of graduating seniors" },
    { number: "15", label: "Student-Teacher Ratio", description: "Ensuring personalized attention" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Rigorous curriculum and innovative teaching methods that prepare students for success in college and
              beyond
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Highlights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes our academic program exceptional and how we prepare students for lifelong success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <feature.icon className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Departments</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs across all major academic disciplines
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <service.icon className="h-10 w-10 text-blue-800 mr-4" />
                  <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.programs.map((program, idx) => (
                    <div key={idx} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium">
                      {program}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Academic Philosophy</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Ann Sandell High School, we believe that every student has the potential for greatness. Our academic
                program is designed to challenge students intellectually while providing the support they need to
                succeed.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We emphasize critical thinking, creativity, and collaboration, preparing students not just for college,
                but for leadership roles in an ever-changing world. Our faculty are not just teachers—they are mentors,
                advisors, and inspirers who are committed to each student's success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-800">22</div>
                  <div className="text-sm text-gray-600">AP Courses</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-800">12:1</div>
                  <div className="text-sm text-gray-600">Student-Teacher Ratio</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Students in science laboratory"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm">Pass Rate on AP Exams</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Academic Advantages</h2>
              <p className="text-xl mb-8 opacity-90">
                Our students enjoy numerous academic benefits that set them apart from their peers and prepare them for
                success in competitive college environments.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-amber-500 rounded-full p-2 mr-4">
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur text-center">
                <GraduationCap className="h-12 w-12 mx-auto mb-4 text-amber-400" />
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-80">College Acceptance</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur text-center">
                <Star className="h-12 w-12 mx-auto mb-4 text-amber-400" />
                <div className="text-2xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-80">National Merit Scholars</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-amber-400" />
                <div className="text-2xl font-bold mb-2">1450</div>
                <div className="text-sm opacity-80">Average SAT Score</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-amber-400" />
                <div className="text-2xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-80">AP Pass Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Achievement</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself - exceptional results that open doors to the best colleges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-blue-800 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
