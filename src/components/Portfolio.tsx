
import React from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

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
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing my notable project that demonstrates my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg p-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Project Image */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-orange-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Calendar className="text-purple-600 mx-auto mb-4" size={48} />
                      <p className="text-gray-600 font-medium">Hotel Booking Interface</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Users className="mr-2" size={16} />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white rounded-full text-sm font-medium text-purple-600 border border-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </button>
                  <button className="flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
                    <Github className="mr-2" size={16} />
                    View Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">More projects coming soon as I continue to build and learn!</p>
          <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-lg">
            <span className="text-gray-700">🚀 This portfolio is in beta - stay tuned for updates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
