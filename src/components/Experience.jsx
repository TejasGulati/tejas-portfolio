// src/components/Experience.jsx
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the valuable experiences I've gained along the way.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="card mb-8"
              variants={itemVariants}
            >
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1 mb-4">
                    <span className="flex items-center mr-4">
                      <Calendar className="mr-1" size={16} />
                      {exp.duration}
                    </span>
                    <span>{exp.company}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex">
                        <ArrowRight className="text-primary mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;