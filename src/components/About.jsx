import { Code, Server, Database, Bot, Cpu, GitBranch } from 'lucide-react';

const About = () => {
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

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#3a4a38]/90 to-[#3a4a38] dark:from-[#e9e0ca]/90 dark:to-[#e9e0ca]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#e9e0ca]/10 dark:bg-[#3a4a38]/10 rounded-full text-sm font-semibold tracking-widest text-[#e9e0ca] dark:text-[#3a4a38] uppercase mb-4">
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e9e0ca] dark:text-[#3a4a38] mb-6">
            Who <span className="text-[#d4a373] dark:text-[#bc8c5f]">I Am</span>
          </h2>
          <p className="text-lg text-[#e9e0ca]/90 dark:text-[#3a4a38]/90 max-w-3xl mx-auto">
            I'm an Information Technology student passionate about web development, especially in building scalable and impactful digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Education Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#d4a373]/20 to-[#e9e0ca]/20 dark:from-[#bc8c5f]/20 dark:to-[#3a4a38]/20 rounded-2xl blur-3xl opacity-80"></div>
            <div className="relative p-8 bg-[#3a4a38]/80 dark:bg-[#e9e0ca]/80 rounded-2xl shadow-xl border border-[#d4a373]/20 dark:border-[#bc8c5f]/20 h-full flex flex-col">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#e9e0ca] dark:text-[#3a4a38]">Education</h3>
                  <div className="p-3 bg-[#d4a373]/20 dark:bg-[#bc8c5f]/20 rounded-full">
                    <Code className="text-[#d4a373] dark:text-[#bc8c5f]" size={20} />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-[#e9e0ca] dark:text-[#3a4a38]">B.Tech in Information Technology</h4>
                <p className="text-[#e9e0ca]/90 dark:text-[#3a4a38]/90">Maharaja Agrasen Institute Of Technology</p>
                <p className="text-[#e9e0ca]/70 dark:text-[#3a4a38]/70">Nov 2022 – Aug 2026</p>
                <p className="mt-2 text-[#e9e0ca] dark:text-[#3a4a38]"><span className="font-medium">CGPA:</span> 9.195/10</p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-[#d4a373] dark:text-[#bc8c5f]">Relevant Coursework:</h4>
                <ul className="space-y-2">
                  {['Data Structures', 'Algorithms', 'Web Development', 'Machine Learning', 'Cloud Computing', 'Full Stack Development'].map((course, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#d4a373] dark:text-[#bc8c5f] mr-2">•</span>
                      <span className="text-[#e9e0ca]/90 dark:text-[#3a4a38]/90">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Personal Info Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#d4a373]/20 to-[#e9e0ca]/20 dark:from-[#bc8c5f]/20 dark:to-[#3a4a38]/20 rounded-2xl blur-3xl opacity-80"></div>
            <div className="relative p-8 bg-[#3a4a38]/80 dark:bg-[#e9e0ca]/80 rounded-2xl shadow-xl border border-[#d4a373]/20 dark:border-[#bc8c5f]/20 h-full flex flex-col">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#e9e0ca] dark:text-[#3a4a38]">Personal Info</h3>
                  <div className="p-3 bg-[#d4a373]/20 dark:bg-[#bc8c5f]/20 rounded-full">
                    <Code className="text-[#d4a373] dark:text-[#bc8c5f]" size={20} />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-[#d4a373] dark:text-[#bc8c5f] mr-2">•</span>
                  <div>
                    <span className="font-medium text-[#e9e0ca] dark:text-[#3a4a38]">Name:</span>
                    <span className="ml-2 text-[#e9e0ca]/90 dark:text-[#3a4a38]/90">Tejas Gulati</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#d4a373] dark:text-[#bc8c5f] mr-2">•</span>
                  <div>
                    <span className="font-medium text-[#e9e0ca] dark:text-[#3a4a38]">Location:</span>
                    <span className="ml-2 text-[#e9e0ca]/90 dark:text-[#3a4a38]/90">Delhi, India</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#d4a373] dark:text-[#bc8c5f] mr-2">•</span>
                  <div>
                    <span className="font-medium text-[#e9e0ca] dark:text-[#3a4a38]">Email:</span>
                    <a href="mailto:tejasgulati11227@gmail.com" className="ml-2 text-[#d4a373] dark:text-[#bc8c5f] hover:underline">
                      tejasgulati11227@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#d4a373] dark:text-[#bc8c5f] mr-2">•</span>
                  <div>
                    <span className="font-medium text-[#e9e0ca] dark:text-[#3a4a38]">LinkedIn:</span>
                    <a href="https://linkedin.com/in/tejas-gulati/" target="_blank" rel="noopener noreferrer" className="ml-2 text-[#d4a373] dark:text-[#bc8c5f] hover:underline">
                      linkedin.com/in/tejas-gulati/
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#d4a373] dark:text-[#bc8c5f] mr-2">•</span>
                  <div>
                    <span className="font-medium text-[#e9e0ca] dark:text-[#3a4a38]">GitHub:</span>
                    <a href="https://github.com/TejasGulati" target="_blank" rel="noopener noreferrer" className="ml-2 text-[#d4a373] dark:text-[#bc8c5f] hover:underline">
                      github.com/TejasGulati
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-[#e9e0ca] dark:text-[#3a4a38]">
            Technical <span className="text-[#d4a373] dark:text-[#bc8c5f]">Skills</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#d4a373]/20 to-[#e9e0ca]/20 dark:from-[#bc8c5f]/20 dark:to-[#3a4a38]/20 rounded-2xl blur-3xl opacity-80"></div>
                <div className="relative p-8 bg-[#3a4a38]/80 dark:bg-[#e9e0ca]/80 rounded-2xl shadow-xl border border-[#d4a373]/20 dark:border-[#bc8c5f]/20 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-[#e9e0ca] dark:text-[#3a4a38]">{skill.category}</h4>
                    <div className="p-3 bg-[#d4a373]/20 dark:bg-[#bc8c5f]/20 rounded-full">
                      {skill.icon}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#d4a373] dark:text-[#bc8c5f] mr-2">•</span>
                        <span className="text-[#e9e0ca]/90 dark:text-[#3a4a38]/90">{item}</span>
                      </li>
                    ))}
                  </ul>
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