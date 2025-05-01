import { Code, Server, Database, Bot, Cpu, GitBranch } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Languages',
      items: ['Python', 'JavaScript', 'SQL'],
      icon: <Code className="text-primary w-6 h-6" />
    },
    {
      category: 'Frameworks',
      items: ['Django', 'Django REST', 'React', 'Celery', 'Redis'],
      icon: <Server className="text-primary w-6 h-6" />
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL'],
      icon: <Database className="text-primary w-6 h-6" />
    },
    {
      category: 'AI/ML',
      items: ['TensorFlow', 'Scikit-Learn', 'Data Preprocessing'],
      icon: <Bot className="text-primary w-6 h-6" />
    },
    {
      category: 'Tools',
      items: ['Docker', 'Git', 'GitHub Actions', 'Postman'],
      icon: <Cpu className="text-primary w-6 h-6" />
    },
    {
      category: 'Version Control',
      items: ['Git', 'GitHub'],
      icon: <GitBranch className="text-primary w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm an Information Technology student passionate about web development, especially in building scalable and impactful digital products.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Education */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Education</h3>
            <div>
              <h4 className="text-xl font-semibold">B.Tech in Information Technology</h4>
              <p className="text-gray-600 dark:text-gray-300">Maharaja Agrasen Institute Of Technology</p>
              <p className="text-gray-500 dark:text-gray-400">Nov 2022 – Aug 2026</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300"><span className="font-medium">CGPA:</span> 9.195/10</p>
            </div>
            <div className="mt-4">
              <h5 className="font-semibold mb-2">Relevant Coursework:</h5>
              <ul className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-300 text-sm">
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
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Personal Info</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
              <li><span className="font-medium">Name:</span> Tejas Gulati</li>
              <li><span className="font-medium">Location:</span> Delhi, India</li>
              <li>
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:tejasgulati11227@gmail.com" className="text-primary hover:underline">
                  tejasgulati11227@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium">LinkedIn:</span>{' '}
                <a href="https://linkedin.com/in/tejas-gulati/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  linkedin.com/in/tejas-gulati/
                </a>
              </li>
              <li>
                <span className="font-medium">GitHub:</span>{' '}
                <a href="https://github.com/TejasGulati" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  github.com/TejasGulati
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <h3 className="text-3xl font-bold text-center mb-10 text-gradient bg-gradient-to-r from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text">
          Skills & Expertise
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h4 className="text-xl font-semibold ml-2 text-gray-800 dark:text-white">{skill.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, subIdx) => (
                  <span
                    key={subIdx}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm px-2 py-1 rounded-full"
                  >
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
