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
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  // Animation for section reveal
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-[#e9e0ca] to-[#e9e0ca]/90 dark:from-[#3a4a38] dark:to-[#3a4a38]/90 py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-2 bg-[#3a4a38]/10 dark:bg-[#e9e0ca]/10 rounded-full text-sm font-semibold tracking-widest text-[#3a4a38] dark:text-[#e9e0ca] uppercase mb-4">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3a4a38] dark:text-[#e9e0ca] mb-6 tracking-tight">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bc8c5f] to-[#a17952] dark:from-[#d4a373] dark:to-[#c99868]">Connect</span>
            </h2>
            <p className="text-lg text-[#3a4a38]/90 dark:text-[#e9e0ca]/90 max-w-2xl mx-auto leading-relaxed">
              Got a project idea or just want to say hello? I'd love to hear from you. 
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left side - Contact info */}
            <div className="lg:col-span-2 reveal">
              <div className="relative h-full">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#bc8c5f]/30 to-[#3a4a38]/30 dark:from-[#d4a373]/30 dark:to-[#3a4a38]/40 rounded-2xl blur-3xl opacity-80"></div>
                <div className="relative bg-[#3a4a38] dark:bg-[#e9e0ca] rounded-3xl shadow-2xl p-8 border border-[#bc8c5f]/20 dark:border-[#d4a373]/20 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#bc8c5f] to-[#a17952] dark:from-[#d4a373] dark:to-[#c99868] flex items-center justify-center text-[#e9e0ca] dark:text-[#3a4a38] font-bold text-2xl shadow-md">
                        TG
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#e9e0ca] dark:text-[#3a4a38]">Tejas Gulati</h2>
                        <p className="text-[#d4a373] dark:text-[#bc8c5f] font-medium">Full Stack Developer</p>
                      </div>
                    </div>

                    <p className="text-[#e9e0ca]/90 dark:text-[#3a4a38]/90 mb-8 leading-relaxed">
                      I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                    </p>

                    <div className="space-y-6 mb-12">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e9e0ca]/10 dark:bg-[#3a4a38]/10">
                          <Mail className="text-[#bc8c5f] dark:text-[#d4a373]" size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-[#e9e0ca]/60 dark:text-[#3a4a38]/60 font-medium">Mail me at</p>
                          <a 
                            href="mailto:tejasgulati11227@gmail.com" 
                            className="font-medium text-[#e9e0ca] dark:text-[#3a4a38] hover:text-[#d4a373] dark:hover:text-[#bc8c5f] transition-colors"
                          >
                            tejasgulati11227@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e9e0ca]/10 dark:bg-[#3a4a38]/10">
                          <Phone className="text-[#bc8c5f] dark:text-[#d4a373]" size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-[#e9e0ca]/60 dark:text-[#3a4a38]/60 font-medium">Call me at</p>
                          <p className="font-medium text-[#e9e0ca] dark:text-[#3a4a38]">+91-9868629191</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e9e0ca]/10 dark:bg-[#3a4a38]/10">
                          <MapPin className="text-[#bc8c5f] dark:text-[#d4a373]" size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-[#e9e0ca]/60 dark:text-[#3a4a38]/60 font-medium">Based in</p>
                          <p className="font-medium text-[#e9e0ca] dark:text-[#3a4a38]">Delhi, India</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#e9e0ca] dark:text-[#3a4a38] uppercase mb-4 border-b border-[#bc8c5f]/40 dark:border-[#d4a373]/40 pb-2 tracking-wider">
                      SOCIAL PROFILES
                    </h3>
                    <div className="flex space-x-4">
                      {[
                        { href: "https://github.com/TejasGulati", icon: <Github size={20} />, label: "GitHub" },
                        { href: "https://linkedin.com/in/tejas-gulati/", icon: <Linkedin size={20} />, label: "LinkedIn" },
                        { href: "mailto:tejasgulati11227@gmail.com", icon: <Mail size={20} />, label: "Email" },
                        { href: "/Tejas-Resume.pdf", icon: <FileText size={20} />, label: "Resume" }
                      ].map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-[#e9e0ca]/10 dark:bg-[#3a4a38]/10 text-[#e9e0ca] dark:text-[#3a4a38] rounded-full hover:bg-[#bc8c5f] dark:hover:bg-[#d4a373] transition-all shadow-sm hover:shadow-md"
                          aria-label={item.label}
                        >
                          {item.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className="lg:col-span-3 reveal">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-bl from-[#bc8c5f]/20 to-[#3a4a38]/20 rounded-2xl blur-3xl opacity-80"></div>
                <div className="relative bg-white dark:bg-[#3a4a38]/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-[#bc8c5f]/20 dark:border-[#d4a373]/20">
                  <h3 className="text-2xl font-bold text-[#3a4a38] dark:text-[#e9e0ca] mb-6">Send Me a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label htmlFor="name" className={`absolute left-3 transition-all ${formFocus === 'name' || formData.name ? '-top-2.5 text-xs bg-white dark:bg-[#3a4a38] px-2 text-[#bc8c5f] dark:text-[#d4a373]' : 'top-3.5 text-[#3a4a38]/50 dark:text-[#e9e0ca]/50'}`}>
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFormFocus('name')}
                          onBlur={() => setFormFocus(null)}
                          className="w-full px-4 py-3.5 rounded-xl bg-transparent border-2 border-[#3a4a38]/20 dark:border-[#e9e0ca]/20 focus:outline-none focus:border-[#bc8c5f] dark:focus:border-[#d4a373] text-[#3a4a38] dark:text-[#e9e0ca] transition-all shadow-sm"
                        />
                      </div>
                      <div className="relative">
                        <label htmlFor="email" className={`absolute left-3 transition-all ${formFocus === 'email' || formData.email ? '-top-2.5 text-xs bg-white dark:bg-[#3a4a38] px-2 text-[#bc8c5f] dark:text-[#d4a373]' : 'top-3.5 text-[#3a4a38]/50 dark:text-[#e9e0ca]/50'}`}>
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFormFocus('email')}
                          onBlur={() => setFormFocus(null)}
                          className="w-full px-4 py-3.5 rounded-xl bg-transparent border-2 border-[#3a4a38]/20 dark:border-[#e9e0ca]/20 focus:outline-none focus:border-[#bc8c5f] dark:focus:border-[#d4a373] text-[#3a4a38] dark:text-[#e9e0ca] transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label htmlFor="subject" className={`absolute left-3 transition-all ${formFocus === 'subject' || formData.subject ? '-top-2.5 text-xs bg-white dark:bg-[#3a4a38] px-2 text-[#bc8c5f] dark:text-[#d4a373]' : 'top-3.5 text-[#3a4a38]/50 dark:text-[#e9e0ca]/50'}`}>
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFormFocus('subject')}
                        onBlur={() => setFormFocus(null)}
                        className="w-full px-4 py-3.5 rounded-xl bg-transparent border-2 border-[#3a4a38]/20 dark:border-[#e9e0ca]/20 focus:outline-none focus:border-[#bc8c5f] dark:focus:border-[#d4a373] text-[#3a4a38] dark:text-[#e9e0ca] transition-all shadow-sm"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="message" className={`absolute left-3 transition-all ${formFocus === 'message' || formData.message ? '-top-2.5 text-xs bg-white dark:bg-[#3a4a38] px-2 text-[#bc8c5f] dark:text-[#d4a373]' : 'top-3.5 text-[#3a4a38]/50 dark:text-[#e9e0ca]/50'}`}>
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFormFocus('message')}
                        onBlur={() => setFormFocus(null)}
                        className="w-full px-4 py-3.5 rounded-xl bg-transparent border-2 border-[#3a4a38]/20 dark:border-[#e9e0ca]/20 focus:outline-none focus:border-[#bc8c5f] dark:focus:border-[#d4a373] text-[#3a4a38] dark:text-[#e9e0ca] transition-all shadow-sm resize-none"
                      ></textarea>
                    </div>

                    <div className="flex justify-center pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2 bg-gradient-to-r from-[#bc8c5f] to-[#a17952] dark:from-[#d4a373] dark:to-[#c99868] text-[#e9e0ca] dark:text-[#3a4a38] px-8 py-4 rounded-xl transition-all font-medium shadow-lg hover:shadow-xl hover:shadow-[#bc8c5f]/30 dark:hover:shadow-[#d4a373]/30 w-full justify-center transform hover:translate-y-1 hover:scale-[1.02]"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <span className="w-5 h-5 mr-2 border-t-2 border-r-2 border-[#e9e0ca] dark:border-[#3a4a38] rounded-full animate-spin"></span>
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
                      <div className="text-center p-4 bg-gradient-to-r from-[#bc8c5f]/20 to-[#3a4a38]/20 dark:from-[#d4a373]/20 dark:to-[#3a4a38]/30 rounded-xl border border-[#bc8c5f]/30 dark:border-[#d4a373]/30 text-[#3a4a38] dark:text-[#e9e0ca] animate-fadeIn shadow-inner">
                        <div className="flex items-center justify-center gap-2">
                          <Mail className="text-[#bc8c5f] dark:text-[#d4a373]" size={18} />
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