import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

const Experience = () => {
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

  return (
    <section id="experience" className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the valuable experiences I've gained along the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-12 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-6">
                  <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{exp.role}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mt-2">
                    <span className="flex items-center mr-6">
                      <Calendar className="mr-2" size={18} />
                      {exp.duration}
                    </span>
                    <span>{exp.company}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ArrowRight className="text-blue-600 dark:text-blue-400 mr-3 mt-1" size={18} />
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
