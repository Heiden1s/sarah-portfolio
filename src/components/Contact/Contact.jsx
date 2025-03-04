import React, { useState } from 'react';
import Section from '../common/Section';
import SocialIcon from './SocialIcon';

const IMAGES = {
  instagram: './images/instagram-icon.svg',
  dribbble: './images/dribbble-icon.svg',
  telegram: './images/telegram-icon.svg',
  pinterest: './images/pinterest-icon.svg',
  linkedin: './images/linkedin-icon.svg'
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the email
    // For now, we'll just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/poorlydrawnsarah'
    },
    {
      platform: 'Dribbble',
      url: 'https://dribbble.com/sarahjafari'
    },
    {
      platform: 'Behance',
      url: 'https://www.behance.net/sarahjafari'
    },
    {
      platform: 'Telegram',
      url: 'https://t.me/poorlydrawnsarah'
    },
    {
      platform: 'Pinterest',
      url: 'https://www.pinterest.com/poorlydrawnsarah'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sarah-jafari24/'
    }
  ];

  return (
    <Section isGray={false} id="contact">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4">
          {/* Header with decorative lines */}
          <div className="text-center mb-8">
            <div className="inline-block relative px-12">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
                <div className="w-full h-[2px] bg-main-teal">
                  <div className="absolute left-0 w-6 h-4 bg-main-teal" 
                       style={{ clipPath: 'circle(50% at left)' }} />
                  <div className="absolute right-0 w-6 h-4 bg-main-teal" 
                       style={{ clipPath: 'circle(50% at right)' }} />
                </div>
              </div>
              <span className="text-main-teal text-2xl font-handwriting relative z-10 bg-main-teal px-4">
                contact
              </span>
            </div>
            <h2 className="text-white text-3xl font-handwriting mt-2">
              Contact me!
            </h2>
          </div>

          {/* Contact Card */}
          <div className="bg-card-dark rounded-lg p-6 backdrop-blur-sm">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-white font-handwriting mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-nav-gray/50 border border-main-teal rounded-lg px-4 py-2 text-white 
                             focus:outline-none focus:ring-2 focus:ring-main-teal"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-white font-handwriting mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-nav-gray/50 border border-main-teal rounded-lg px-4 py-2 text-white 
                             focus:outline-none focus:ring-2 focus:ring-main-teal"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-white font-handwriting mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-nav-gray/50 border border-main-teal rounded-lg px-4 py-2 text-white 
                           focus:outline-none focus:ring-2 focus:ring-main-teal resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-main-teal text-white font-handwriting rounded-full
                         hover:bg-teal-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-main-teal/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p className="text-white font-handwriting text-lg flex items-center justify-center md:justify-start">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-main-teal rounded-full mr-4">📞</span>
                  +98993865382
                </p>
                <p className="text-white font-handwriting text-lg flex items-center justify-center md:justify-start">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-main-teal rounded-full mr-4">✉️</span>
                  sarahjafari1382@gmail.com
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center items-center space-x-6 mt-6">
                {socialLinks.map((social, index) => (
                  <SocialIcon key={index} {...social} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact; 