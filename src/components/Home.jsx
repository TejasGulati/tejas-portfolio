import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, Code, Download, ArrowRight } from 'lucide-react';

const Home = () => {
  const [roles] = useState([
    'Full Stack Developer',
    'Web Developer',
    'DevOps Engineer',
    'AI Solutions Developer'
  ]);
  const [currentRole, setCurrentRole] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const typeWriter = () => {
      const currentText = roles[currentRoleIndex];
      const shouldDelete = isDeleting;

      setCurrentRole(prev => 
        shouldDelete 
          ? currentText.substring(0, prev.length - 1) 
          : currentText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 80);

      if (!isDeleting && currentRole === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentRole === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRole, currentRoleIndex, isDeleting, roles, typingSpeed]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#e9e0ca] to-[#e9e0ca]/90 dark:from-[#3a4a38] dark:to-[#3a4a38]/90 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div>
              <span className="inline-block px-4 py-2 bg-[#3a4a38]/10 dark:bg-[#e9e0ca]/10 rounded-full text-sm font-semibold tracking-widest text-[#3a4a38] dark:text-[#e9e0ca] uppercase mb-4">
                TEJAS GULATI
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#3a4a38] dark:text-[#e9e0ca] leading-tight">
                Building digital <br />
                <span className="text-[#bc8c5f] dark:text-[#d4a373] bg-clip-text bg-gradient-to-r from-[#bc8c5f] to-[#a17952] dark:from-[#d4a373] dark:to-[#c99868]">
                  solutions
                </span> that <br />
                create impact.
              </h1>
            </div>

            <div className="h-14">
              <div className="flex items-center text-2xl font-medium text-[#3a4a38] dark:text-[#e9e0ca]">
                <span className="mr-2">I'm a</span>
                <span className="text-[#bc8c5f] dark:text-[#d4a373] font-bold">
                  {currentRole}
                  <span className="inline-block w-1 h-8 ml-1 bg-[#bc8c5f] dark:bg-[#d4a373] animate-pulse rounded-full"></span>
                </span>
              </div>
            </div>

            <p className="text-lg text-[#3a4a38]/90 dark:text-[#e9e0ca]/90 leading-relaxed max-w-xl">
              Information Technology student at MAIT specializing in creating robust, 
              scalable web applications with expertise in 
              <span className="font-bold text-[#bc8c5f] dark:text-[#d4a373]"> Django</span>, 
              <span className="font-bold text-[#bc8c5f] dark:text-[#d4a373]"> React</span>, and 
              <span className="font-bold text-[#bc8c5f] dark:text-[#d4a373]"> AI integration</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href="/contact" className="flex items-center gap-2 bg-[#bc8c5f] hover:bg-[#a17952] text-[#e9e0ca] px-6 py-3 rounded-lg transition-all font-medium shadow-lg hover:shadow-[#bc8c5f]/30 dark:hover:shadow-[#d4a373]/30">
                <Mail size={18} /> Contact Me
              </a>
              <a href="/projects" className="flex items-center gap-2 bg-[#3a4a38] hover:bg-[#2a382a] text-[#e9e0ca] px-6 py-3 rounded-lg transition-all font-medium shadow-lg hover:shadow-[#3a4a38]/30 dark:hover:shadow-[#3a4a38]/30">
                <Code size={18} /> View Projects
              </a>
              <a 
                href="/Tejas-Resume.pdf" 
                download
                className="flex items-center gap-2 bg-[#d4a373] hover:bg-[#c99868] text-[#3a4a38] px-6 py-3 rounded-lg transition-all font-medium shadow-lg hover:shadow-[#d4a373]/30 dark:hover:shadow-[#d4a373]/30"
              >
                <Download size={18} /> Resume
              </a>
            </div>

            <div className="flex space-x-5 pt-8">
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
                  className="p-3 bg-[#3a4a38]/10 dark:bg-[#e9e0ca]/10 text-[#3a4a38] dark:text-[#e9e0ca] rounded-full hover:bg-[#bc8c5f] dark:hover:bg-[#d4a373] transition-all shadow-sm hover:shadow-md"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#bc8c5f]/20 to-[#3a4a38]/20 rounded-2xl blur-3xl opacity-80"></div>
            <div className="relative bg-[#3a4a38] dark:bg-[#e9e0ca] rounded-3xl shadow-2xl p-8 border border-[#bc8c5f]/20 dark:border-[#d4a373]/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#bc8c5f] to-[#a17952] dark:from-[#d4a373] dark:to-[#c99868] flex items-center justify-center text-[#e9e0ca] dark:text-[#3a4a38] font-bold text-2xl shadow-md">
                  TG
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#e9e0ca] dark:text-[#3a4a38]">Tejas Gulati</h2>
                  <p className="text-[#d4a373] dark:text-[#bc8c5f] font-medium">Full Stack Developer</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-[#e9e0ca] dark:text-[#3a4a38] uppercase mb-6 border-b border-[#bc8c5f]/40 dark:border-[#d4a373]/40 pb-2 tracking-wider">
                    EXPERTISE
                  </h3>
                  <div className="space-y-5">
                    {[
                      { skill: 'Web Development', level: 90 },
                      { skill: 'DevOps', level: 85 },
                      { skill: 'AI Integration', level: 75 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-[#e9e0ca] dark:text-[#3a4a38]">{item.skill}</span>
                          <span className="text-xs text-[#e9e0ca]/70 dark:text-[#3a4a38]/70">{item.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-[#e9e0ca]/20 dark:bg-[#3a4a38]/20 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#bc8c5f] to-[#a17952] dark:from-[#d4a373] dark:to-[#c99868] rounded-full" 
                            style={{ width: `${item.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#e9e0ca] dark:text-[#3a4a38] uppercase mb-6 border-b border-[#bc8c5f]/40 dark:border-[#d4a373]/40 pb-2 tracking-wider">
                    TECHNOLOGIES
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'Django', 'Node.js', 'Docker', 'TensorFlow', 'Git', 'Python', 'JavaScript'].map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-2 bg-[#e9e0ca]/10 dark:bg-[#3a4a38]/10 border border-[#bc8c5f]/30 dark:border-[#d4a373]/30 text-[#e9e0ca] dark:text-[#3a4a38] rounded-lg text-sm font-medium hover:bg-[#bc8c5f]/20 dark:hover:bg-[#d4a373]/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href="/about" 
                  className="mt-6 flex items-center justify-between bg-gradient-to-r from-[#bc8c5f] to-[#a17952] dark:from-[#d4a373] dark:to-[#c99868] p-4 rounded-lg transition-all group text-[#e9e0ca] dark:text-[#3a4a38] shadow-lg hover:shadow-xl hover:shadow-[#bc8c5f]/30 dark:hover:shadow-[#d4a373]/30"
                >
                  <span className="font-medium">More About Me</span>
                  <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;