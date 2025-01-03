import React from 'react';
import { Mail, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

const ContactDetails = () => {
  const socialLinks = [
    { 
      icon: Mail,
      title: 'Email',
      handle: 'hello@skinscribe.com',
      url: 'mailto:hello@skinscribe.com',
      color: 'hover:text-[#3b4b41]',
      bgHover: 'hover:bg-[#3b4b41]/10'
    },
    { 
      icon: Instagram, 
      title: 'Instagram', 
      handle: '@skinscribe',
      url: 'https://instagram.com/skinscribe',
      color: 'hover:text-pink-500',
      bgHover: 'hover:bg-pink-50'
    },
    { 
      icon: Twitter, 
      title: 'Twitter', 
      handle: '@skinscribe',
      url: 'https://twitter.com/skinscribe',
      color: 'hover:text-blue-400',
      bgHover: 'hover:bg-blue-50'
    },
    { 
      icon: Youtube, 
      title: 'YouTube', 
      handle: 'SkinScribe Beauty',
      url: 'https://youtube.com/skinscribe',
      color: 'hover:text-red-500',
      bgHover: 'hover:bg-red-50'
    },
    { 
      icon: Facebook, 
      title: 'Facebook', 
      handle: 'SkinScribe Blog',
      url: 'https://facebook.com/skinscribe',
      color: 'hover:text-blue-600',
      bgHover: 'hover:bg-blue-50'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Connect with us on social media or drop us an email. We'd love to hear from you!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white p-4 rounded-lg shadow-sm border border-gray-100 
                transition-all duration-300 hover:shadow-md ${social.bgHover}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-2 rounded-full mb-3 transition-colors ${social.color}`}>
                  <social.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="font-semibold text-md mb-1">{social.title}</h3>
                <p className="text-gray-500 text-sm">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
