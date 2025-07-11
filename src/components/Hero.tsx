
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-lg">
              <Sparkles className="text-purple-600" size={16} />
              <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-orange-500 font-semibold text-lg tracking-wide">Hello, I'm</span>
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                  Dipul
                  <span className="block bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                    Datheputhe
                  </span>
                </h1>
              </div>
              <h2 className="text-2xl md:text-4xl text-gray-700 font-light">
                Web Developer & <br className="hidden sm:block" />
                <span className="font-semibold text-purple-600">Creative Designer</span>
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionate developer with expertise in <span className="font-semibold text-purple-600">HTML</span>, 
              <span className="font-semibold text-purple-600"> React</span>, and 
              <span className="font-semibold text-purple-600"> Photoshop</span>. 
              When I'm not crafting digital experiences, you'll find me on the football field. 
              This is my journey in web development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                View My Work
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                Get In Touch
                <Mail className="transition-transform group-hover:scale-110" size={20} />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="mailto:datheputhedipul@gmail.com" 
                className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200/50"
              >
                <Mail className="text-purple-600 group-hover:text-orange-500 transition-colors" size={24} />
              </a>
              <a 
                href="#" 
                className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200/50"
              >
                <Github className="text-purple-600 group-hover:text-orange-500 transition-colors" size={24} />
              </a>
              <a 
                href="#" 
                className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200/50"
              >
                <Linkedin className="text-purple-600 group-hover:text-orange-500 transition-colors" size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-96 h-96 bg-gradient-to-br from-purple-500 via-purple-600 to-orange-500 rounded-3xl p-1 shadow-2xl">
                <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center overflow-hidden">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl opacity-90 shadow-xl animate-bounce delay-300"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl opacity-80 shadow-lg animate-bounce delay-700"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-70 shadow-md animate-pulse"></div>
              
              {/* Skill Tags */}
              <div className="absolute -top-4 left-8 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-purple-200/50">
                <span className="text-sm font-semibold text-purple-600">React</span>
              </div>
              <div className="absolute -bottom-4 right-8 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-orange-200/50">
                <span className="text-sm font-semibold text-orange-600">HTML</span>
              </div>
              <div className="absolute top-1/3 -right-12 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-pink-200/50">
                <span className="text-sm font-semibold text-pink-600">Photoshop</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <button
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center gap-2 p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50"
          >
            <span className="text-sm font-medium text-gray-600 group-hover:text-purple-600 transition-colors">Scroll Down</span>
            <ChevronDown className="text-purple-600 animate-bounce group-hover:text-orange-500 transition-colors" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
