
import React from 'react';
import { Code, Palette, Smartphone, ArrowRight, Sparkles, Zap, Star, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="text-purple-600" size={32} />,
      title: 'Web Development',
      description: 'Creating responsive and modern websites using HTML, CSS, and React.',
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimization'],
      color: 'purple'
    },
    {
      icon: <Palette className="text-orange-500" size={32} />,
      title: 'Graphic Design',
      description: 'Professional photo editing and digital design using Photoshop.',
      features: ['Photo Editing', 'Digital Art', 'Brand Materials'],
      color: 'orange'
    },
    {
      icon: <Smartphone className="text-blue-500" size={32} />,
      title: 'UI/UX Design',
      description: 'Designing user-friendly interfaces with focus on user experience.',
      features: ['User Research', 'Wireframing', 'Prototyping'],
      color: 'blue'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm mb-6">
            <Star className="text-purple-600" size={16} />
            <span className="text-sm font-medium text-gray-700">What I can do for you</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Here are the services I can offer. As I continue to grow, I'll be expanding my offerings.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100/50 relative overflow-hidden"
            >
              {/* Floating background elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-100/30 to-orange-100/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg relative">
                    {service.icon}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50/50 to-orange-50/50 rounded-2xl p-6 mb-8 border border-purple-200/20">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full group py-4 text-purple-600 border-2 border-purple-200 rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold bg-white/80 backdrop-blur-sm hover:scale-105 flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Future Services Section */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl max-w-4xl mx-auto border border-gray-100/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-orange-500 to-purple-500"></div>
            
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Lightbulb className="text-white" size={28} />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Future Services</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              As I continue to learn and grow, I'm planning to expand my service offerings. 
              This section will be updated with new capabilities as they become available.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-6 rounded-2xl border border-purple-200/30">
                <Zap className="text-purple-500 mx-auto mb-3" size={24} />
                <h4 className="font-semibold text-gray-800 mb-2">Advanced React</h4>
                <p className="text-sm text-gray-600">Next.js, TypeScript, State Management</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-purple-50 p-6 rounded-2xl border border-orange-200/30">
                <Sparkles className="text-orange-500 mx-auto mb-3" size={24} />
                <h4 className="font-semibold text-gray-800 mb-2">Backend Development</h4>
                <p className="text-sm text-gray-600">Node.js, APIs, Database Design</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-6 rounded-2xl border border-purple-200/30">
                <Star className="text-purple-500 mx-auto mb-3" size={24} />
                <h4 className="font-semibold text-gray-800 mb-2">Mobile Development</h4>
                <p className="text-sm text-gray-600">React Native, Progressive Web Apps</p>
              </div>
            </div>
            
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-100 to-orange-100 rounded-full border border-purple-200/50 shadow-sm">
              <span className="text-gray-700 font-medium">💡 Have suggestions for services? Let me know!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
