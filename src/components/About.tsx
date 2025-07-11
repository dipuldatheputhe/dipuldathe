
import React from 'react';
import { GraduationCap, User, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives my passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <User className="text-purple-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800">Who I Am</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate and adaptable individual with a strong eagerness to learn and grow in the field of web development. 
                My journey in tech has been driven by curiosity and a desire to create meaningful digital experiences.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Heart className="text-orange-500 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800">My Passion</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Beyond coding, I have a deep love for football. This sport has taught me teamwork, perseverance, 
                and strategic thinking - qualities that I bring to my development work every day.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 italic">
                "I'm currently open to opportunities and excited to contribute my skills while continuing to learn and grow in the tech industry."
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="text-purple-600 mr-3" size={24} />
              <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h4 className="font-semibold text-gray-800 mb-2">Bachelor's Degree</h4>
                <p className="text-purple-600 font-medium">BMC College</p>
                <p className="text-gray-600 text-sm">Higher Education</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <h4 className="font-semibold text-gray-800 mb-2">SLC</h4>
                <p className="text-orange-600 font-medium">Modern College</p>
                <p className="text-gray-600 text-sm">GPA: 3.00</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h4 className="font-semibold text-gray-800 mb-2">SEE</h4>
                <p className="text-purple-600 font-medium">Nyatapola Secondary School</p>
                <p className="text-gray-600 text-sm">GPA: 3.10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
