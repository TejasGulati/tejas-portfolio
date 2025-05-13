import { useState } from 'react';
import { Github, ExternalLink, Code, Award, Trophy, ChevronRight, X, Image as ImageIcon } from 'lucide-react';

// Importing all images
import news1 from '../assets/news1.png';
import news2 from '../assets/news2.png';
import news3 from '../assets/news3.png';
import news4 from '../assets/news4.png';
import ecop1 from '../assets/ecop1.png';
import ecop2 from '../assets/ecop2.png';
import ecop3 from '../assets/ecop3.png';
import ecop4 from '../assets/ecop4.png';
import gmlink1 from '../assets/gmlink1.png';
import gmlink2 from '../assets/gmlink2.png';
import gmlink3 from '../assets/gmlink3.png';
import gmlink4 from '../assets/gmlink4.png';
import mcorp1 from '../assets/mcorp1.png';
import mcorp2 from '../assets/mcorp2.png';
import mcorp3 from '../assets/mcorp3.png';
import mcorp4 from '../assets/mcorp4.png';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "NewsSphere",
      description: "A dynamic news aggregation platform that allows users to access the latest articles, save bookmarks, and monitor their news consumption via a personalized dashboard.",
      longDescription: "NewsSphere revolutionizes how users consume news by automatically aggregating content from multiple sources, providing personalized recommendations, and giving users insights into their reading habits. The system utilizes scheduled web scraping with Redis and Celery to ensure real-time updates without overloading the system or source websites.",
      features: [
        "Integrated Django REST Framework backend with Angular frontend",
        "Utilized Redis and Celery for scheduled web scraping",
        "Real-time news updates without system overload",
        "JWT authentication for secure user access",
        "Personalized dashboard for tracking reading habits",
        "MySQL database for structured data storage"
      ],
      technologies: ["Django", "Angular", "JWT", "Redis", "Celery", "MySQL", "Docker"],
      githubLink: "https://github.com/TejasGulati/NewsSphere",
      demoLink: "#",
      inProgress: true,
      screenshots: [
        { id: 'ns1', alt: "NewsSphere Dashboard", src: news1, caption: "Personalized News Dashboard" },
        { id: 'ns2', alt: "Article View", src: news2, caption: "Article Reading Interface" },
        { id: 'ns3', alt: "Bookmarked", src: news3, caption: "Bookmark Articles" },
        { id: 'ns4', alt: "Trending and Recommendation", src: news4, caption: "Personal Touch" }
      ]
    },
    {
      id: 2,
      title: "EcoPulse",
      description: "AI-powered business solutions for sustainability, with features like predictive maintenance and AI-driven resource management.",
      longDescription: "EcoPulse integrates AI for sustainability, enhancing strategic decision-making in environmental management practices. The platform addresses the misalignment between AI initiatives and sustainability principles, providing quantifiable environmental impact data and actionable insights especially valuable for resource-limited startups.",
      features: [
        "Predictive ESG (Environmental, Social, Governance) Analytics",
        "Generative AI models for sustainability optimization",
        "Real-time data visualization of environmental impact metrics",
        "Integration with existing business systems",
        "Customizable sustainability dashboards",
        "AI-driven recommendations for resource optimization"
      ],
      technologies: ["Django", "React", "Docker", "TensorFlow", "PyTorch", "PostgreSQL", "Gemini AI"],
      githubLink: "https://github.com/TejasGulati/EcoPulse",
      demoLink: "#",
      inProgress: true,
      screenshots: [
        { id: 'ep1', alt: "EcoPulse Dashboard", src: ecop1, caption: "Sustainability Overview Dashboard" },
        { id: 'ep2', alt: "Environmental Impact Analysis", src: ecop2, caption: "Environmental Impact Analysis" },
        { id: 'ep3', alt: "Generate Sustainiblity Reports", src: ecop3, caption: "Generate Sustainiblity Reports" },
        { id: 'ep4', alt: "AI Powered Predictive Analysis", src: ecop4, caption: "AI Powered Predictive Analysis" }
      ]
    },
    {
      id: 3,
      title: "GrameenLink",
      description: "Revolutionizing rural supply chains by connecting farmers directly to markets, eliminating middlemen, and increasing farmer income by up to 45%.",
      longDescription: "GrameenLink is an innovative rural distribution platform designed to transform last-mile delivery in rural India using technology. The platform leverages AI-driven micro-warehouses, drone delivery systems, blockchain transparency, and mobile retail vans to empower rural economies with efficient and transparent supply chains.",
      features: [
        "Won 3rd place at Evolve-X competition at MAIT's Zenith E-Summit",
        "Featured in Unnat Bharat Abhiyan initiative",
        "Blockchain-powered supply chain transparency",
        "Drone-based delivery system for remote areas",
        "Inventory optimization for rural distribution",
        "Mobile retail vans for last-mile access",
        "Village kiosks for community-based commerce"
      ],
      technologies: ["React (Vite)", "Tailwind CSS", "Blockchain", "IoT Integration"],
      githubLink: "#",
      demoLink: "https://grameen-link.vercel.app/",
      award: true,
      inProgress: false,
      screenshots: [
        { id: 'gl1', alt: "GrameenLink Platform", src: gmlink1, caption: "Main Platform Interface" },
        { id: 'gl2', alt: "Blockchain Transparency", src: gmlink2, caption: "Blockchain-Powered Supply Chain" },
        { id: 'gl3', alt: "Mobile Retail Solutions", src: gmlink3, caption: "Mobile Retail Van Tracking" },
        { id: 'gl4', alt: "Rural Distribution Drone Network", src: gmlink4, caption: "Drone Network" }
      ]
    },
    {
      id: 4,
      title: "MetaCorp",
      description: "An AI-powered business simulator designed to model parallel business realities, helping companies predict the long-term effects of strategic decisions.",
      longDescription: "MetaCorp is a cutting-edge business simulator that creates a 'business multiverse' to predict how different strategic decisions can shape a company's future. Using advanced AI models, it helps businesses foresee potential risks, identify hidden opportunities, and optimize growth strategies by simulating parallel realities rather than relying on static data analysis.",
      features: [
        "Multiverse Simulation Engine for parallel business scenarios",
        "AI-Powered Predictive Modeling with Gemini AI integration",
        "Dynamic Risk Detection using anomaly detection algorithms",
        "Interactive Visualizations with scenario maps and impact heatmaps",
        "Django backend with React frontend",
        "PostgreSQL for structured financial data"
      ],
      technologies: ["React", "Django", "Gemini AI", "TensorFlow", "PostgreSQL", "D3.js", "Tailwind CSS"],
      githubLink: "https://github.com/TejasGulati/MetaCorp_production",
      demoLink: "#",
      inProgress: true,
      screenshots: [
        { id: 'mc1', alt: "Business Multiverse Diagram", src: mcorp1, caption: "Business Multiverse Diagram" },
        { id: 'mc2', alt: "Market Value Trajectories", src: mcorp2, caption: "Market Value Trajectories" },
        { id: 'mc3', alt: "Revenue Growth Trajectories", src: mcorp3, caption: "Revenue Growth Trajectories" },
        { id: 'mc4', alt: "Correlation Of Final Year Metrics", src: mcorp4, caption: "Correlation Of Final Year Metrics" }
      ]
    }
  ];

  const handleDemoClick = (e, project) => {
    e.stopPropagation();
    if (project.inProgress) {
      setCurrentProject(project);
      setShowModal(true);
    } else {
      window.open(project.demoLink, "_blank");
    }
  };

  const handleScreenshotClick = (e, image, project) => {
    e.stopPropagation();
    setCurrentImage({ ...image, projectTitle: project.title });
    setShowImageModal(true);
  };

  const WIPModal = () => {
    if (!showModal) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-md w-full">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">{currentProject?.title}</h3>
            <button 
              onClick={() => setShowModal(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 text-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-blue-700" size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Coming Soon!</h4>
            <p className="text-gray-700">
              I'm actively working on this exciting project and will update the live demo soon. Thank you for your interest!
            </p>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium shadow-md"
            >
              Looking Forward To It
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ImageViewerModal = () => {
    if (!showImageModal || !currentImage) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
        <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex flex-col">
          <div className="flex justify-between items-center mb-4 bg-gray-900 p-4 rounded-t-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white truncate">
              {currentImage.projectTitle} - <span className="text-blue-400">{currentImage.caption}</span>
            </h3>
            <button 
              onClick={() => setShowImageModal(false)}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors text-white"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-auto bg-gray-800 flex items-center justify-center p-4">
            <img 
              src={currentImage.src} 
              alt={currentImage.alt} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-gray-700"
            />
          </div>
          
          <div className="bg-gray-900 p-4 text-center text-gray-300 rounded-b-xl">
            {currentImage.caption}
          </div>
        </div>
      </div>
    );
  };

  const ProjectCard = ({ project }) => (
    <div className="relative mb-12">
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl blur-3xl opacity-70"></div>
      <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
          <div className="p-4 bg-blue-100 rounded-xl flex items-center justify-center">
            {project.award ? 
              <Trophy className="text-blue-700" size={24} /> : 
              <Code className="text-blue-700" size={24} />
            }
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">{project.title}</h3>
            <p className="text-gray-700 mt-2">{project.longDescription}</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-blue-700 text-lg">Key Features:</h4>
          <ul className="space-y-3">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <div className="mr-4 mt-1 h-4 w-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <ChevronRight className="text-blue-700" size={12} />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="font-semibold mb-3 text-blue-700 text-lg">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="font-semibold mb-4 text-blue-700 text-xl">Project Screenshots:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.screenshots.map((image) => (
              <div 
                key={image.id}
                className="overflow-hidden rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all cursor-pointer relative"
                onClick={(e) => handleScreenshotClick(e, image, project)}
              >
                <div className="aspect-video bg-gray-100 relative">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all hover:bg-opacity-30">
                    <div className="bg-white p-3 rounded-full opacity-0 hover:opacity-100 transition-all shadow-lg">
                      <ImageIcon size={16} className="text-blue-700" />
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 border-t-2 border-gray-200 text-sm font-medium text-gray-700 text-center">
                  {image.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.githubLink !== "#" && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
              Code
            </a>
          )}
          {project.demoLink && (
            <button
              onClick={(e) => handleDemoClick(e, project)}
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium shadow-md border border-gray-200"
            >
              <ExternalLink size={16} />
              Live Demo
            </button>
          )}
          {project.award && (
            <span className="flex items-center gap-2 bg-blue-50 text-gray-700 px-4 py-2 rounded-lg font-medium border border-blue-200">
              <Award size={16} />
              Award Winning
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 mt-8">
            MY WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Notable projects that showcase my skills in full-stack development, DevOps, AI integration, and sustainable technological solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <a
            href="https://github.com/TejasGulati"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium shadow-lg"
          >
            <Github size={18} /> View More on GitHub
          </a>
        </div>
      </div>
      <WIPModal />
      <ImageViewerModal />
    </section>
  );
};

export default Projects;