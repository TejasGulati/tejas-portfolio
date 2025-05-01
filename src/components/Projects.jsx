import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "NewsSphere",
      description: "A dynamic news aggregation platform that allows users to access the latest articles, save bookmarks, and monitor their news consumption.",
      features: [
        "Integrated Django backend with React frontend",
        "Utilized Redis and Celery for scheduled web scraping",
        "Real-time news updates without system overload"
      ],
      technologies: ["Django", "React", "JWT", "Redis", "Celery", "MySQL"],
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
        "Aligned with ESG objectives"
      ],
      technologies: ["Django", "React", "Docker", "AI Technologies"],
      githubLink: "https://github.com/TejasGulati/EcoPulse",
      demoLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-[#3a4a38]/90 to-[#3a4a38] dark:from-[#e9e0ca]/90 dark:to-[#e9e0ca]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#e9e0ca]/10 dark:bg-[#3a4a38]/10 rounded-full text-sm font-semibold tracking-widest text-[#e9e0ca] dark:text-[#3a4a38] uppercase mb-4">
            MY WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e9e0ca] dark:text-[#3a4a38] mb-6">
            Featured <span className="text-[#d4a373] dark:text-[#bc8c5f]">Projects</span>
          </h2>
          <p className="text-lg text-[#e9e0ca]/90 dark:text-[#3a4a38]/90 max-w-3xl mx-auto">
            Notable projects that showcase my skills in full-stack development, DevOps, and AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#d4a373]/20 to-[#e9e0ca]/20 dark:from-[#bc8c5f]/20 dark:to-[#3a4a38]/20 rounded-2xl blur-3xl opacity-80"></div>
              <div className="relative p-8 bg-[#3a4a38]/80 dark:bg-[#e9e0ca]/80 rounded-2xl shadow-xl border border-[#d4a373]/20 dark:border-[#bc8c5f]/20 h-full flex flex-col">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-[#e9e0ca] dark:text-[#3a4a38]">{project.title}</h3>
                    <div className="p-3 bg-[#d4a373]/20 dark:bg-[#bc8c5f]/20 rounded-full">
                      <Code className="text-[#d4a373] dark:text-[#bc8c5f]" size={20} />
                    </div>
                  </div>
                  <p className="text-[#e9e0ca]/90 dark:text-[#3a4a38]/90 mb-6">{project.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-[#d4a373] dark:text-[#bc8c5f]">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#d4a373] dark:text-[#bc8c5f] mr-2">•</span>
                        <span className="text-[#e9e0ca]/90 dark:text-[#3a4a38]/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-[#d4a373] dark:text-[#bc8c5f]">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 bg-[#e9e0ca]/10 dark:bg-[#3a4a38]/10 border border-[#d4a373]/30 dark:border-[#bc8c5f]/30 text-[#e9e0ca] dark:text-[#3a4a38] rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#d4a373] hover:bg-[#c99868] text-[#3a4a38] px-5 py-2 rounded-lg transition-all font-medium shadow-md hover:shadow-[#d4a373]/30 dark:hover:shadow-[#bc8c5f]/30"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#e9e0ca] hover:bg-[#e9e0ca]/80 text-[#3a4a38] px-5 py-2 rounded-lg transition-all font-medium shadow-md hover:shadow-[#e9e0ca]/30 dark:hover:shadow-[#3a4a38]/30"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a
            href="https://github.com/TejasGulati"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-[#e9e0ca] hover:bg-[#e9e0ca]/80 text-[#3a4a38] px-6 py-3 rounded-lg transition-all font-medium shadow-lg hover:shadow-[#e9e0ca]/30 dark:hover:shadow-[#3a4a38]/30"
          >
            <Github size={18} /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;