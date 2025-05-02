import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, FileText, Code, Download, ArrowRight, Users, BarChart2, Smartphone, Truck, Package, CircleDollarSign, MapPin, Award } from 'lucide-react';

// Import your field visit images
import fieldVisit1 from '../assets/grameenlink1.jpg';
import fieldVisit2 from '../assets/grameenlink2.jpg';
import fieldVisit3 from '../assets/grameenlink3.jpg';
import societyCert from '../assets/society_cert.png';
import passportPhoto from '../assets/Passport Photo.png';

const Home = () => {
  const [roles] = useState([
    'Full Stack Developer',
    'DevOps Engineer',
    'AI Solutions Developer',
    'Startup Founder',
    'Society President',
    'Sports Enthusiast'
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen pt-20 md:pt-28 pb-12 md:pb-20 px-4 sm:px-6 mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6">
                  TEJAS GULATI
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
                  Building digital <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                    solutions
                  </span> that <br />
                  create impact.
                </h1>
              </div>

              <div className="h-12 md:h-16">
                <div className="flex items-center text-xl md:text-2xl font-medium text-gray-700">
                  <span className="mr-2">I'm a</span>
                  <span className="text-blue-600 font-bold">
                    {currentRole}
                    <span className="inline-block w-1 h-6 md:h-8 ml-1 bg-blue-600 animate-pulse rounded-full"></span>
                  </span>
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                Information Technology student at MAIT specializing in creating robust, 
                scalable web applications with expertise in 
                <span className="font-bold text-blue-600"> Django</span>, 
                <span className="font-bold text-blue-600"> React</span>, and 
                <span className="font-bold text-blue-600"> AI integration</span>.
                Currently serving as <span className="font-bold text-blue-600">President of InfoTech Innovators Society</span> and building <span className="font-bold text-blue-600">GrameenLink</span> - revolutionizing rural supply chains in India.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4 pt-4 md:pt-6">
                <Link to="/contact" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all font-medium text-sm md:text-base shadow-md hover:shadow-lg">
                  <Mail size={16} /> Contact Me
                </Link>
                <Link to="/projects" className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all font-medium text-sm md:text-base shadow-md hover:shadow-lg">
                  <Code size={16} /> View Projects
                </Link>
                <a 
                  href="https://drive.google.com/file/d/10PH7sSPFUe3h-qgNhW-pMggGxmRvGRxb/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all font-medium text-sm md:text-base shadow-md hover:shadow-lg"
                >
                  <Download size={16} /> Resume
                </a>
              </div>

              <div className="flex space-x-4 md:space-x-5 pt-6 md:pt-8">
                {[
                  { href: "https://github.com/TejasGulati", icon: <Github size={18} />, label: "GitHub" },
                  { href: "https://linkedin.com/in/tejas-gulati/", icon: <Linkedin size={18} />, label: "LinkedIn" },
                  { href: "mailto:tejasgulati101@gmail.com", icon: <Mail size={18} />, label: "Email" },
                  { href: "https://drive.google.com/file/d/10PH7sSPFUe3h-qgNhW-pMggGxmRvGRxb/view?usp=sharing", icon: <FileText size={18} />, label: "Resume" }
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 bg-gray-100 hover:bg-blue-100 text-gray-700 rounded-full transition-all shadow-sm hover:shadow-md"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl blur-3xl opacity-80"></div>
              <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-8 border border-gray-200 overflow-hidden">
                {/* Profile Image */}
                <div className="absolute -top-6 -right-6 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
                  <img 
                    src={passportPhoto} 
                    alt="Tejas Gulati" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-md">
                    TG
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">Tejas Gulati</h2>
                    <p className="text-blue-600 font-medium text-sm md:text-base">Full Stack Developer & Founder</p>
                  </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-xs md:text-sm font-bold text-gray-500 uppercase mb-4 md:mb-6 border-b border-gray-200 pb-2 tracking-wider">
                      EXPERTISE
                    </h3>
                    <div className="space-y-3 md:space-y-5">
                      {[
                        { skill: 'Web Development', level: 90 },
                        { skill: 'DevOps', level: 85 },
                        { skill: 'AI Integration', level: 75 },
                        { skill: 'Startup Development', level: 80 },
                        { skill: 'Leadership', level: 88 }
                      ].map((item, index) => (
                        <div key={index} className="space-y-1 md:space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700 text-sm md:text-base">{item.skill}</span>
                            <span className="text-xs text-gray-500">{item.level}%</span>
                          </div>
                          <div className="w-full h-1.5 md:h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" 
                              style={{ width: `${item.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs md:text-sm font-bold text-gray-500 uppercase mb-4 md:mb-6 border-b border-gray-200 pb-2 tracking-wider">
                      TECHNOLOGIES
                    </h3>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {['React', 'Django', 'Node.js', 'Docker', 'TensorFlow', 'Git', 'Python', 'JavaScript', 'Supply Chain', 'Rural Tech', 'Leadership'].map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 md:px-3 md:py-2 bg-gray-50 border border-gray-200 text-gray-700 rounded-lg text-xs md:text-sm font-medium hover:bg-blue-50 hover:border-blue-200 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link 
                      to="/about" 
                      className="flex-1 flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-400 p-3 md:p-4 rounded-lg transition-all group text-white text-sm md:text-base shadow-md hover:shadow-lg"
                    >
                      <span className="font-medium">More About Me</span>
                      <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - InfoTech Innovators Society */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6">
              LEADERSHIP
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              President of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">InfoTech Innovators Society</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Leading technological innovation and student development for 2025-26
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content - Society Details */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <div className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-100 flex items-center justify-center">
                      <Award className="text-blue-600" size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Leadership Initiatives</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Spearheading technical workshops, hackathons, and industry-connected events to foster innovation and practical skill development among IT students.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="text-blue-600" size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Team Management</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Leading a dynamic team of 15+ executive members, delegating responsibilities effectively while maintaining a collaborative environment focused on knowledge sharing.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-100 flex items-center justify-center">
                      <Code className="text-blue-600" size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Innovation Focus</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Creating platforms for students to showcase technical projects, fostering cross-disciplinary collaboration, and organizing mentorship programs with industry professionals.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl md:rounded-2xl shadow-md p-6 md:p-8 border border-gray-200">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Key Leadership Qualities</h4>
                <div className="space-y-2 md:space-y-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-600"></div>
                    <p className="text-gray-600 text-sm md:text-base">Strategic vision and planning</p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-600"></div>
                    <p className="text-gray-600 text-sm md:text-base">Effective communication and delegation</p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-600"></div>
                    <p className="text-gray-600 text-sm md:text-base">Problem-solving and adaptability</p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-600"></div>
                    <p className="text-gray-600 text-sm md:text-base">Passion for technological innovation</p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-600"></div>
                    <p className="text-gray-600 text-sm md:text-base">Inclusive leadership approach</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Certificate */}
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl blur-3xl opacity-80"></div>
              <div className="relative bg-white rounded-xl md:rounded-3xl shadow-xl p-4 md:p-6 border border-gray-200 overflow-hidden">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center">
                  Official Appointment Certificate
                </h3>
                <div className="relative rounded-lg md:rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={societyCert} 
                    alt="InfoTech Innovators Society President Certificate" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                    <p className="text-xs md:text-sm font-medium text-white">
                      Issued on April 26th, 2025 by Department of Information Technology, MAIT
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-6 text-center">
                  <p className="text-gray-500 text-xs md:text-sm italic">
                    "Leadership is the capacity to translate vision into reality."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Section - Ground-Level Impact */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6">
              GRAMEENLINK - MY STARTUP
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Revolutionizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Rural Supply Chains</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Solving inefficiencies through hyperlocal nodes and digital marketplace
            </p>
          </div>

          {/* Problem Section */}
          <div className="mb-16 md:mb-20 bg-white rounded-xl md:rounded-2xl shadow-md p-6 md:p-10 border border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              The Problem We're Solving
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="flex flex-col items-center text-center p-4 md:p-6 bg-gray-50 rounded-lg md:rounded-xl border border-gray-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 md:mb-4">
                  <Truck className="text-blue-600" size={24} />
                </div>
                <h4 className="text-base md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Logistics Bottleneck</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Limited reach & product variety due to inefficient "one-truck" distribution models
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 md:p-6 bg-gray-50 rounded-lg md:rounded-xl border border-gray-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 md:mb-4">
                  <Package className="text-blue-600" size={24} />
                </div>
                <h4 className="text-base md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Market Mismatch</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Retailers can't stock desired products due to distributor limitations
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 md:p-6 bg-gray-50 rounded-lg md:rounded-xl border border-gray-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 md:mb-4">
                  <CircleDollarSign className="text-blue-600" size={24} />
                </div>
                <h4 className="text-base md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Exploitation</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Farmers receive disproportionately low prices from middlemen
                </p>
              </div>
            </div>
          </div>

          {/* Field Visit Showcase */}
          <div className="mb-16 md:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
              <div className="space-y-6 md:space-y-8">
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Ground-Level Research in Jaunti Village
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    Conducted in collaboration with Unnat Bharat Abhiyan and MAIT NSS team, interviewing 12-15 local shopkeepers to understand supply chain challenges.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <Users className="text-blue-600" size={20} />
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">Shop Types</h4>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm">
                      41.7% Kirana/General stores, 16.7% Electronics stores
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <Smartphone className="text-blue-600" size={20} />
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">Digital Usage</h4>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm">
                      100% smartphone usage, 85% use digital tools for ordering
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <Truck className="text-blue-600" size={20} />
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">Logistics</h4>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm">
                      70% experience stock delays weekly/monthly
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 lg:mt-0">
                <div className="relative group overflow-hidden rounded-lg md:rounded-xl shadow-lg h-48 sm:h-56 md:h-64">
                  <img 
                    src={fieldVisit1} 
                    alt="Tejas discussing with shopkeepers" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-3 md:p-4">
                    <span className="text-xs md:text-sm font-medium text-white">Field Research</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg md:rounded-xl shadow-lg h-48 sm:h-56 md:h-64">
                  <img 
                    src={fieldVisit2} 
                    alt="Community meeting in Jaunti village" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-3 md:p-4">
                    <span className="text-xs md:text-sm font-medium text-white">Community Engagement</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg md:rounded-xl shadow-lg h-48 sm:h-56 md:h-64 col-span-2">
                  <img 
                    src={fieldVisit3} 
                    alt="Team working with local partners" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-3 md:p-4">
                    <span className="text-xs md:text-sm font-medium text-white">Local Partnerships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="mb-16 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                Our Innovative Solution
              </h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Combining hyperlocal nodes with digital marketplace technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
              <div className="space-y-4 md:space-y-6">
                <div className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 flex items-center justify-center">
                      <MapPin className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Hyperlocal Nodes</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Local service points managed by trained Micro-entrepreneurs who understand demand, aggregate orders, and streamline logistics
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 flex items-center justify-center">
                      <Smartphone className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Digital Marketplace</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Platform connecting consumers, retailers and distributors with transparent pricing and better demand visibility
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 flex items-center justify-center">
                      <Users className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Community Impact</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Creating 3-5 new jobs per node while improving product availability and farmer incomes
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 h-full border border-gray-200 mt-6 lg:mt-0">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Key Metrics from Pilot</h4>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-1 md:mb-2">
                      <span className="font-medium text-gray-700 text-sm md:text-base">Shopkeepers reporting middlemen costs</span>
                      <span className="font-bold text-blue-600 text-sm md:text-base">60%</span>
                    </div>
                    <div className="w-full h-1.5 md:h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1 md:mb-2">
                      <span className="font-medium text-gray-700 text-sm md:text-base">Experiencing stock delays</span>
                      <span className="font-bold text-blue-600 text-sm md:text-base">70%</span>
                    </div>
                    <div className="w-full h-1.5 md:h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1 md:mb-2">
                      <span className="font-medium text-gray-700 text-sm md:text-base">Open to digital solutions</span>
                      <span className="font-bold text-blue-600 text-sm md:text-base">90%</span>
                    </div>
                    <div className="w-full h-1.5 md:h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1 md:mb-2">
                      <span className="font-medium text-gray-700 text-sm md:text-base">Expect profit increase</span>
                      <span className="font-bold text-blue-600 text-sm md:text-base">10-15%</span>
                    </div>
                    <div className="w-full h-1.5 md:h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="https://grameen-link.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all font-medium text-base md:text-lg shadow-md hover:shadow-lg"
            >
              Learn More About GrameenLink
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;