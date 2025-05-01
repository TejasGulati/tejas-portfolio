import { useState } from 'react';
import { Github, ExternalLink, Code, Award, Trophy, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(1);

  const projects = [
    {
      id: 1,
      title: "NewsSphere",
      description: "A dynamic news aggregation platform that allows users to access the latest articles, save bookmarks, and monitor their news consumption via a personalized dashboard.",
      features: [
        "Integrated Django backend with React frontend",
        "Utilized Redis and Celery for scheduled web scraping",
        "Real-time news updates without system overload",
        "JWT authentication for secure user access",
        "Personalized dashboard for tracking reading habits"
      ],
      technologies: ["Django", "React", "JWT", "Redis", "Celery", "MySQL", "Docker"],
      githubLink: "https://github.com/TejasGulati/NewsSphere",
      demoLink: "#"
    },
    {
      id: 2,
      title: "EcoPulse",
      description: "AI-powered business solutions for sustainability, with features like predictive maintenance and AI-driven resource management.",
      features: [
        "Integrated generative AI models",
        "Focus on creating eco-friendly business models",
        "Aligned with ESG (Environmental, Social, Governance) objectives",
        "Predictive analytics for resource optimization",
        "Dashboard for tracking sustainability metrics"
      ],
      technologies: ["Django", "React", "Docker", "TensorFlow", "Generative AI"],
      githubLink: "https://github.com/TejasGulati/EcoPulse",
      demoLink: "#"
    },
    {
      id: 3,
      title: "GrameenLink",
      description: "Revolutionizing rural supply chains by connecting farmers directly to markets, eliminating middlemen, and increasing farmer income by up to 45%.",
      features: [
        "Won 3rd place at Evolve-X competition at MAIT's Zenith E-Summit",
        "Featured in Unnat Bharat Abhiyan initiative",
        "Collaborative buying model for rural communities",
        "Digital platform for direct farmer-to-market connections",
        "Real-time pricing and inventory management"
      ],
      technologies: ["Django", "React", "PostgreSQL", "Payment Gateway Integration"],
      githubLink: "#",
      demoLink: "#",
      award: true
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-[#3a4a38] via-[#3a4a38]/95 to-[#3a4a38]/90 dark:from-[#e9e0ca] dark:via-[#e9e0ca]/95 dark:to-[#e9e0ca]/90 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#bc8c5f]/20 dark:bg-[#d4a373]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#bc8c5f]/10 dark:bg-[#d4a373]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#e9e0ca]/10 dark:bg-[#3a4a38]/10 rounded-full text-sm font-semibold tracking-widest text-[#e9e0ca] dark:text-[#3a4a38] uppercase mb-4 border border-[#bc8c5f]/20 dark:border-[#d4a373]/20">
            MY WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e9e0ca] dark:text-[#3a4a38] mb-6">
            Featured <span className="bg-gradient-to-r from-[#bc8c5f] to-[#a17952] dark:from-[#d4a373] dark:to-[#c99868] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-[#e9e0ca]/90 dark:text-[#3a4a38]/90 max-w-3xl mx-auto">
            Notable projects that showcase my skills in full-stack development, DevOps, and AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative group cursor-pointer"
              onClick={() => setActiveProject(project.id)}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br from-[#bc8c5f] to-[#a17952] dark:from-[#d4a373] dark:to-[#c99868] rounded-2xl blur opacity-75 transition duration-300 ${activeProject === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-75'}`}></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-[#bc8c5f]/20 to-[#3a4a38]/20 dark:from-[#d4a373]/20 dark:to-[#e9e0ca]/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative p-8 bg-[#3a4a38]/95 dark:bg-[#e9e0ca]/95 rounded-xl shadow-xl border border-[#bc8c5f]/20 dark:border-[#d4a373]/20 h-full flex flex-col backdrop-blur-sm transition-all duration-300 group-hover:shadow-2xl">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-1 h-10 bg-gradient-to-b from-[#bc8c5f] to-[#a17952] dark:from-[#d4a373] dark:to-[#c99868] rounded-full mr-3 transition-all ${activeProject === project.id ? 'scale-y-100' : 'scale-y-50 group-hover:scale-y-75'}`}></div>
                      <h3 className="text-2xl font-bold text-[#e9e0ca] dark:text-[#3a4a38]">{project.title}</h3>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-[#bc8c5f]/20 to-[#a17952]/20 dark:from-[#d4a373]/20 dark:to-[#c99868]/20 rounded-full shadow-inner">
                      {project.award ? 
                        <Trophy className="text-[#bc8c5f] dark:text-[#d4a373]" size={20} /> : 
                        <Code className="text-[#bc8c5f] dark:text-[#d4a373]" size={20} />
                      }
                    </div>
                  </div>
                  <p className="text-[#e9e0ca]/90 dark:text-[#3a4a38]/90 mb-6">{project.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-[#bc8c5f] dark:text-[#d4a373]">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="text-[#bc8c5f] dark:text-[#d4a373] mr-2 h-5 w-5 flex-shrink-0" />
                        <span className="text-[#e9e0ca]/90 dark:text-[#3a4a38]/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-[#bc8c5f] dark:text-[#d4a373]">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 bg-[#e9e0ca]/10 dark:bg-[#3a4a38]/10 border border-[#bc8c5f]/30 dark:border-[#d4a373]/30 text-[#e9e0ca] dark:text-[#3a4a38] rounded-lg text-sm font-medium transition-all hover:bg-[#bc8c5f]/20 dark:hover:bg-[#d4a373]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto">
                  {project.githubLink !== "#" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-[#bc8c5f] to-[#a17952] dark:from-[#d4a373] dark:to-[#c99868] text-[#e9e0ca] dark:text-[#3a4a38] px-5 py-2 rounded-lg transition-all font-medium shadow-md hover:shadow-lg hover:shadow-[#bc8c5f]/30 dark:hover:shadow-[#d4a373]/30"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#e9e0ca] hover:bg-[#e9e0ca]/80 text-[#3a4a38] px-5 py-2 rounded-lg transition-all font-medium shadow-md hover:shadow-lg hover:shadow-[#e9e0ca]/30 dark:hover:shadow-[#3a4a38]/30"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {project.award && (
                    <span className="flex items-center gap-2 bg-[#bc8c5f]/20 dark:bg-[#d4a373]/20 text-[#e9e0ca] dark:text-[#3a4a38] px-5 py-2 rounded-lg font-medium border border-[#bc8c5f]/30 dark:border-[#d4a373]/30">
                      <Award size={18} />
                      Award Winning
                    </span>
                  )}
                </div>
                
                {/* Interaction indicator */}
                <div className={`absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[#bc8c5f] dark:bg-[#d4a373] transition-all duration-300 ${activeProject === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a
            href="https://github.com/TejasGulati"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#bc8c5f] to-[#a17952] dark:from-[#d4a373] dark:to-[#c99868] text-[#e9e0ca] dark:text-[#3a4a38] px-6 py-3 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl hover:shadow-[#bc8c5f]/30 dark:hover:shadow-[#d4a373]/30"
          >
            <Github size={18} /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;