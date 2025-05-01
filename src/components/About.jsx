// About.jsx
import { useState } from 'react';
import { Code, Server, Database, Bot, Cpu, GitBranch, Award, Trophy, ChevronRight, Download } from 'lucide-react';

const About = () => {
  const [activeTab] = useState('education');

  const skills = [
    { category: 'Languages', items: ['Python', 'JavaScript', 'SQL'], icon: Code },
    { category: 'Frameworks', items: ['Django', 'Django REST', 'React', 'Celery', 'Redis'], icon: Server },
    { category: 'Databases', items: ['MySQL', 'PostgreSQL'], icon: Database },
    { category: 'AI/ML', items: ['TensorFlow', 'Scikit-Learn', 'Data Preprocessing'], icon: Bot },
    { category: 'Tools', items: ['Docker', 'Git', 'GitHub Actions', 'Postman'], icon: Cpu },
    { category: 'Version Control', items: ['Git', 'GitHub'], icon: GitBranch }
  ];

  const achievements = [
    { 
      title: "3rd Place at Evolve-X Competition", 
      description: "Won 3rd place for GrameenLink, a rural supply chain innovation at MAIT's Zenith E-Summit", 
      icon: Trophy 
    },
    { 
      title: "Top 15 in Code Genesis", 
      description: "Selected among top 15 teams out of 250 in Uncharted by CSI-IW for MetaCorp project", 
      icon: Award 
    },
    { 
      title: "Finance Certification", 
      description: "Completed certificate program in finance to complement technical skills", 
      icon: Award 
    }
  ];

  const Card = ({ children, className = '' }) => (
    <div className={`relative group transition-all duration-300 hover:transform hover:scale-[1.02] ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-200 h-full flex flex-col">
        {children}
      </div>
    </div>
  );

  const ListItem = ({ children }) => (
    <li className="flex items-start">
      <ChevronRight className="text-blue-600 mr-1 flex-shrink-0 mt-1" size={16} />
      <span className="text-gray-700">{children}</span>
    </li>
  );

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold tracking-widest uppercase mb-6">
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">I Am</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm an Information Technology student at Maharaja Agrasen Institute of Technology passionate about building scalable web applications and AI-powered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <Card>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full">
                  <Code className="text-blue-600" size={20} />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">B.Tech in Information Technology</h4>
              <p className="text-gray-600">Maharaja Agrasen Institute Of Technology</p>
              <p className="text-gray-500">Nov 2022 – Aug 2026</p>
              <p className="mt-2 text-gray-800"><span className="font-medium">CGPA:</span> 9.195/10 (IPU Rank List)</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Relevant Coursework:</h4>
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
                <h3 className="text-2xl font-bold text-gray-900">Personal Info</h3>
                <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full">
                  <Code className="text-blue-600" size={20} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Name:", value: "Tejas Gulati" },
                { label: "Location:", value: "Delhi, India" },
                { 
                  label: "Email:", 
                  value: "tejasgulati11227@gmail.com",
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
                  <ChevronRight className="text-blue-600 mr-1 flex-shrink-0 mt-1" size={16} />
                  <div>
                    <span className="font-medium text-gray-700">{item.label}</span>
                    {item.link ? (
                      <a 
                        href={item.label === "Email:" ? `mailto:${item.value}` : `https://${item.value}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-600 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="ml-2 text-gray-600">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Skills</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, idx) => (
              <Card key={idx}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900">{skill.category}</h4>
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full">
                    <skill.icon className="text-blue-600" size={20} />
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <ListItem key={i}>{item}</ListItem>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Achievements</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, idx) => (
              <Card key={idx}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900">{achievement.title}</h4>
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full">
                    <achievement.icon className="text-blue-600" size={20} />
                  </div>
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center pt-16">
          <a 
            href="https://drive.google.com/file/d/10PH7sSPFUe3h-qgNhW-pMggGxmRvGRxb/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-8 py-4 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;