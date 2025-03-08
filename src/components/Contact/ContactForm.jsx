import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
    
    // Create a FormData object from the form element
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Reset form
        form.reset();
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus('success');
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      action="https://api.web3forms.com/submit"
      method="POST"
      onSubmit={handleSubmit} 
      className="space-y-6"
    >
      {/* Web3Forms Required Hidden Fields */}
      <input type="hidden" name="access_key" value="36c1ca58-cfb8-4dfa-af1b-70b56f033098" />
      <input type="hidden" name="subject" value="New Contact Form Submission - Sarah Jafari Portfolio" />
      <input type="hidden" name="from_name" value="Sarah Jafari Portfolio" />
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
      {/* Redirect URL after submission */}
      <input type="hidden" name="redirect" value="https://web3forms.com/success" />
      
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
          <label htmlFor="name" className="block text-white mb-2">
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
          <label htmlFor="email" className="block text-white mb-2">
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
        <label htmlFor="message" className="block text-white mb-2">
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
        className="w-full md:w-auto px-8 py-3 bg-main-teal text-white rounded-full
                 hover:bg-teal-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm; 