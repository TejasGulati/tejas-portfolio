import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, Phone, MapPin, Github, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    emailjs.init("zw76Z2tCCrnGC7sm2");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    if (submitMessage || submitError) {
      setSubmitMessage('');
      setSubmitError('');
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = `${key[0].toUpperCase() + key.slice(1)} is required`;
    });
    
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const form = e.target;
      await emailjs.sendForm(
        'service_s67ji06',
        'template_bgm9l7p',
        form,
        'zw76Z2tCCrnGC7sm2'
      );

      setSubmitMessage('Thanks! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitMessage(''), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitError('Failed to send your message. Please try again later.');
      setTimeout(() => setSubmitError(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const ContactInfoItem = ({ icon: Icon, label, value, href }) => (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
        <Icon className="text-blue-700" size={20} />
      </div>
      <div>
        <p className="text-sm text-gray-600 font-medium">{label}</p>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-800 hover:text-blue-700">
            {value}
          </a>
        ) : (
          <p className="font-medium text-gray-800">{value}</p>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 md:mb-16">
        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 mt-8">
  GET IN TOUCH
</span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Got a project idea or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Contact Info Card */}
          <div className="lg:col-span-2">
            <div className="relative h-full">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl blur-3xl opacity-70"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-500 text-white flex items-center justify-center rounded-full font-bold text-2xl shadow-md">
                    TG
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Tejas Gulati</h2>
                    <p className="text-blue-700 font-medium">Full Stack Developer</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-8">
                  I'm open to collaborating on exciting ideas, freelancing, or helping build your product.
                </p>

                <div className="space-y-5 mb-8">
                  <ContactInfoItem icon={Mail} label="Email" value="tejasgulati101@gmail.com" href="mailto:tejasgulati101@gmail.com" />
                  <ContactInfoItem icon={Phone} label="Phone" value="+91-9868629191" />
                  <ContactInfoItem icon={MapPin} label="Location" value="Delhi, India" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-600 uppercase mb-4 border-b border-gray-200 pb-2 tracking-wider">
                    SOCIALS
                  </h3>
                  <div className="flex space-x-3">
                    {[
                      { href: "https://github.com/TejasGulati", icon: Github },
                      { href: "https://linkedin.com/in/tejas-gulati/", icon: Linkedin },
                      { href: "mailto:tejasgulati101@gmail.com", icon: Mail },
                      { href: "https://drive.google.com/file/d/1CHSmFEME9H1IG4JfVafxM_y4MmNasv2K/view?usp=sharing", icon: FileText }
                    ].map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full transition-all"
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Me a Message</h3>
              <input type="hidden" name="to_email" value="tejasgulati101@gmail.com" />

              {['name', 'email', 'subject'].map((field) => (
                <div key={field}>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    placeholder={field[0].toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                      errors[field] ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-500'
                    }`}
                  />
                  {errors[field] && <p className="text-sm text-red-500 mt-1">{errors[field]}</p>}
                </div>
              ))}

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                    errors.message ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-500'
                  }`}
                ></textarea>
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 rounded-lg font-medium hover:from-blue-800 hover:to-blue-600 transition disabled:opacity-50 shadow-md hover:shadow-lg"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send size={18} className="inline mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {submitMessage && (
                <p className="text-center text-green-600">{submitMessage}</p>
              )}
              {submitError && (
                <p className="text-center text-red-600">{submitError}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
