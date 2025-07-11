
import React from 'react';
import { GraduationCap, User, Heart, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-orange-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-orange-50 rounded-full border border-purple-200/50 shadow-sm mb-6">
            <User className="text-purple-600" size={16} />
            <span className="text-sm font-medium text-gray-700">Get to know me</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover my journey, passion, and what drives me in the world of technology and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <div className="space-y-8">
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <User className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">Who I Am</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                I'm a passionate and adaptable individual with a strong eagerness to learn and grow in the field of web development. 
                My journey in tech has been driven by curiosity and a desire to create meaningful digital experiences that make a difference.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">My Passion</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Beyond coding, I have a deep love for football. This sport has taught me teamwork, perseverance, 
                and strategic thinking - qualities that I bring to my development work every day.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <span className="text-2xl">⚽</span>
                <span className="font-medium">Football enthusiast since childhood</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 via-white to-orange-50 p-8 rounded-3xl border border-purple-200/30 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-orange-400 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    "I'm currently open to opportunities and excited to contribute my skills while continuing to learn and grow in the tech industry."
                  </p>
                  <div className="mt-4 inline-flex items-center px-4 py-2 bg-white/60 rounded-full text-sm font-medium text-purple-700">
                    🚀 Ready for new challenges
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <GraduationCap className="text-white" size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-3xl font-bold text-gray-800">Education</h3>
                <p className="text-gray-600">My academic journey</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 hover:scale-105">
                <div className="absolute -left-2 top-6 w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Bachelor's Degree</h4>
                    <p className="text-purple-600 font-semibold text-lg">BMC College</p>
                    <p className="text-gray-600 text-sm">Higher Education • Current</p>
                  </div>
                  <BookOpen className="text-purple-500 group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
              </div>

              <div className="group relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 hover:scale-105">
                <div className="absolute -left-2 top-6 w-4 h-4 bg-orange-500 rounded-full shadow-lg"></div>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">SLC</h4>
                    <p className="text-orange-600 font-semibold text-lg">Modern College</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-gray-600 text-sm">GPA: 3.00</p>
                      <div className="px-2 py-1 bg-orange-100 rounded-full text-xs font-medium text-orange-700">
                        Good Performance
                      </div>
                    </div>
                  </div>
                  <BookOpen className="text-orange-500 group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
              </div>

              <div className="group relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 hover:scale-105">
                <div className="absolute -left-2 top-6 w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">SEE</h4>
                    <p className="text-purple-600 font-semibold text-lg">Nyatapola Secondary School</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-gray-600 text-sm">GPA: 3.10</p>
                      <div className="px-2 py-1 bg-purple-100 rounded-full text-xs font-medium text-purple-700">
                        Strong Foundation
                      </div>
                    </div>
                  </div>
                  <BookOpen className="text-purple-500 group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
