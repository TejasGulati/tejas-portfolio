import { useState } from 'react';
import { Code, Server, Database, Bot, Cpu, GitBranch, Award, Trophy, ChevronRight, Download } from 'lucide-react';
import codeGenCert from '../assets/code_gen.png';
import udemyCert from '../assets/udemy_cert.png';
import skillDuniaCert from '../assets/skill_dunia.png';
import evolveCert from '../assets/evovle_cert.png';
import buildWarCert from '../assets/build_war.png';
import tvaCert from '../assets/tva_Cert.png';
import financeCert from '../assets/finance_cert.png';
import volleyCert from '../assets/volley_cert.jpeg';

const About = () => {
  const skills = [
    { 
      category: 'Languages',
      items: ['Python', 'JavaScript', 'SQL'],
      icon: Code,
      color: 'bg-blue-100'
    },
    { 
      category: 'Frameworks',
      items: ['Django', 'Django REST', 'React', 'Celery', 'Redis'],
      icon: Server,
      color: 'bg-blue-100'
    },
    { 
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL'],
      icon: Database,
      color: 'bg-blue-100'
    },
    { 
      category: 'AI/ML',
      items: ['TensorFlow', 'Scikit-Learn', 'Data Preprocessing'],
      icon: Bot,
      color: 'bg-blue-100'
    },
    { 
      category: 'Tools',
      items: ['Docker', 'Git', 'GitHub Actions', 'Postman'],
      icon: Cpu,
      color: 'bg-blue-100'
    },
    { 
      category: 'Version Control',
      items: ['Git', 'GitHub'],
      icon: GitBranch,
      color: 'bg-blue-100'
    }
  ];

  const achievements = [
    { 
      title: "1st Position in Volleyball", 
      description: "Secured 1st position in volleyball at UNPLUGGED 2K25 organized by CSE-AIML department at MAIT", 
      icon: Trophy,
      date: "2025"
    },
    { 
      title: "3rd Place at Evolve-X Competition", 
      description: "Won 3rd place for GrameenLink, a rural supply chain innovation at MAIT's Zenith E-Summit", 
      icon: Trophy,
      date: "2025"
    },
    { 
      title: "Top 15 in Code Genesis", 
      description: "Selected among top 15 teams out of 250 in Uncharted by CSI-IW for MetaCorp project", 
      icon: Award,
      date: "2025"
    }
  ];

  const certificates = [
    {
      title: "1st Position in Volleyball",
      issuer: "CSE-AIML Department, MAIT",
      date: "2025",
      description: "Awarded for securing 1st position in volleyball at UNPLUGGED 2K25 event.",
      image: volleyCert
    },
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      instructor: "Dr. Angela Yu",
      date: "07/02/2024",
      description: "61.5 hours of comprehensive full-stack development training covering front-end and back-end technologies.",
      image: udemyCert
    },
    {
      title: "Career Guidance Webinar",
      issuer: "Skill Dunia Edutech & E-Cell IIT Hyderabad",
      date: "2023",
      description: "Interactive session on career opportunities and professional development strategies.",
      image: skillDuniaCert
    },
    {
      title: "Code Genesis Finalist",
      issuer: "CSI-IW Uncharted",
      date: "21/02/2025",
      description: "Top 15 team with MetaCorp project in AI/ML competition finale at Microsoft Gurgaon.",
      image: codeGenCert
    },
    {
      title: "Evolve-X 3rd Place Winner",
      issuer: "MAIT Zenith E-Summit",
      date: "28/03/2025",
      description: "Awarded for GrameenLink rural supply chain innovation solution.",
      image: evolveCert
    },
    {
      title: "Build Wars Competition",
      issuer: "MAIT E-Summit",
      date: "27/03/2025",
      description: "Competed against 100+ teams in intense tech challenge.",
      image: buildWarCert
    },
    {
      title: "National Financial Literacy Quiz 2025",
      issuer: "National Institute of Securities Markets (NISM) & SEBI",
      date: "2025",
      description: "Participation certificate awarded by SEBI's capacity building institute for financial literacy competition.",
      image: financeCert
    },
    {
      title: "Apocalypse 2.0 Participant",
      issuer: "Tech Vision Alliance at MAIT",
      date: "10/02/2025",
      description: "IEEE and AICTE recognized technical event participation certificate.",
      image: tvaCert
    }
  ];

  const Card = ({ children, className = '' }) => (
    <div className="relative group">
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl blur-3xl opacity-70"></div>
      <div className={`relative bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 ${className}`}>
        {children}
      </div>
    </div>
  );

  const ListItem = ({ children }) => (
    <li className="flex items-start">
      <ChevronRight className="text-blue-700 mr-2 mt-1" size={16} />
      <span className="text-gray-700">{children}</span>
    </li>
  );

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 mt-8">
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">I Am</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            I'm an Information Technology student at Maharaja Agrasen Institute of Technology passionate about building scalable web applications and AI-powered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          <Card>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Education</h3>
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Code className="text-blue-700" size={20} />
                </div>
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-900">B.Tech in Information Technology</h4>
              <p className="text-gray-700">Maharaja Agrasen Institute Of Technology</p>
              <p className="text-gray-600 text-sm">Nov 2022 – Aug 2026</p>
              <p className="mt-2 text-gray-800"><span className="font-medium">CGPA:</span> 9.195/10 (IPU Rank List)</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-blue-700">Relevant Coursework:</h4>
              <ul className="space-y-2">
                {['Data Structures', 'Algorithms', 'Web Development', 'Machine Learning', 'Cloud Computing', 'Full Stack Development'].map((course, idx) => (
                  <ListItem key={idx}>{course}</ListItem>
                ))}
              </ul>
            </div>
          </Card>

          <Card>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Personal Info</h3>
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Code className="text-blue-700" size={20} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Name:", value: "Tejas Gulati" },
                { label: "Location:", value: "Delhi, India" },
                { 
                  label: "Email:", 
                  value: "tejasgulati101@gmail.com",
                  link: true 
                },
                { label: "Phone:", value: "+91-9868629191" },
                { 
                  label: "LinkedIn:", 
                  value: "linkedin.com/in/tejas-gulati/",
                  link: true 
                },
                { 
                  label: "GitHub:", 
                  value: "github.com/TejasGulati",
                  link: true 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <ChevronRight className="text-blue-700 mr-2 mt-1" size={16} />
                  <div>
                    <span className="font-medium text-gray-700">{item.label}</span>
                    {item.link ? (
                      <a 
                        href={item.label === "Email:" ? `mailto:${item.value}` : `https://${item.value}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-700 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="ml-2 text-gray-700">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Skills Section */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Skills</span>
          </h3>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, idx) => (
                <Card key={idx}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900">{skill.category}</h4>
                    <div className={`p-3 ${skill.color} rounded-xl`}>
                      <skill.icon className="text-blue-700" size={20} />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Skill Meter Section */}
          <div className="max-w-5xl mx-auto mt-12 md:mt-16">
            <h4 className="text-xl font-bold text-center mb-8 text-gray-900">Proficiency Level</h4>
            
            <div className="space-y-4">
              {[
                { name: "Frontend Development", percentage: 90 },
                { name: "Backend Development", percentage: 85 },
                { name: "Database Management", percentage: 80 },
                { name: "Machine Learning", percentage: 75 },
                { name: "DevOps", percentage: 70 }
              ].map((skill, idx) => (
                <div key={idx} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-600">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-700 to-blue-500 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Achievements</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, idx) => (
              <Card key={idx}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900">{achievement.title}</h4>
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <achievement.icon className="text-blue-700" size={20} />
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{achievement.description}</p>
                <p className="text-sm text-gray-500">{achievement.date}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Courses</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certificates.map((cert, idx) => (
              <Card key={idx}>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900">{cert.title}</h4>
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Award className="text-blue-700" size={20} />
                    </div>
                  </div>
                  
                  <div className="mb-4 flex-grow">
                    <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-100 rounded-xl overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={`${cert.title} certificate`} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-gray-700 mb-1 text-sm"><span className="font-medium">Issuer:</span> {cert.issuer}</p>
                    {cert.instructor && <p className="text-gray-700 mb-1 text-sm"><span className="font-medium">Instructor:</span> {cert.instructor}</p>}
                    <p className="text-gray-700 mb-2 text-sm"><span className="font-medium">Date:</span> {cert.date}</p>
                    <p className="text-gray-700 text-sm">{cert.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Resume Download Button */}
        <div className="text-center pt-12 md:pt-16">
          <a 
            href="https://drive.google.com/file/d/1CHSmFEME9H1IG4JfVafxM_y4MmNasv2K/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium shadow-lg hover:shadow-xl"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;