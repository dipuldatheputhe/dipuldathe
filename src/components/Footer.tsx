
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Dipul Datheputhe
            </h3>
            <p className="text-gray-300 leading-relaxed">
              A passionate web developer and designer with expertise in HTML, React, and Photoshop. 
              Currently seeking opportunities to grow and contribute to meaningful projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a
                href="mailto:datheputhedipul@gmail.com"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                <Mail className="mr-2" size={16} />
                datheputhedipul@gmail.com
              </a>
              <a
                href="tel:9803372585"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                📞 9803372585
              </a>
              <div className="flex items-center text-gray-300">
                📍 Nepal
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <a
                href="mailto:datheputhedipul@gmail.com"
                className="p-3 bg-gray-700 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-700 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-700 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Back to Top
            </button>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="mx-2 text-red-500" size={16} /> by Dipul Datheputhe
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 Dipul Datheputhe. This is a beta portfolio - more updates coming soon!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
