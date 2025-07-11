
import React from 'react';
import { Code, Palette, Smartphone, Zap, Lightbulb, Target } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      level: 85,
      icon: <Code className="text-orange-500" size={28} />,
      description: 'Semantic markup and modern HTML5 standards',
      color: 'orange'
    },
    {
      name: 'React',
      level: 80,
      icon: <Smartphone className="text-blue-500" size={28} />,
      description: 'Component-based UI development and state management',
      color: 'blue'
    },
    {
      name: 'Photoshop',
      level: 75,
      icon: <Palette className="text-purple-500" size={28} />,
      description: 'Digital design and photo manipulation',
      color: 'purple'
    }
  ];

  const additionalSkills = [
    { name: 'JavaScript', level: 70, color: 'yellow' },
    { name: 'CSS3', level: 80, color: 'blue' },
    { name: 'Responsive Design', level: 85, color: 'green' },
    { name: 'UI/UX', level: 70, color: 'pink' }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm mb-6">
            <Zap className="text-purple-600" size={16} />
            <span className="text-sm font-medium text-gray-700">What I bring to the table</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Here are the core technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Main Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100/50"
            >
              <div className="text-center mb-8">
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {skill.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{skill.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-gray-700">Proficiency</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-purple-600">{skill.level}%</span>
                    <Target size={16} className="text-purple-500" />
                  </div>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                  <div
                    className={`bg-gradient-to-r from-purple-500 to-orange-500 h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-orange-50 rounded-full text-sm font-medium text-gray-700 border border-purple-200/30">
                  <Lightbulb size={14} className="mr-2 text-purple-500" />
                  Active Learning
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Additional Skills</h3>
            <p className="text-gray-600">
              I'm always learning and expanding my skillset. Currently exploring new technologies and frameworks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSkills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <span className="text-sm font-semibold text-purple-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-400 to-orange-400 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              🎯 Always Growing & Learning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
