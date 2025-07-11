
import React from 'react';
import { ExternalLink, Github, Calendar, Users, Sparkles, Code, Zap } from 'lucide-react';

const Portfolio = () => {
  const project = {
    title: 'Hotel Table Booking System',
    description: 'A comprehensive web application that allows users to book or reserve tables according to their preferences. Features include real-time availability, user-friendly interface, and booking management.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    features: [
      'Real-time table availability',
      'User preference selection',
      'Booking confirmation system',
      'Responsive design'
    ],
    image: '/api/placeholder/600/400'
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-orange-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-orange-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-orange-50 rounded-full border border-purple-200/50 shadow-sm mb-6">
            <Code className="text-purple-600" size={16} />
            <span className="text-sm font-medium text-gray-700">Featured work</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">My Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Showcasing my notable project that demonstrates my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 via-white to-orange-50 rounded-3xl p-8 shadow-2xl border border-purple-200/30 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Project Visual */}
              <div className="order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100/50">
                    <div className="w-full h-80 bg-gradient-to-br from-purple-100 via-white to-orange-100 rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Floating elements */}
                      <div className="absolute top-4 left-4 w-16 h-16 bg-purple-500/20 rounded-xl animate-bounce"></div>
                      <div className="absolute top-8 right-8 w-12 h-12 bg-orange-500/20 rounded-lg animate-bounce delay-300"></div>
                      <div className="absolute bottom-6 left-8 w-14 h-14 bg-blue-500/20 rounded-2xl animate-bounce delay-700"></div>
                      
                      <div className="text-center z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl animate-pulse">
                          <Calendar className="text-white" size={36} />
                        </div>
                        <p className="text-gray-700 font-bold text-xl">Hotel Booking Interface</p>
                        <p className="text-gray-500 text-sm mt-2">Interactive Design Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Tech Stack Visual */}
                <div className="mt-6 flex justify-center gap-4">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="group relative">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-200/50 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xs font-bold text-gray-600">{tech.slice(0, 2)}</span>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {tech}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="order-1 lg:order-2 space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Featured Project</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
                    <Users className="mr-3 text-purple-500" size={20} />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
                    <Zap className="mr-3 text-orange-500" size={20} />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-purple-50 to-orange-50 rounded-full text-sm font-semibold text-purple-700 border border-purple-200/50 hover:scale-105 transition-transform duration-300 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="group flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-2xl hover:shadow-2xl transition-all duration-300 font-semibold hover:scale-105">
                    <ExternalLink className="mr-2 group-hover:scale-110 transition-transform duration-300" size={18} />
                    Live Demo
                  </button>
                  <button className="group flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold bg-white/80 backdrop-blur-sm hover:scale-105">
                    <Github className="mr-2 group-hover:scale-110 transition-transform duration-300" size={18} />
                    View Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 via-white to-orange-50 rounded-3xl p-8 shadow-lg border border-purple-200/30 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="text-purple-500 mr-2" size={24} />
              <h3 className="text-xl font-bold text-gray-800">More Projects Coming Soon</h3>
            </div>
            <p className="text-gray-600 mb-6">
              More projects coming soon as I continue to build and learn! This portfolio is continuously evolving.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-orange-100 rounded-full border border-purple-200/50">
              <span className="text-gray-700 font-medium">🚀 This portfolio is in beta - stay tuned for updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
