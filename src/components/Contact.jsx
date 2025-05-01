// Contact.jsx
import { useState, useEffect } from 'react';
import { Mail, Send, Phone, MapPin, Github, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formFocus, setFormFocus] = useState(null);

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
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const ContactInfoItem = ({ icon: Icon, label, value, href = null }) => (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100">
        <Icon className="text-blue-600" size={20} />
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
        {href ? (
          <a href={href} className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
            {value}
          </a>
        ) : (
          <p className="font-medium text-gray-700">{value}</p>
        )}
      </div>
    </div>
  );

  const FormInput = ({ name, label, type = 'text', required = true, textarea = false }) => (
    <div className="relative">
      <label 
        htmlFor={name} 
        className={`absolute left-3 transition-all ${formFocus === name || formData[name] ? '-top-2.5 text-xs bg-white px-2 text-blue-600' : 'top-3.5 text-gray-500'}`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows="5"
          required={required}
          value={formData[name]}
          onChange={handleChange}
          onFocus={() => setFormFocus(name)}
          onBlur={() => setFormFocus(null)}
          className="w-full px-4 py-3.5 rounded-xl bg-transparent border-2 border-gray-200 focus:outline-none focus:border-blue-600 text-gray-700 transition-all shadow-sm resize-none"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          required={required}
          value={formData[name]}
          onChange={handleChange}
          onFocus={() => setFormFocus(name)}
          onBlur={() => setFormFocus(null)}
          className="w-full px-4 py-3.5 rounded-xl bg-transparent border-2 border-gray-200 focus:outline-none focus:border-blue-600 text-gray-700 transition-all shadow-sm"
        />
      )}
    </div>
  );

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Connect</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Got a project idea or just want to say hello? I'd love to hear from you. 
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <div className="relative h-full">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-2xl blur-3xl opacity-80"></div>
                <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-200 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-2xl shadow-md">
                        TG
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Tejas Gulati</h2>
                        <p className="text-blue-600 font-medium">Full Stack Developer</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                      I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                    </p>

                    <div className="space-y-6 mb-12">
                      <ContactInfoItem 
                        icon={Mail} 
                        label="Mail me at" 
                        value="tejasgulati11227@gmail.com" 
                        href="mailto:tejasgulati11227@gmail.com" 
                      />
                      <ContactInfoItem icon={Phone} label="Call me at" value="+91-9868629191" />
                      <ContactInfoItem icon={MapPin} label="Based in" value="Delhi, India" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase mb-4 border-b border-gray-200 pb-2 tracking-wider">
                      SOCIAL PROFILES
                    </h3>
                    <div className="flex space-x-4">
                      {[
                        { href: "https://github.com/TejasGulati", icon: Github, label: "GitHub" },
                        { href: "https://linkedin.com/in/tejas-gulati/", icon: Linkedin, label: "LinkedIn" },
                        { href: "mailto:tejasgulati11227@gmail.com", icon: Mail, label: "Email" },
                        { href: "https://drive.google.com/file/d/10PH7sSPFUe3h-qgNhW-pMggGxmRvGRxb/view?usp=sharing", icon: FileText, label: "Resume" }
                      ].map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gray-100 hover:bg-blue-100 text-gray-700 rounded-full transition-all shadow-sm hover:shadow-md"
                          aria-label={item.label}
                        >
                          <item.icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-bl from-blue-100 to-blue-50 rounded-2xl blur-3xl opacity-80"></div>
                <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormInput name="name" label="Your Name" />
                      <FormInput name="email" label="Your Email" type="email" />
                    </div>

                    <FormInput name="subject" label="Subject" />
                    <FormInput name="message" label="Your Message" textarea={true} />

                    <div className="flex justify-center pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl hover:shadow-blue-400/30 w-full justify-center transform hover:translate-y-1 hover:scale-[1.02]"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <span className="w-5 h-5 mr-2 border-t-2 border-r-2 border-white rounded-full animate-spin"></span>
                            Sending<span className="animate-pulse">...</span>
                          </span>
                        ) : (
                          <>
                            <Send size={18} /> Send Message
                          </>
                        )}
                      </button>
                    </div>

                    {submitMessage && (
                      <div className="text-center p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl border border-blue-200 text-gray-700 animate-fadeIn shadow-inner">
                        <div className="flex items-center justify-center gap-2">
                          <Mail className="text-blue-600" size={18} />
                          <span className="font-medium">{submitMessage}</span>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;