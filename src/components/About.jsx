// About.jsx - Redesigned
import { Code, Server, Database, Bot, Cpu, GitBranch } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      category: 'Languages', 
      items: ['Python', 'JavaScript', 'SQL'],
      icon: <Code className="text-primary" /> 
    },
    { 
      category: 'Frameworks', 
      items: ['Django', 'Django REST', 'React', 'Celery', 'Redis'],
      icon: <Server className="text-primary" /> 
    },
    { 
      category: 'Databases', 
      items: ['MySQL', 'PostgreSQL'],
      icon: <Database className="text-primary" /> 
    },
    { 
      category: 'AI/ML', 
      items: ['TensorFlow', 'Scikit-Learn', 'Data Preprocessing'],
      icon: <Bot className="text-primary" /> 
    },
    { 
      category: 'Tools', 
      items: ['Docker', 'Git', 'GitHub Actions', 'Postman'],
      icon: <Cpu className="text-primary" /> 
    },
    { 
      category: 'Version Control', 
      items: ['Git', 'GitHub'],
      icon: <GitBranch className="text-primary" /> 
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm an Information Technology student passionate about web development, 
            particularly in creating efficient and user-friendly applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Education</h3>
            <div className="mb-4">
              <h4 className="text-xl font-semibold">B.Tech in Information Technology</h4>
              <p className="text-gray-600 dark:text-gray-300">Maharaja Agrasen Institute Of Technology</p>
              <p className="text-gray-500 dark:text-gray-400">Nov 2022 – Aug 2026</p>
              <p className="mt-2"><span className="font-medium">CGPA:</span> 9.195/10</p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Relevant Coursework:</h5>
              <ul className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Web Development</li>
                <li>Machine Learning</li>
                <li>Cloud Computing</li>
                <li>Full Stack Development</li>
              </ul>
            </div>
          </div>

          {/* Personal Info */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Personal Info</h3>
            <ul className="space-y-3">
              <li className="flex">
                <span className="font-medium w-24">Name:</span>
                <span>Tejas Gulati</span>
              </li>
              <li className="flex">
                <span className="font-medium w-24">Location:</span>
                <span>Delhi, India</span>
              </li>
              <li className="flex flex-wrap">
                <span className="font-medium w-24">Email:</span>
                <a href="mailto:tejasgulati11227@gmail.com" className="text-primary hover:underline">tejasgulati11227@gmail.com</a>
              </li>
              <li className="flex flex-wrap">
                <span className="font-medium w-24">LinkedIn:</span>
                <a href="https://linkedin.com/in/tejas-gulati/" target="_blank" className="text-primary hover:underline">linkedin.com/in/tejas-gulati/</a>
              </li>
              <li className="flex flex-wrap">
                <span className="font-medium w-24">GitHub:</span>
                <a href="https://github.com/TejasGulati" target="_blank" className="text-primary hover:underline">github.com/TejasGulati</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Skills & Expertise</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-4">
                {skill.icon}
                <h4 className="text-xl font-semibold ml-2">{skill.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;