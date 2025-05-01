import { Github, ExternalLink } from 'lucide-react';

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
    <section id="projects" className="py-8 bg-white dark:bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Some of my notable projects that showcase my skills and expertise.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div key={project.id} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex space-x-4 mt-auto pt-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <Github className="mr-2" size={18} />
              Code
            </a>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                <ExternalLink className="mr-2" size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Projects;
