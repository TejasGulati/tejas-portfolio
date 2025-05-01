import { useState } from 'react';
import { Briefcase, Calendar, ArrowRight, Award, Download, ChevronRight } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      id: 1,
      role: "Full Stack Web Development with DevOps Intern",
      company: "Cinntra InfoTech, Noida",
      duration: "Aug 2024 – Sep 2024",
      responsibilities: [
        "Developed and deployed full-stack web applications using Django, React, and JWT authentication",
        "Designed and implemented RESTful APIs, integrating frontend with backend",
        "Managed background tasks and web scraping using Redis, Celery, and BeautifulSoup",
        "Utilized Docker for containerization, reducing setup time by 40%",
        "Optimized MySQL database queries, improving performance by 15%",
        "Conducted unit testing with Pytest, achieving 50% test coverage"
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "GrameenLink",
      description: "Revolutionizing rural supply chains by connecting farmers directly to markets",
      achievements: [
        "Won 3rd place at Evolve-X competition at MAIT's Zenith E-Summit",
        "Potential to increase farmer income by up to 45%",
        "Featured in Unnat Bharat Abhiyan initiative"
      ]
    },
    {
      id: 2,
      title: "MetaCorp",
      description: "AI-powered business solution featured in Code Genesis competition",
      achievements: [
        "Top 15 out of 250 teams in Uncharted by CSI-IW",
        "Finale presentation at Microsoft Office, Gurgaon"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-[#e9e0ca] to-[#e9e0ca]/90 dark:from-[#3a4a38] dark:to-[#3a4a38]/90">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#3a4a38]/10 dark:bg-[#e9e0ca]/10 rounded-full text-sm font-semibold tracking-widest text-[#3a4a38] dark:text-[#e9e0ca] uppercase mb-4">
            PROFESSIONAL JOURNEY
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#3a4a38] dark:text-[#e9e0ca] mb-8">
            My <span className="text-[#bc8c5f] dark:text-[#d4a373] bg-clip-text bg-gradient-to-r from-[#bc8c5f] to-[#a17952] dark:from-[#d4a373] dark:to-[#c99868]">Experience</span>
          </h2>
          <p className="text-lg text-[#3a4a38]/90 dark:text-[#e9e0ca]/90 max-w-3xl mx-auto">
            Leveraging technical expertise and innovative approaches to deliver impactful solutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'experience' 
                  ? 'bg-[#bc8c5f] dark:bg-[#d4a373] text-[#e9e0ca] dark:text-[#3a4a38] shadow-lg' 
                  : 'bg-[#3a4a38]/10 dark:bg-[#e9e0ca]/10 text-[#3a4a38] dark:text-[#e9e0ca] hover:bg-[#3a4a38]/20 dark:hover:bg-[#e9e0ca]/20'
              }`}
            >
              <div className="flex items-center gap-2">
                <Briefcase size={18} />
                <span>Work Experience</span>
              </div>
            </button>
            <button 
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'projects' 
                  ? 'bg-[#bc8c5f] dark:bg-[#d4a373] text-[#e9e0ca] dark:text-[#3a4a38] shadow-lg' 
                  : 'bg-[#3a4a38]/10 dark:bg-[#e9e0ca]/10 text-[#3a4a38] dark:text-[#e9e0ca] hover:bg-[#3a4a38]/20 dark:hover:bg-[#e9e0ca]/20'
              }`}
            >
              <div className="flex items-center gap-2">
                <Award size={18} />
                <span>Notable Projects</span>
              </div>
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {activeTab === 'experience' && (
            <div className="space-y-12">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#bc8c5f]/30 to-[#3a4a38]/30 dark:from-[#d4a373]/30 dark:to-[#3a4a38]/40 rounded-2xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-8 bg-white dark:bg-[#2d3c2b] rounded-2xl shadow-lg border border-[#bc8c5f]/20 dark:border-[#d4a373]/20 hover:border-[#bc8c5f]/50 dark:hover:border-[#d4a373]/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                      <div className="p-5 bg-gradient-to-br from-[#bc8c5f]/20 to-[#a17952]/20 dark:from-[#d4a373]/20 dark:to-[#c99868]/20 rounded-full flex items-center justify-center group-hover:from-[#bc8c5f]/30 group-hover:to-[#a17952]/30 dark:group-hover:from-[#d4a373]/30 dark:group-hover:to-[#c99868]/30 transition-all duration-300">
                        <Briefcase className="text-[#bc8c5f] dark:text-[#d4a373]" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#3a4a38] dark:text-[#e9e0ca]">{exp.role}</h3>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-3">
                          <span className="flex items-center text-[#3a4a38]/80 dark:text-[#e9e0ca]/80">
                            <Calendar className="mr-2" size={16} />
                            {exp.duration}
                          </span>
                          <span className="font-medium text-[#bc8c5f] dark:text-[#d4a373]">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-4 ml-2">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <div className="mr-4 mt-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#bc8c5f]/20 to-[#a17952]/20 dark:from-[#d4a373]/20 dark:to-[#c99868]/20 flex items-center justify-center flex-shrink-0 group-hover/item:from-[#bc8c5f]/30 group-hover/item:to-[#a17952]/30 dark:group-hover/item:from-[#d4a373]/30 dark:group-hover/item:to-[#c99868]/30 transition-all duration-300">
                            <ChevronRight className="text-[#bc8c5f] dark:text-[#d4a373]" size={14} />
                          </div>
                          <span className="text-[#3a4a38]/90 dark:text-[#e9e0ca]/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'projects' && (
            <div className="space-y-12">
              {projects.map((project) => (
                <div key={project.id} className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#bc8c5f]/30 to-[#3a4a38]/30 dark:from-[#d4a373]/30 dark:to-[#3a4a38]/40 rounded-2xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-8 bg-white dark:bg-[#2d3c2b] rounded-2xl shadow-lg border border-[#bc8c5f]/20 dark:border-[#d4a373]/20 hover:border-[#bc8c5f]/50 dark:hover:border-[#d4a373]/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                      <div className="p-5 bg-gradient-to-br from-[#bc8c5f]/20 to-[#a17952]/20 dark:from-[#d4a373]/20 dark:to-[#c99868]/20 rounded-full flex items-center justify-center group-hover:from-[#bc8c5f]/30 group-hover:to-[#a17952]/30 dark:group-hover:from-[#d4a373]/30 dark:group-hover:to-[#c99868]/30 transition-all duration-300">
                        <Award className="text-[#bc8c5f] dark:text-[#d4a373]" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#3a4a38] dark:text-[#e9e0ca]">{project.title}</h3>
                        <p className="text-[#3a4a38]/80 dark:text-[#e9e0ca]/80 mt-3">{project.description}</p>
                      </div>
                    </div>

                    <ul className="space-y-4 ml-2">
                      {project.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <div className="mr-4 mt-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#bc8c5f]/20 to-[#a17952]/20 dark:from-[#d4a373]/20 dark:to-[#c99868]/20 flex items-center justify-center flex-shrink-0 group-hover/item:from-[#bc8c5f]/30 group-hover/item:to-[#a17952]/30 dark:group-hover/item:from-[#d4a373]/30 dark:group-hover/item:to-[#c99868]/30 transition-all duration-300">
                            <ChevronRight className="text-[#bc8c5f] dark:text-[#d4a373]" size={14} />
                          </div>
                          <span className="text-[#3a4a38]/90 dark:text-[#e9e0ca]/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center pt-16">
            <a 
              href="/Tejas_Gulati_Resume.pdf" 
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#bc8c5f] to-[#a17952] dark:from-[#d4a373] dark:to-[#c99868] hover:from-[#a17952] hover:to-[#916842] dark:hover:from-[#c99868] dark:hover:to-[#b88758] text-[#e9e0ca] dark:text-[#3a4a38] px-8 py-4 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl hover:shadow-[#bc8c5f]/30 dark:hover:shadow-[#d4a373]/30"
            >
              <Download size={18} /> Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;