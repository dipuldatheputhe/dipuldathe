
import React from 'react';
import { Code, Palette, Smartphone, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="text-purple-600" size={32} />,
      title: 'Web Development',
      description: 'Creating responsive and modern websites using HTML, CSS, and React.',
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimization']
    },
    {
      icon: <Palette className="text-orange-500" size={32} />,
      title: 'Graphic Design',
      description: 'Professional photo editing and digital design using Photoshop.',
      features: ['Photo Editing', 'Digital Art', 'Brand Materials']
    },
    {
      icon: <Smartphone className="text-blue-500" size={32} />,
      title: 'UI/UX Design',
      description: 'Designing user-friendly interfaces with focus on user experience.',
      features: ['User Research', 'Wireframing', 'Prototyping']
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the services I can offer. As I continue to grow, I'll be expanding my offerings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-105"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4 group-hover:bg-purple-50 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <ArrowRight className="mr-2 text-purple-500" size={14} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Future Services</h3>
            <p className="text-gray-600 mb-6">
              As I continue to learn and grow, I'm planning to expand my service offerings. 
              This section will be updated with new capabilities as they become available.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-50 to-orange-50 rounded-lg">
              <span className="text-gray-700">💡 Suggestions for services? Let me know!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
