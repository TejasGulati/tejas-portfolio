import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

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
      setSubmitMessage('Thanks! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-[#e9e0ca] to-[#e9e0ca]/90 dark:from-[#3a4a38] dark:to-[#3a4a38]/90 py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#3a4a38]/10 dark:bg-[#e9e0ca]/10 rounded-full text-sm font-semibold tracking-widest text-[#3a4a38] dark:text-[#e9e0ca] uppercase mb-4">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#3a4a38] dark:text-[#e9e0ca] mb-6">
              Let's <span className="text-[#bc8c5f] dark:text-[#d4a373]">Connect</span>
            </h2>
            <p className="text-lg text-[#3a4a38]/90 dark:text-[#e9e0ca]/90 max-w-2xl mx-auto">
              Got a project idea or just want to say hello? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#bc8c5f]/20 to-[#3a4a38]/20 rounded-2xl blur-3xl opacity-80"></div>
            <div className="relative bg-white dark:bg-[#3a4a38] rounded-3xl shadow-2xl p-8 border border-[#bc8c5f]/20 dark:border-[#d4a373]/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#3a4a38] dark:text-[#e9e0ca] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#e9e0ca]/30 dark:bg-[#e9e0ca]/10 border border-[#bc8c5f]/30 dark:border-[#d4a373]/30 focus:outline-none focus:ring-2 focus:ring-[#bc8c5f] dark:focus:ring-[#d4a373] text-[#3a4a38] dark:text-[#e9e0ca] placeholder-[#3a4a38]/50 dark:placeholder-[#e9e0ca]/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#3a4a38] dark:text-[#e9e0ca] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#e9e0ca]/30 dark:bg-[#e9e0ca]/10 border border-[#bc8c5f]/30 dark:border-[#d4a373]/30 focus:outline-none focus:ring-2 focus:ring-[#bc8c5f] dark:focus:ring-[#d4a373] text-[#3a4a38] dark:text-[#e9e0ca] placeholder-[#3a4a38]/50 dark:placeholder-[#e9e0ca]/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#3a4a38] dark:text-[#e9e0ca] mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#e9e0ca]/30 dark:bg-[#e9e0ca]/10 border border-[#bc8c5f]/30 dark:border-[#d4a373]/30 focus:outline-none focus:ring-2 focus:ring-[#bc8c5f] dark:focus:ring-[#d4a373] text-[#3a4a38] dark:text-[#e9e0ca] placeholder-[#3a4a38]/50 dark:placeholder-[#e9e0ca]/50"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 bg-[#bc8c5f] hover:bg-[#a17952] text-[#e9e0ca] px-8 py-3 rounded-lg transition-all font-medium shadow-lg hover:shadow-[#bc8c5f]/30 dark:hover:shadow-[#d4a373]/30"
                  >
                    {isSubmitting ? (
                      <>Sending<span className="animate-pulse">...</span></>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>
                </div>

                {submitMessage && (
                  <div className="text-center mt-4 p-3 bg-[#3a4a38]/10 dark:bg-[#e9e0ca]/10 rounded-lg text-[#3a4a38] dark:text-[#e9e0ca]">
                    <Mail className="inline-block mr-2" size={18} />
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-[#3a4a38] dark:text-[#e9e0ca] text-lg">
              Or reach me directly at{' '}
              <a 
                href="mailto:tejasgulati11227@gmail.com" 
                className="font-medium text-[#bc8c5f] dark:text-[#d4a373] hover:underline"
              >
                tejasgulati11227@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;