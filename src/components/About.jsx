import { useState } from 'react';
import { Code, Server, Database, Bot, Cpu, GitBranch, Award, Trophy, ChevronRight } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const skills = [
    {
      category: 'Languages',
      items: ['Python', 'JavaScript', 'SQL'],
      icon: <Code className="text-[#d4a373] dark:text-[#bc8c5f]" size={20} />
    },
    {
      category: 'Frameworks',
      items: ['Django', 'Django REST', 'React', 'Celery', 'Redis'],
      icon: <Server className="text-[#d4a373] dark:text-[#bc8c5f]" size={20} />
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL'],
      icon: <Database className="text-[#d4a373] dark:text-[#bc8c5f]" size={20} />
    },
    {
      category: 'AI/ML',
      items: ['TensorFlow', 'Scikit-Learn', 'Data Preprocessing'],
      icon: <Bot className="text-[#d4a373] dark:text-[#bc8c5f]" size={20} />
    },
    {
      category: 'Tools',
      items: ['Docker', 'Git', 'GitHub Actions', 'Postman'],
      icon: <Cpu className="text-[#d4a373] dark:text-[#bc8c5f]" size={20} />
    },
    {
      category: 'Version Control',
      items: ['Git', 'GitHub'],
      icon: <GitBranch className="text-[#d4a373] dark:text-[#bc8c5f]" size={20} />
    }
  ];

  const achievements = [
    {
      title: "3rd Place at Evolve-X Competition",
      description: "Won 3rd place for GrameenLink, a rural supply chain innovation at MAIT's Zenith E-Summit",
      icon: <Trophy className="text-[#d4a373] dark:text-[#bc8c5f]" size={20} />
    },
    {
      title: "Top 15 in Code Genesis",
      description: "Selected among top 15 teams out of 250 in Uncharted by CSI-IW for MetaCorp project",
      icon: <Award className="text-[#d4a373] dark:text-[#bc8c5f]" size={20} />
    },
    {
      title: "Finance Certification",
      description: "Completed certificate program in finance to complement technical skills",
      icon: <Award className="text-[#d4a373] dark:text-[#bc8c5f]" size={20} />
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#3a4a38] to-[#2a382a] dark:from-[#e9e0ca] dark:to-[#d8ceba]">
      <div className="container mx-auto px-6">
        {/* Header with enhanced styling */}
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#d4a373]/30 to-transparent dark:from-[#bc8c5f]/30 dark:to-transparent rounded-full blur-3xl"></div>
          <span className="inline-block px-4 py-2 bg-[#e9e0ca]/10 dark:bg-[#3a4a38]/10 rounded-full text-sm font-semibold tracking-widest text-[#e9e0ca] dark:text-[#3a4a38] uppercase mb-4 relative">
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e9e0ca] dark:text-[#3a4a38] mb-6 relative">
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#c99868] dark:from-[#bc8c5f] dark:to-[#a17952]">I Am</span>
          </h2>
          <p className="text-lg text-[#e9e0ca]/90 dark:text-[#3a4a38]/90 max-w-3xl mx-auto relative">
            I'm an Information Technology student at Maharaja Agrasen Institute of Technology passionate about building scalable web applications and AI-powered solutions.
          </p>
        </div>

        {/* Main info cards with improved styling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Education Card */}
          <div className="relative group transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#d4a373]/30 to-[#e9e0ca]/20 dark:from-[#bc8c5f]/30 dark:to-[#3a4a38]/20 rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-8 bg-gradient-to-br from-[#3a4a38]/95 to-[#2a382a]/95 dark:from-[#e9e0ca]/95 dark:to-[#d8ceba]/95 rounded-2xl shadow-xl border border-[#d4a373]/20 dark:border-[#bc8c5f]/20 h-full flex flex-col">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e9e0ca] to-[#d8ceba] dark:from-[#3a4a38] dark:to-[#2a382a]">Education</h3>
                  <div className="p-3 bg-gradient-to-br from-[#d4a373]/30 to-[#c99868]/30 dark:from-[#bc8c5f]/30 dark:to-[#a17952]/30 rounded-full">
                    <Code className="text-[#d4a373] dark:text-[#bc8c5f]" size={20} />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-[#e9e0ca] dark:text-[#3a4a38]">B.Tech in Information Technology</h4>
                <p className="text-[#e9e0ca]/90 dark:text-[#3a4a38]/90">Maharaja Agrasen Institute Of Technology</p>
                <p className="text-[#e9e0ca]/70 dark:text-[#3a4a38]/70">Nov 2022 – Aug 2026</p>
                <p className="mt-2 text-[#e9e0ca] dark:text-[#3a4a38]"><span className="font-medium">CGPA:</span> 9.195/10 (IPU Rank List)</p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#c99868] dark:from-[#bc8c5f] dark:to-[#a17952]">Relevant Coursework:</h4>
                <ul className="space-y-2">
                  {['Data Structures', 'Algorithms', 'Web Development', 'Machine Learning', 'Cloud Computing', 'Full Stack Development'].map((course, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="text-[#d4a373] dark:text-[#bc8c5f] mr-1 flex-shrink-0 mt-1" size={16} />
                      <span className="text-[#e9e0ca]/90 dark:text-[#3a4a38]/90">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Personal Info Card */}
          <div className="relative group transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#d4a373]/30 to-[#e9e0ca]/20 dark:from-[#bc8c5f]/30 dark:to-[#3a4a38]/20 rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-8 bg-gradient-to-br from-[#3a4a38]/95 to-[#2a382a]/95 dark:from-[#e9e0ca]/95 dark:to-[#d8ceba]/95 rounded-2xl shadow-xl border border-[#d4a373]/20 dark:border-[#bc8c5f]/20 h-full flex flex-col">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e9e0ca] to-[#d8ceba] dark:from-[#3a4a38] dark:to-[#2a382a]">Personal Info</h3>
                  <div className="p-3 bg-gradient-to-br from-[#d4a373]/30 to-[#c99868]/30 dark:from-[#bc8c5f]/30 dark:to-[#a17952]/30 rounded-full">
                    <Code className="text-[#d4a373] dark:text-[#bc8c5f]" size={20} />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <ChevronRight className="text-[#d4a373] dark:text-[#bc8c5f] mr-1 flex-shrink-0 mt-1" size={16} />
                  <div>
                    <span className="font-medium text-[#e9e0ca] dark:text-[#3a4a38]">Name:</span>
                    <span className="ml-2 text-[#e9e0ca]/90 dark:text-[#3a4a38]/90">Tejas Gulati</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="text-[#d4a373] dark:text-[#bc8c5f] mr-1 flex-shrink-0 mt-1" size={16} />
                  <div>
                    <span className="font-medium text-[#e9e0ca] dark:text-[#3a4a38]">Location:</span>
                    <span className="ml-2 text-[#e9e0ca]/90 dark:text-[#3a4a38]/90">Delhi, India</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="text-[#d4a373] dark:text-[#bc8c5f] mr-1 flex-shrink-0 mt-1" size={16} />
                  <div>
                    <span className="font-medium text-[#e9e0ca] dark:text-[#3a4a38]">Email:</span>
                    <a href="mailto:tejasgulati11227@gmail.com" className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#c99868] dark:from-[#bc8c5f] dark:to-[#a17952] hover:underline">
                      tejasgulati11227@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="text-[#d4a373] dark:text-[#bc8c5f] mr-1 flex-shrink-0 mt-1" size={16} />
                  <div>
                    <span className="font-medium text-[#e9e0ca] dark:text-[#3a4a38]">Phone:</span>
                    <span className="ml-2 text-[#e9e0ca]/90 dark:text-[#3a4a38]/90">+91-9868629191</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="text-[#d4a373] dark:text-[#bc8c5f] mr-1 flex-shrink-0 mt-1" size={16} />
                  <div>
                    <span className="font-medium text-[#e9e0ca] dark:text-[#3a4a38]">LinkedIn:</span>
                    <a href="https://linkedin.com/in/tejas-gulati/" target="_blank" rel="noopener noreferrer" className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#c99868] dark:from-[#bc8c5f] dark:to-[#a17952] hover:underline">
                      linkedin.com/in/tejas-gulati/
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="text-[#d4a373] dark:text-[#bc8c5f] mr-1 flex-shrink-0 mt-1" size={16} />
                  <div>
                    <span className="font-medium text-[#e9e0ca] dark:text-[#3a4a38]">GitHub:</span>
                    <a href="https://github.com/TejasGulati" target="_blank" rel="noopener noreferrer" className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#c99868] dark:from-[#bc8c5f] dark:to-[#a17952] hover:underline">
                      github.com/TejasGulati
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills section with improved styling */}
        <div className="mt-20 relative">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#d4a373]/20 to-transparent dark:from-[#bc8c5f]/20 dark:to-transparent rounded-full blur-3xl -z-10"></div>
          
          <h3 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#e9e0ca] to-[#d8ceba] dark:from-[#3a4a38] dark:to-[#2a382a]">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#c99868] dark:from-[#bc8c5f] dark:to-[#a17952]">Skills</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, idx) => (
              <div key={idx} className="relative group transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#d4a373]/30 to-[#e9e0ca]/20 dark:from-[#bc8c5f]/30 dark:to-[#3a4a38]/20 rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-6 bg-gradient-to-br from-[#3a4a38]/95 to-[#2a382a]/95 dark:from-[#e9e0ca]/95 dark:to-[#d8ceba]/95 rounded-2xl shadow-xl border border-[#d4a373]/20 dark:border-[#bc8c5f]/20 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-[#e9e0ca] dark:text-[#3a4a38]">{skill.category}</h4>
                    <div className="p-3 bg-gradient-to-br from-[#d4a373]/30 to-[#c99868]/30 dark:from-[#bc8c5f]/30 dark:to-[#a17952]/30 rounded-full">
                      {skill.icon}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="text-[#d4a373] dark:text-[#bc8c5f] mr-1 flex-shrink-0 mt-1" size={16} />
                        <span className="text-[#e9e0ca]/90 dark:text-[#3a4a38]/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements section with improved styling */}
        <div className="mt-20 relative">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#d4a373]/20 to-transparent dark:from-[#bc8c5f]/20 dark:to-transparent rounded-full blur-3xl -z-10"></div>
          
          <h3 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#e9e0ca] to-[#d8ceba] dark:from-[#3a4a38] dark:to-[#2a382a]">
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#c99868] dark:from-[#bc8c5f] dark:to-[#a17952]">Achievements</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="relative group transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#d4a373]/30 to-[#e9e0ca]/20 dark:from-[#bc8c5f]/30 dark:to-[#3a4a38]/20 rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-6 bg-gradient-to-br from-[#3a4a38]/95 to-[#2a382a]/95 dark:from-[#e9e0ca]/95 dark:to-[#d8ceba]/95 rounded-2xl shadow-xl border border-[#d4a373]/20 dark:border-[#bc8c5f]/20 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-[#e9e0ca] dark:text-[#3a4a38]">{achievement.title}</h4>
                    <div className="p-3 bg-gradient-to-br from-[#d4a373]/30 to-[#c99868]/30 dark:from-[#bc8c5f]/30 dark:to-[#a17952]/30 rounded-full">
                      {achievement.icon}
                    </div>
                  </div>
                  <p className="text-[#e9e0ca]/90 dark:text-[#3a4a38]/90">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;