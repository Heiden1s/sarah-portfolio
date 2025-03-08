import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'Portfolio Contact Form' // Adding a default subject
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

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
    
    try {
      // Use Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '36c1ca58-cfb8-4dfa-af1b-70b56f033098',
          ...formData,
          from_name: formData.name,
          subject: `New message from ${formData.name} - Portfolio Contact Form`,
          botcheck: false, // Required for the spam filter
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Reset form and show success message
        setFormData({ name: '', email: '', message: '', subject: 'Portfolio Contact Form' });
        setSubmitStatus('success');
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === 'success' && (
        <div className="p-3 bg-green-500/20 border border-green-500 rounded-lg text-white">
          Your message has been sent successfully!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-3 bg-red-500/20 border border-red-500 rounded-lg text-white">
          Failed to send your message. Please try again.
        </div>
      )}
      
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

      {/* Hidden fields for Web3Forms */}
      <input type="hidden" name="access_key" value="36c1ca58-cfb8-4dfa-af1b-70b56f033098" />
      <input type="hidden" name="subject" value={`New message from ${formData.name} - Portfolio Contact Form`} />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

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
  );
};

export default ContactForm; 