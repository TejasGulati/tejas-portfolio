import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, Code, Download } from 'lucide-react';

const Home = () => {
  const [roles] = useState([
    'Full Stack Developer',
    'Web Developer',
    'DevOps Enthusiast',
    'Problem Solver'
  ]);
  const [currentRole, setCurrentRole] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const typeWriter = () => {
      const currentText = roles[currentRoleIndex];
      const shouldDelete = isDeleting;

      setCurrentRole(prev => 
        shouldDelete 
          ? currentText.substring(0, prev.length - 1) 
          : currentText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && currentRole === currentText) {
        // Delay before starting to delete
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentRole === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRole, currentRoleIndex, isDeleting, roles, typingSpeed]);

  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block px-4 py-1 mb-4 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium rounded-full">
              Hello, I'm
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Tejas Gulati
              </span>
            </h1>

            <div className="h-12 mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold flex items-center justify-center md:justify-start bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {currentRole}
                <span className="ml-1 animate-pulse">|</span>
              </h2>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Information Technology student and aspiring Full Stack Web Developer with experience in{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">Django</span>,{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>, and{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">DevOps</span>. Passionate about creating efficient and impactful solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a href="/contact" className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                <Mail size={18} /> Contact Me
              </a>
              <a href="/projects" className="flex items-center gap-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-5 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition">
                <Code size={18} /> View Projects
              </a>
              <a 
                href="/resume.pdf" 
                download
                className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                <Download size={18} /> Resume
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
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 blur-xl"></div>
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900 p-3 flex items-center justify-center">
                  <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    TG
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