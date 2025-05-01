// Home.jsx - Redesigned
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, Code, Download, ExternalLink } from 'lucide-react';

const Home = () => {
  const [roles] = useState([
    'Full Stack Developer',
    'Web Developer',
    'DevOps Enthusiast',
    'Problem Solver'
  ]);
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    let charIndex = 0;
    const typingEffect = setInterval(() => {
      if (charIndex <= roles[index].length) {
        setCurrentRole(roles[index].substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);
    return () => clearInterval(typingEffect);
  }, [index, roles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-blue-50/80 dark:from-gray-900/80 dark:to-gray-800/80"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <span className="inline-block px-4 py-1 mb-4 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium rounded-full">
              Hello, I'm
            </span>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Tejas Gulati</span>
            </h1>
            
            <div className="h-12 mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gradient flex items-center justify-center md:justify-start">
                {currentRole}<span className="animate-pulse ml-1">|</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Information Technology student and aspiring Full Stack Web Developer with experience in
              <span className="tech-tag">Django</span>,
              <span className="tech-tag">React</span>, and
              <span className="tech-tag">DevOps</span>.
              Passionate about creating efficient and impactful solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a href="#contact" className="btn btn-primary flex items-center gap-2">
                <Mail size={18} />
                Contact Me
              </a>
              
              <a href="#projects" className="btn btn-outline flex items-center gap-2">
                <Code size={18} />
                View Projects
              </a>
              
              <a href="/resume.pdf" className="btn btn-primary flex items-center gap-2">
                <Download size={18} />
                Resume
              </a>
            </div>
            
            <div className="flex space-x-4 justify-center md:justify-start">
              {[
                { href: "https://github.com/TejasGulati", icon: <Github size={22} />, label: "GitHub" },
                { href: "https://linkedin.com/in/tejas-gulati/", icon: <Linkedin size={22} />, label: "LinkedIn" },
                { href: "mailto:tejasgulati11227@gmail.com", icon: <Mail size={22} />, label: "Email" },
                { href: "/resume.pdf", icon: <FileText size={22} />, label: "Resume" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm hover:shadow-md transition-all"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900 p-3">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <div className="text-8xl md:text-9xl font-bold text-gradient">TG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;