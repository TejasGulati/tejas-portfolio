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
    <section id="experience" className="py-24 bg-gradient-to-b from-[#e9e0ca]/90 to-[#e9e0ca] dark:from-[#3a4a38]/90 dark:to-[#3a4a38]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#3a4a38]/10 dark:bg-[#e9e0ca]/10 rounded-full text-sm font-semibold tracking-widest text-[#3a4a38] dark:text-[#e9e0ca] uppercase mb-4">
            PROFESSIONAL JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3a4a38] dark:text-[#e9e0ca] mb-6">
            Work <span className="text-[#bc8c5f] dark:text-[#d4a373]">Experience</span>
          </h2>
          <p className="text-lg text-[#3a4a38]/90 dark:text-[#e9e0ca]/90 max-w-3xl mx-auto">
            My professional journey and the valuable skills I've gained along the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#bc8c5f]/20 to-[#3a4a38]/20 rounded-2xl blur-3xl opacity-80"></div>
              <div className="relative mb-12 p-8 bg-white dark:bg-[#3a4a38] rounded-2xl shadow-lg border border-[#bc8c5f]/20 dark:border-[#d4a373]/20">
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                  <div className="p-4 bg-[#bc8c5f]/20 dark:bg-[#d4a373]/20 rounded-full flex items-center justify-center">
                    <Briefcase className="text-[#bc8c5f] dark:text-[#d4a373]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-[#3a4a38] dark:text-[#e9e0ca]">{exp.role}</h3>
                    <div className="flex flex-col md:flex-row md:items-center text-[#3a4a38]/90 dark:text-[#e9e0ca]/90 mt-2 gap-2 md:gap-6">
                      <span className="flex items-center">
                        <Calendar className="mr-2" size={18} />
                        {exp.duration}
                      </span>
                      <span className="font-medium text-[#bc8c5f] dark:text-[#d4a373]">{exp.company}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight className="text-[#bc8c5f] dark:text-[#d4a373] mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-[#3a4a38]/90 dark:text-[#e9e0ca]/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          
          <div className="text-center pt-8">
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center gap-2 bg-[#3a4a38] hover:bg-[#2a382a] text-[#e9e0ca] px-6 py-3 rounded-lg transition-all font-medium shadow-lg hover:shadow-[#3a4a38]/30 dark:hover:shadow-[#3a4a38]/30"
            >
              <Briefcase size={18} /> View Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;