
import React from 'react';
import { Code, Palette, Smartphone } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      level: 85,
      icon: <Code className="text-orange-500" size={24} />,
      description: 'Semantic markup and modern HTML5 standards'
    },
    {
      name: 'React',
      level: 80,
      icon: <Smartphone className="text-blue-500" size={24} />,
      description: 'Component-based UI development and state management'
    },
    {
      name: 'Photoshop',
      level: 75,
      icon: <Palette className="text-purple-500" size={24} />,
      description: 'Digital design and photo manipulation'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the core technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Proficiency</span>
                  <span className="text-sm font-semibold text-purple-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            I'm always learning and expanding my skillset. Currently exploring new technologies and frameworks.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm">JavaScript</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm">CSS3</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm">Responsive Design</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm">UI/UX</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
