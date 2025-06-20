"use client";

import { useState, useEffect } from "react";
import {
  GraduationCap,
  Heart,
  Target,
  Users,
  MapPin,
  Calendar,
} from "lucide-react";
import { Hero } from "../../components/ui/hero";

export default function About() {
  const [team, setTeam] = useState([]);
  const [locations, setLocations] = useState([]);
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    // Fetch staff data
    fetch("/api/staff")
      .then((res) => res.json())
      .then((data) => {
        const leadership = data.filter((member) =>
          [
            "Principal",
            "Vice Principal",
            "Academic Director",
            "Dean of Students",
            "Director of Arts & Sciences",
            "Athletic Director",
          ].includes(member.position)
        );
        setTeam(
          leadership.map((member) => ({
            name: `${member.first_name} ${member.last_name}`,
            role: member.position,
            image:
              member.profile_image_url ||
              "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
            bio: member.bio || member.qualifications,
          }))
        );
      })
      .catch((err) => console.error("Error fetching staff:", err));

    // Fetch locations
    fetch("/api/locations")
      .then((res) => res.json())
      .then((data) => {
        setLocations(
          data.map((loc) => ({
            name: loc.name,
            address: loc.address,
            phone: loc.phone,
            type: loc.type,
          }))
        );
      })
      .catch((err) => console.error("Error fetching locations:", err));

    // Fetch timeline events
    fetch("/api/events?type=historical")
      .then((res) => res.json())
      .then((data) => {
        setTimeline(
          data.map((event) => ({
            year: new Date(event.start_date).getFullYear().toString(),
            title: event.title,
            description: event.description,
          }))
        );
      })
      .catch((err) => console.error("Error fetching timeline:", err));
  }, []);

  const gallery = [
    {
      image:
        "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Modern Classrooms",
    },
    {
      image:
        "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Science Laboratory",
    },
    {
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Library & Research Center",
    },
    {
      image:
        "https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Athletic Facilities",
    },
    {
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Technology Center",
    },
    {
      image:
        "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Arts Studio",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title="About Our School"
        subtitle="Nearly four decades of educational excellence, shaping minds and building character"
      />

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Target className="h-8 w-8 text-blue-800 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Mission
                    </h3>
                    <p className="text-gray-600">
                      To provide exceptional education that challenges students
                      academically, develops character, and prepares them for
                      success in college and life through innovative teaching,
                      personalized attention, and a supportive community
                      environment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="h-8 w-8 text-blue-800 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Vision
                    </h3>
                    <p className="text-gray-600">
                      To be the premier educational institution that inspires
                      students to become confident, compassionate, and capable
                      leaders who make positive contributions to their
                      communities and the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Students in classroom"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">18</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <GraduationCap className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Academic Excellence
              </h3>
              <p className="text-gray-600">
                Rigorous curriculum and high standards that prepare students for
                the most competitive colleges.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <Heart className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Character Development
              </h3>
              <p className="text-gray-600">
                Building integrity, empathy, and leadership skills that last a
                lifetime.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <Users className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community Focus
              </h3>
              <p className="text-gray-600">
                Creating a supportive environment where every student feels
                valued and encouraged.
              </p>
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
              Experienced educators and administrators dedicated to your child's
              success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-blue-800 font-medium mb-3 text-center">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm text-center">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple specialized facilities to support comprehensive education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-800"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-800 mr-2" />
                  <span className="text-sm font-medium text-blue-800 uppercase tracking-wide">
                    {location.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {location.name}
                </h3>
                <p className="text-gray-600 mb-2">{location.address}</p>
                <p className="text-gray-600 font-medium">{location.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Campus Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a visual tour of our state-of-the-art facilities and learning
              environments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our History</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Key milestones in our journey of educational excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "1985",
                  title: "School Founded",
                  description:
                    "Ann Sandell High School opens its doors with 300 students and 25 faculty members.",
                },
                {
                  year: "1992",
                  title: "First State Championship",
                  description:
                    "Our debate team wins the state championship, beginning our tradition of academic excellence.",
                },
                {
                  year: "2001",
                  title: "Technology Integration",
                  description:
                    "Major technology upgrade brings computers and internet access to every classroom.",
                },
                {
                  year: "2010",
                  title: "STEM Center Opens",
                  description:
                    "New science and technology center opens, featuring state-of-the-art laboratories.",
                },
                {
                  year: "2018",
                  title: "Arts Center Expansion",
                  description:
                    "Performing arts center renovation completed with new auditorium and music rooms.",
                },
                {
                  year: "2023",
                  title: "Digital Learning Initiative",
                  description:
                    "Launch of 1:1 device program and enhanced digital learning platforms.",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
