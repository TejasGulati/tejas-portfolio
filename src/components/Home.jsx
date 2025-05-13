import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Code, 
  Download, 
  ArrowRight, 
  Users, 
  BarChart2, 
  Smartphone, 
  Truck, 
  Package, 
  CircleDollarSign, 
  MapPin, 
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

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
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const typeWriter = () => {
      const currentText = roles[currentRoleIndex];
      const shouldDelete = isDeleting;

      setCurrentRole(prev => 
        shouldDelete 
          ? currentText.substring(0, prev.length - 1) 
          : currentText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

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
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8 md:space-y-10">
              <div>
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
                  TEJAS GULATI
                </span>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
                  Building digital <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                    solutions
                  </span> that <br />
                  create impact.
                </h1>
              </div>

              <div className="h-16 md:h-20">
                <div className="flex items-center text-2xl md:text-3xl font-medium text-gray-800">
                  <span className="mr-3">I'm a</span>
                  <span className="text-blue-700 font-bold">
                    {currentRole}
                    <span className="inline-block w-1 h-8 md:h-10 ml-1.5 bg-blue-700 rounded-full"></span>
                  </span>
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                Information Technology student at MAIT specializing in creating robust, 
                scalable web applications with expertise in 
                <span className="font-bold text-blue-700"> Django</span>, 
                <span className="font-bold text-blue-700"> React</span>, and 
                <span className="font-bold text-blue-700"> AI integration</span>.
                Currently serving as <span className="font-bold text-blue-700">President of InfoTech Innovators Society</span> and building <span className="font-bold text-blue-700">GrameenLink</span> - revolutionizing rural supply chains in India.
              </p>

              <div className="flex flex-wrap gap-4 md:gap-5 pt-6">
                <Link 
                  to="/contact" 
                  className="flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all font-medium text-base shadow-lg hover:shadow-xl"
                >
                  <Mail size={18} /> Contact Me
                </Link>
                <Link 
                  to="/projects" 
                  className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all font-medium text-base shadow-lg hover:shadow-xl"
                >
                  <Code size={18} /> View Projects
                </Link>
                <a 
                  href="https://drive.google.com/file/d/1CHSmFEME9H1IG4JfVafxM_y4MmNasv2K/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all font-medium text-base shadow-lg hover:shadow-xl"
                >
                  <Download size={18} /> Resume
                </a>
              </div>

              <div className="flex space-x-5 md:space-x-6 pt-8">
                {[
                  { href: "https://github.com/TejasGulati", icon: <Github size={20} />, label: "GitHub" },
                  { href: "https://linkedin.com/in/tejas-gulati/", icon: <Linkedin size={20} />, label: "LinkedIn" },
                  { href: "mailto:tejasgulati101@gmail.com", icon: <Mail size={20} />, label: "Email" },
                  { href: "https://drive.google.com/file/d/1CHSmFEME9H1IG4JfVafxM_y4MmNasv2K/view?usp=sharing", icon: <FileText size={20} />, label: "Resume" }
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 hover:bg-blue-100 text-gray-800 rounded-full transition-all shadow-sm hover:shadow-md"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content - Profile Card */}
            <div className="relative mt-10 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl blur-3xl opacity-70"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-200 overflow-hidden">
                {/* Profile Image */}
                <div className="absolute -top-8 -right-8 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-[5px] border-white shadow-2xl z-10">
                  <img 
                    src={passportPhoto} 
                    alt="Tejas Gulati" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-center gap-4 md:gap-5 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    TG
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">Tejas Gulati</h2>
                    <p className="text-blue-700 font-medium">Full Stack Developer & Founder</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase mb-6 border-b border-gray-200 pb-3 tracking-wider">
                      EXPERTISE
                    </h3>
                    <div className="space-y-5">
                      {[
                        { skill: 'Web Development', level: 90 },
                        { skill: 'DevOps', level: 85 },
                        { skill: 'AI Integration', level: 75 },
                        { skill: 'Startup Development', level: 80 },
                        { skill: 'Leadership', level: 88 }
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-800">{item.skill}</span>
                            <span className="text-sm text-gray-500">{item.level}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-700 to-blue-500 rounded-full" 
                              style={{ width: `${item.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase mb-6 border-b border-gray-200 pb-3 tracking-wider">
                      TECHNOLOGIES
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {['React', 'Django', 'Node.js', 'Docker', 'TensorFlow', 'Git', 'Python', 'JavaScript', 'Supply Chain', 'Rural Tech', 'Leadership'].map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg text-sm font-medium hover:bg-blue-50 hover:border-blue-200 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <Link 
                      to="/about" 
                      className="flex-1 flex items-center justify-between bg-gradient-to-r from-blue-700 to-blue-500 p-4 rounded-lg transition-all group text-white font-medium shadow-md hover:shadow-lg"
                    >
                      <span>More About Me</span>
                      <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-700 text-white rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
              LEADERSHIP
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              President of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">InfoTech Innovators Society</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Leading technological innovation and student development for 2025-26
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                      <Award className="text-blue-700" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Leadership Initiatives</h4>
                    <p className="text-gray-700">
                      Spearheading technical workshops, hackathons, and industry-connected events to foster innovation and practical skill development among IT students.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="text-blue-700" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Team Management</h4>
                    <p className="text-gray-700">
                      Leading a dynamic team of 15+ executive members, delegating responsibilities effectively while maintaining a collaborative environment focused on knowledge sharing.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                      <Code className="text-blue-700" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Innovation Focus</h4>
                    <p className="text-gray-700">
                      Creating platforms for students to showcase technical projects, fostering cross-disciplinary collaboration, and organizing mentorship programs with industry professionals.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h4 className="text-xl font-bold mb-4">Key Leadership Qualities</h4>
                <div className="space-y-4">
                  {[
                    'Strategic vision and planning',
                    'Effective communication and delegation',
                    'Problem-solving and adaptability',
                    'Passion for technological innovation',
                    'Inclusive leadership approach'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-700"></div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Content - Certificate */}
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl blur-3xl opacity-70"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 overflow-hidden">
                <h3 className="text-xl font-bold mb-4 text-center">
                  Official Appointment Certificate
                </h3>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={societyCert} 
                    alt="InfoTech Innovators Society President Certificate" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-sm font-medium text-white">
                      Issued on April 26th, 2025 by Department of Information Technology, MAIT
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-500 text-sm italic">
                    "Leadership is the capacity to translate vision into reality."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-700 text-white rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
              GRAMEENLINK - MY STARTUP
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Rural Supply Chains</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Solving inefficiencies through hyperlocal nodes and digital marketplace
            </p>
          </div>

          {/* Problem Section */}
          <div className="mb-20 bg-white rounded-2xl shadow-lg p-10 border border-gray-200">
            <h3 className="text-2xl font-bold mb-8 text-center">
              The Problem We're Solving
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Truck className="text-blue-700" size={28} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Logistics Bottleneck</h4>
                <p className="text-gray-700">
                  Limited reach & product variety due to inefficient "one-truck" distribution models
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Package className="text-blue-700" size={28} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Market Mismatch</h4>
                <p className="text-gray-700">
                  Retailers can't stock desired products due to distributor limitations
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <CircleDollarSign className="text-blue-700" size={28} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Exploitation</h4>
                <p className="text-gray-700">
                  Farmers receive disproportionately low prices from middlemen
                </p>
              </div>
            </div>
          </div>

          {/* Field Visit Showcase */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">
                    Ground-Level Research in Jaunti Village
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Conducted in collaboration with Unnat Bharat Abhiyan and MAIT NSS team, interviewing 12-15 local shopkeepers to understand supply chain challenges.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="text-blue-700" size={22} />
                      <h4 className="font-semibold">Shop Types</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      41.7% Kirana/General stores, 16.7% Electronics stores
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Smartphone className="text-blue-700" size={22} />
                      <h4 className="font-semibold">Digital Usage</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      100% smartphone usage, 85% use digital tools for ordering
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Truck className="text-blue-700" size={22} />
                      <h4 className="font-semibold">Logistics</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      70% experience stock delays weekly/monthly
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-10 lg:mt-0">
                <div className="relative group overflow-hidden rounded-xl shadow-lg h-64">
                  <img 
                    src={fieldVisit1} 
                    alt="Tejas discussing with shopkeepers" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-4">
                    <span className="text-sm font-medium text-white">Field Research</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-xl shadow-lg h-64">
                  <img 
                    src={fieldVisit2} 
                    alt="Community meeting in Jaunti village" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-4">
                    <span className="text-sm font-medium text-white">Community Engagement</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-xl shadow-lg h-64 col-span-2">
                  <img 
                    src={fieldVisit3} 
                    alt="Team working with local partners" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-4">
                    <span className="text-sm font-medium text-white">Local Partnerships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                Our Innovative Solution
              </h3>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Combining hyperlocal nodes with digital marketplace technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Hyperlocal Nodes</h4>
                    <p className="text-gray-700">
                      Local service points managed by trained Micro-entrepreneurs who understand demand, aggregate orders, and streamline logistics
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center">
                      <Smartphone className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Digital Marketplace</h4>
                    <p className="text-gray-700">
                      Platform connecting consumers, retailers and distributors with transparent pricing and better demand visibility
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center">
                      <Users className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Community Impact</h4>
                    <p className="text-gray-700">
                      Creating 3-5 new jobs per node while improving product availability and farmer incomes
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full border border-gray-200 mt-10 lg:mt-0">
                <h4 className="text-xl font-bold mb-6">Key Metrics from Pilot</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Shopkeepers reporting middlemen costs</span>
                      <span className="font-bold text-blue-700">60%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-700 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Experiencing stock delays</span>
                      <span className="font-bold text-blue-700">70%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-700 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Open to digital solutions</span>
                      <span className="font-bold text-blue-700">90%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-700 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Expect profit increase</span>
                      <span className="font-bold text-blue-700">10-15%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-700 to-blue-500 rounded-full" style={{ width: '100%' }}></div>
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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-4 rounded-lg transition-all font-medium text-lg shadow-lg hover:shadow-xl"
            >
              Learn More About GrameenLink
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;