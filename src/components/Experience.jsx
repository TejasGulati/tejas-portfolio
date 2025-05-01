// Experience.jsx
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

  const ExperienceItem = ({ item, icon: Icon }) => (
    <div className="relative group">
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-blue-200 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
          <div className="p-5 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-300">
            <Icon className="text-blue-600" size={28} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900">{item.title || item.role}</h3>
            {item.company && (
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-3">
                <span className="flex items-center text-gray-600">
                  <Calendar className="mr-2" size={16} />
                  {item.duration}
                </span>
                <span className="font-medium text-blue-600">{item.company}</span>
              </div>
            )}
            {item.description && (
              <p className="text-gray-600 mt-3">{item.description}</p>
            )}
          </div>
        </div>

        <ul className="space-y-4 ml-2">
          {(item.responsibilities || item.achievements).map((point, idx) => (
            <li key={idx} className="flex items-start group/item">
              <div className="mr-4 mt-1 h-5 w-5 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0 group-hover/item:from-blue-200 group-hover/item:to-blue-100 transition-all duration-300">
                <ChevronRight className="text-blue-600" size={14} />
              </div>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
            PROFESSIONAL JOURNEY
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leveraging technical expertise and innovative approaches to deliver impactful solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'experience' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
          <div className="space-y-12">
            {activeTab === 'experience' 
              ? experiences.map(exp => <ExperienceItem key={exp.id} item={exp} icon={Briefcase} />)
              : projects.map(proj => <ExperienceItem key={proj.id} item={proj} icon={Award} />)
            }
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
      </div>
    </section>
  );
};

export default Experience;