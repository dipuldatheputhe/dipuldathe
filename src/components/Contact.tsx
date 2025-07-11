
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Calendar, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-purple-600" size={24} />,
      title: 'Email',
      value: 'datheputhedipul@gmail.com',
      link: 'mailto:datheputhedipul@gmail.com',
      description: 'Best way to reach me'
    },
    {
      icon: <Phone className="text-orange-500" size={24} />,
      title: 'Phone',
      value: '9803372585',
      link: 'tel:9803372585',
      description: 'Available during business hours'
    },
    {
      icon: <MapPin className="text-blue-500" size={24} />,
      title: 'Location',
      value: 'Nepal',
      link: '#',
      description: 'Remote work available'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-orange-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-orange-50 rounded-full border border-purple-200/50 shadow-sm mb-6">
            <MessageSquare className="text-purple-600" size={16} />
            <span className="text-sm font-medium text-gray-700">Let's connect</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            I'm always open to discussing new opportunities, projects, or just having a friendly chat about tech and football!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 via-white to-orange-50 p-8 rounded-3xl shadow-lg border border-purple-200/30">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-800">Let's Connect</h3>
                  <p className="text-gray-600">Ready to start a conversation</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Feel free to reach out if you have any questions, want to discuss a project, 
                or just want to connect. I'm always eager to learn from others and share experiences.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 hover:scale-105">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-lg">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-purple-600 hover:text-orange-500 transition-colors duration-200 font-semibold text-lg block"
                      >
                        {info.value}
                      </a>
                      <p className="text-gray-500 text-sm">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-50 via-white to-orange-50 p-8 rounded-3xl border border-purple-200/30 shadow-lg">
              <h4 className="font-bold text-gray-800 mb-6 text-xl flex items-center">
                <User className="mr-3 text-purple-600" size={20} />
                Current Status
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-800 font-semibold">Open to opportunities</p>
                    <p className="text-gray-600 text-sm">Actively looking for roles where I can contribute and continue learning</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">⚽</span>
                  <div>
                    <p className="text-gray-800 font-semibold">Football enthusiast</p>
                    <p className="text-gray-600 text-sm">Always up for a chat about the beautiful game!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 p-8 rounded-3xl shadow-xl border border-gray-200/50">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Send className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">Send a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" size={18} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm hover:border-purple-300"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Your Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" size={18} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm hover:border-purple-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" size={18} />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-vertical bg-white/80 backdrop-blur-sm hover:border-purple-300"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-lg flex items-center justify-center gap-3 hover:scale-105"
              >
                <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
