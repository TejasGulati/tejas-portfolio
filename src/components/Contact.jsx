// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Store in localStorage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        date: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm available for freelance work and full-time opportunities. Connect with me via email or phone.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-primary mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:tejasgulati11227@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                    tejasgulati11227@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-primary mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+919868629191" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                    +91-9868629191
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-primary mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-3">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/TejasGulati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/tejas-gulati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full flex justify-center items-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>

              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 dark:text-green-400"
                >
                  {submitMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;