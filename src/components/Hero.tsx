
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <span className="text-orange-500 font-medium text-lg">Hello, I'm</span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mt-2">
                Dipul Datheputhe
              </h1>
              <h2 className="text-2xl md:text-3xl text-purple-600 font-semibold mt-2">
                Web Developer & Designer
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto lg:mx-0 mb-8">
              I'm a passionate developer with expertise in HTML, React, and Photoshop. 
              When I'm not coding, you'll find me on the football field. This is my beta 
              portfolio showcasing my journey in web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="mailto:datheputhedipul@gmail.com" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                <Mail className="text-purple-600" size={20} />
              </a>
              <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                <Github className="text-purple-600" size={20} />
              </a>
              <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                <Linkedin className="text-purple-600" size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-400 to-orange-400 rounded-full p-2">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <div className="text-6xl text-gray-500">👨‍💻</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ChevronDown className="text-purple-600" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
