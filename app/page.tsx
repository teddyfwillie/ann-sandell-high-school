"use client";
import Link from "next/link";
import {
  BookOpen,
  Users,
  Trophy,
  Heart,
  ChevronRight,
  Star,
} from "lucide-react";
import { Hero } from "../components/ui/hero";

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description:
        "Rigorous curriculum designed to challenge and inspire students to reach their full potential.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description:
        "Dedicated teachers with advanced degrees and passion for student success.",
    },
    {
      icon: Trophy,
      title: "Achievement Focus",
      description:
        "Track record of academic achievements and college preparation success.",
    },
    {
      icon: Heart,
      title: "Character Building",
      description:
        "Emphasis on developing strong moral character and leadership skills.",
    },
  ];

  const benefits = [
    "Small class sizes for personalized attention",
    "100% college acceptance rate",
    "Extensive extracurricular programs",
    "State-of-the-art facilities",
    "Advanced Placement courses available",
    "Comprehensive counseling services",
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Ed.D. in Educational Leadership, 15+ years in education",
    },
    {
      name: "Mr. David Chen",
      role: "Vice Principal",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "M.Ed. in Administration, Former Mathematics Department Head",
    },
    {
      name: "Ms. Emily Rodriguez",
      role: "Academic Director",
      image:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "M.A. in Curriculum Design, 12 years teaching experience",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Submit Application",
      description: "Complete our comprehensive online application form",
    },
    {
      number: "02",
      title: "Academic Review",
      description: "Our admissions team reviews your academic records",
    },
    {
      number: "03",
      title: "Interview Process",
      description: "Meet with our faculty and share your aspirations",
    },
    {
      number: "04",
      title: "Welcome Aboard",
      description: "Join our community of excellence and begin your journey",
    },
  ];

  const testimonials = [
    {
      name: "Teddy F. Willie",
      role: "Class of 2020, Maharishi Markandeshwar University",
      content:
        "Ann Sandell prepared me exceptionally well for college. The rigorous academics and supportive environment helped me achieve my dreams.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQFiaLMndnBohA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698817571549?e=1755734400&v=beta&t=-P_5YLFk7NiVRKQRhPXKastwh89rmePZuWVEiO-I4oA",
    },
    {
      name: "Michael Thompson",
      role: "Class of 2022, MIT",
      content:
        "The STEM programs at Ann Sandell are outstanding. The teachers truly care about student success and go above and beyond.",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      name: "Jessica Park",
      role: "Class of 2023, Stanford University",
      content:
        "The leadership opportunities and character development programs shaped me into who I am today. Forever grateful!",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero 
        title="Ann Sandell High School" 
        subtitle="Empowering students through academic excellence and character development"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/apply"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg inline-flex items-center transition-colors"
          >
            Apply Now
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/academics"
            className="bg-white hover:bg-gray-100 text-blue-900 font-semibold px-6 py-3 rounded-lg inline-flex items-center transition-colors"
          >
            Explore Programs
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Hero>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ann Sandell High School?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide an exceptional educational experience that prepares
              students for lifelong success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-blue-800 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits of Joining Our Community
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our students enjoy numerous advantages that set them up for
                success in college and beyond.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Students studying"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">College Acceptance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced educators dedicated to student success and academic
              excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-800 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Join Our School
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to begin your journey toward academic excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Graduates Say
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Hear from our successful alumni who have gone on to achieve great
              things
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm opacity-80">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
