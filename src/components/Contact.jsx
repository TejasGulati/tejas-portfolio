import { useState } from 'react';
import {
  Mail, Send, Phone, MapPin, Github, Linkedin, FileText,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = `${key[0].toUpperCase() + key.slice(1)} is required`;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thanks! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const ContactInfoItem = ({ icon: Icon, label, value, href }) => (
    <div className="flex items-center gap-3 md:gap-4">
      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center">
        <Icon className="text-blue-600" size={18} />
      </div>
      <div>
        <p className="text-xs md:text-sm text-gray-500 font-medium">{label}</p>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-700 hover:text-blue-600 transition-colors text-sm md:text-base">
            {value}
          </a>
        ) : (
          <p className="font-medium text-gray-700 text-sm md:text-base">{value}</p>
        )}
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-16 md:py-24 bg-white mt-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-semibold uppercase mb-4 tracking-wider">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Connect</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Got a project idea or just want to say hello? I'd love to hear from you.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">
            {/* Contact Info Card */}
            <div className="lg:col-span-2">
              <div className="relative h-full">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-2xl blur-3xl opacity-80"></div>
                <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 border border-gray-200 h-full flex flex-col justify-between">
                  {/* Profile Section */}
                  <div>
                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-blue-400 text-white flex items-center justify-center rounded-full font-bold text-xl md:text-2xl shadow-md">
                        TG
                      </div>
                      <div>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900">Tejas Gulati</h2>
                        <p className="text-blue-600 font-medium text-sm md:text-base">Full Stack Developer</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                      I'm open to collaborating on exciting ideas, freelancing, or helping build your product.
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                      <ContactInfoItem icon={Mail} label="Email" value="tejasgulati11227@gmail.com" href="mailto:tejasgulati11227@gmail.com" />
                      <ContactInfoItem icon={Phone} label="Phone" value="+91-9868629191" />
                      <ContactInfoItem icon={MapPin} label="Location" value="Delhi, India" />
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="text-xs md:text-sm font-bold text-gray-500 uppercase mb-3 md:mb-4 border-b border-gray-200 pb-2 tracking-wider">
                      SOCIALS
                    </h3>
                    <div className="flex space-x-3 md:space-x-4">
                      {[
                        { href: "https://github.com/TejasGulati", icon: Github },
                        { href: "https://linkedin.com/in/tejas-gulati/", icon: Linkedin },
                        { href: "mailto:tejasgulati11227@gmail.com", icon: Mail },
                        { href: "https://drive.google.com/file/d/10PH7sSPFUe3h-qgNhW-pMggGxmRvGRxb/view?usp=sharing", icon: FileText }
                      ].map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 md:p-3 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full transition-all"
                        >
                          <item.icon size={18} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">Send Me a Message</h3>

                {/* Form Fields */}
                {['name', 'email', 'subject'].map((field) => (
                  <div key={field}>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      placeholder={field[0].toUpperCase() + field.slice(1)}
                      value={formData[field]}
                      onChange={handleChange}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                        errors[field] ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                    />
                    {errors[field] && <p className="text-xs text-red-500 mt-1">{errors[field]}</p>}
                  </div>
                ))}

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border text-sm resize-none focus:outline-none focus:ring-2 ${
                      errors.message ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-500'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 md:py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-500 transition disabled:opacity-50 shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Success Message */}
                {submitMessage && (
                  <p className="text-sm text-center text-green-600 mt-2">{submitMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;