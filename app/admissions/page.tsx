"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function Admissions() {
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState({
    totalApplications: 0,
    acceptanceRate: 0,
    averageGPA: 0,
    classSize: 0,
  });

  useEffect(() => {
    // Fetch recent applications for stats
    fetch("/api/applications")
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);
        // Calculate stats
        const total = data.length;
        const accepted = data.filter((app) => app.status === "accepted").length;
        const rate = total > 0 ? Math.round((accepted / total) * 100) : 0;

        setStats({
          totalApplications: total,
          acceptanceRate: rate,
          averageGPA: 3.8,
          classSize: 120,
        });
      })
      .catch((err) => console.error("Error fetching applications:", err));
  }, []);

  const admissionSteps = [
    {
      step: "01",
      title: "Submit Application",
      description:
        "Complete our comprehensive online application form with all required information",
      timeline: "15-20 minutes",
    },
    {
      step: "02",
      title: "Document Review",
      description:
        "Submit transcripts, test scores, and letters of recommendation",
      timeline: "1-2 weeks",
    },
    {
      step: "03",
      title: "Interview Process",
      description: "Meet with our admissions team and faculty members",
      timeline: "30-45 minutes",
    },
    {
      step: "04",
      title: "Decision Notification",
      description: "Receive admission decision and enrollment information",
      timeline: "2-3 weeks",
    },
  ];

  const requirements = [
    {
      category: "Academic Records",
      items: [
        "Official transcripts from all previous schools",
        "Current year grades and progress reports",
        "Standardized test scores (PSAT, SAT, ACT if available)",
        "Academic awards and honors documentation",
      ],
    },
    {
      category: "Recommendations",
      items: [
        "Two teacher recommendation letters",
        "One counselor or administrator recommendation",
        "Optional: Community leader or mentor recommendation",
      ],
    },
    {
      category: "Personal Materials",
      items: [
        "Personal essay responses",
        "Extracurricular activities list",
        "Community service documentation",
        "Portfolio (for arts programs)",
      ],
    },
  ];

  const tuitionInfo = [
    {
      category: "Tuition & Fees",
      amount: "$18,500",
      description: "Annual tuition for full-time students",
      includes: [
        "All core academic courses",
        "Laboratory fees",
        "Technology access",
        "Library services",
      ],
    },
    {
      category: "Additional Costs",
      amount: "$2,500",
      description: "Estimated additional annual expenses",
      includes: [
        "Textbooks and supplies",
        "Uniforms",
        "Field trips",
        "Activity fees",
      ],
    },
    {
      category: "Financial Aid",
      amount: "Up to 75%",
      description: "Merit and need-based assistance available",
      includes: [
        "Academic scholarships",
        "Need-based grants",
        "Payment plans",
        "Work-study programs",
      ],
    },
  ];

  const importantDates = [
    {
      date: "October 1",
      event: "Application Opens",
      description:
        "Online application becomes available for next academic year",
    },
    {
      date: "January 15",
      event: "Early Decision Deadline",
      description: "Priority consideration and financial aid review",
    },
    {
      date: "March 1",
      event: "Regular Decision Deadline",
      description: "Final deadline for fall enrollment applications",
    },
    {
      date: "April 1",
      event: "Decision Notifications",
      description: "Admission decisions sent to all applicants",
    },
    {
      date: "May 1",
      event: "Enrollment Confirmation",
      description: "Deposit due to secure enrollment for fall semester",
    },
  ];

  const faqs = [
    {
      question: "What is the average class size?",
      answer:
        "Our average class size is 12-15 students, ensuring personalized attention and meaningful teacher-student relationships.",
    },
    {
      question: "Do you offer financial aid?",
      answer:
        "Yes, we offer both merit-based and need-based financial assistance. Up to 75% of tuition can be covered through our aid programs.",
    },
    {
      question: "What are your admission requirements?",
      answer:
        "We look for students with strong academic records, good character, and a desire to excel. Specific requirements include transcripts, recommendations, and personal essays.",
    },
    {
      question: "Can students transfer mid-year?",
      answer:
        "We accept transfer students throughout the year based on space availability and academic fit. Contact our admissions office for specific requirements.",
    },
    {
      question: "What support services are available?",
      answer:
        "We offer comprehensive support including academic tutoring, college counseling, mental health services, and learning accommodations.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-gray-200 py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Admissions</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join our community of academic excellence and discover your
              potential
            </p>
            <Link
              href="/apply"
              className="bg-amber-500 text-gray-200 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-600 transition-colors inline-flex items-center"
            >
              Start Your Application <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Statistics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn about our selective admission process and student body
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">
                {stats.totalApplications}
              </div>
              <div className="text-gray-600">Applications This Year</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">
                {stats.acceptanceRate}%
              </div>
              <div className="text-gray-600">Acceptance Rate</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">
                {stats.averageGPA}
              </div>
              <div className="text-gray-600">Average GPA</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">
                {stats.classSize}
              </div>
              <div className="text-gray-600">Students per Class</div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four simple steps to join our academic community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <div className="flex items-center justify-center text-sm text-blue-800">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{step.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to submit for a complete application
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {req.category}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition & Financial Aid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tuition & Financial Aid
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Investing in your child's future with transparent pricing and
              generous financial assistance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tuitionInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-800"
              >
                <div className="flex items-center mb-4">
                  <DollarSign className="h-8 w-8 text-blue-800 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {info.category}
                  </h3>
                </div>
                <div className="text-3xl font-bold text-blue-800 mb-2">
                  {info.amount}
                </div>
                <p className="text-gray-600 mb-4">{info.description}</p>
                <ul className="space-y-2">
                  {info.includes.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Important Dates
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Mark your calendar with these crucial admission deadlines
            </p>
          </div>
          <div className="space-y-6">
            {importantDates.map((date, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur flex items-center"
              >
                <div className="bg-amber-500 text-white p-4 rounded-lg mr-6 text-center min-w-[100px]">
                  <Calendar className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-bold text-sm">{date.date}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{date.event}</h3>
                  <p className="opacity-90">{date.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our admission process
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Admissions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? Our admissions team is here to help guide you
              through the process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Phone className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Call Us
              </h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our admissions counselors
              </p>
              <a
                href="tel:555-123-4567"
                className="text-blue-800 font-semibold hover:underline"
              >
                (555) 123-4567
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Mail className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Email Us
              </h3>
              <p className="text-gray-600 mb-4">
                Send us your questions anytime
              </p>
              <a
                href="mailto:admissions@annsandellhs.edu"
                className="text-blue-800 font-semibold hover:underline"
              >
                admissions@annsandellhs.edu
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <MapPin className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Visit Us
              </h3>
              <p className="text-gray-600 mb-4">Schedule a campus tour</p>
              <p className="text-blue-800 font-semibold">
                123 Education Street
                <br />
                Learning City, LC 12345
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
