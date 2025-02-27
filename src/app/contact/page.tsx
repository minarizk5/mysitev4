'use client';

import PageContainer from '@/components/PageContainer';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create a temporary form to send the email
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://formsubmit.co/minarizk8324@outlook.com'; // Replace with your actual email
      form.style.display = 'none';
      
      // Add form fields
      const nameField = document.createElement('input');
      nameField.type = 'text';
      nameField.name = 'name';
      nameField.value = formData.name;
      
      const emailField = document.createElement('input');
      emailField.type = 'email';
      emailField.name = 'email';
      emailField.value = formData.email;
      
      const messageField = document.createElement('input');
      messageField.type = 'text';
      messageField.name = 'message';
      messageField.value = formData.message;
      
      // Add success redirect URL
      const redirectField = document.createElement('input');
      redirectField.type = 'hidden';
      redirectField.name = '_next';
      redirectField.value = window.location.href;
      
      // Prevent captcha
      const captchaField = document.createElement('input');
      captchaField.type = 'hidden';
      captchaField.name = '_captcha';
      captchaField.value = 'false';
      
      // Append all fields to form
      form.appendChild(nameField);
      form.appendChild(emailField);
      form.appendChild(messageField);
      form.appendChild(redirectField);
      form.appendChild(captchaField);
      
      // Append form to body and submit
      document.body.appendChild(form);
      form.submit();
      
      // Show success message
      setSubmitStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        submitted: true,
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Reset submit status when component unmounts
  useEffect(() => {
    return () => {
      setSubmitStatus({
        submitted: false,
        success: false,
        message: ''
      });
    };
  }, []);

  
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <div className="max-w-xl mx-auto">
        {submitStatus.submitted && (
          <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
            {submitStatus.message}
          </div>
        )}
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg bg-white/10 border ${errors.name ? 'border-red-400' : 'border-white/20'} focus:border-white/40 focus:outline-none`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg bg-white/10 border ${errors.email ? 'border-red-400' : 'border-white/20'} focus:border-white/40 focus:outline-none`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg bg-white/10 border ${errors.message ? 'border-red-400' : 'border-white/20'} focus:border-white/40 focus:outline-none`}
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-4">Other Ways to Connect</h2>
          <div className="flex justify-center gap-8">
            <a href="mailto:minarizk8324@outlook.com" className="social-link">
              <i className="fas fa-envelope text-2xl"></i>
            </a>
            <a href="https://x.com/minarizkoffical" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
