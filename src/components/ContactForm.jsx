import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { assets } from '../assets/assets';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Get in Touch
      </h1>
      <p className="text-base md:text-lg text-gray-600 text-center max-w-xl mx-auto mb-12">
        Have questions or want to collaborate? We'd love to hear from you.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Form Section */}
        <div className="md:w-3/5 lg:w-2/3">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="Will Lee"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="skinscribe@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  rows="4"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#3b4b41] text-white px-4 py-2 rounded-md font-medium hover:bg-[#2a2f27] transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-3/5 lg:w-2/3">
          <img
            src={assets.contact}
            alt="Contact Us"
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

