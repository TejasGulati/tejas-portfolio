import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thanks! I’ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-gray-900">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-xl w-full text-center"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-4">Let’s Connect</h2>
    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
      Got an idea or just want to say hi? Drop a message below.
    </p>

    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        required
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
      ></textarea>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-3 rounded-md hover:bg-opacity-90 transition"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitMessage && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-green-600 dark:text-green-400 mt-4"
        >
          {submitMessage}
        </motion.p>
      )}
    </form>
  </motion.div>
</section>

  );
};

export default Contact;
