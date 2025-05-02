import { useState } from 'react';
import { Briefcase, Calendar, ChevronRight, Download, Building, MapPin } from 'lucide-react';

const Experience = () => {
  const [experiences] = useState([
    {
      id: 1,
      role: "Full Stack Web Development with DevOps Intern",
      company: "Cinntra InfoTech, Noida",
      location: "Noida, India",
      duration: "Aug 2024 – Sep 2024",
      responsibilities: [
        "Developed and deployed full-stack web applications using Django, React, and JWT authentication",
        "Designed and implemented RESTful APIs, integrating frontend with backend",
        "Managed background tasks and web scraping using Redis, Celery, and BeautifulSoup",
        "Utilized Docker for containerization, reducing setup time by 40%",
        "Optimized MySQL database queries, improving performance by 15%",
        "Conducted unit testing with Pytest, achieving 50% test coverage"
      ]
    },
    {
      id: 2,
      role: "President",
      company: "InfoTech Innovators Society",
      location: "MAIT, Delhi",
      duration: "Apr 2025 – Present",
      responsibilities: [
        "Leading a team of 15+ executive members to organize technical events and workshops",
        "Spearheading hackathons and industry-connected events to foster innovation",
        "Creating platforms for students to showcase technical projects",
        "Organizing mentorship programs with industry professionals",
        "Fostering cross-disciplinary collaboration among IT students"
      ]
    }
  ]);

  const ExperienceItem = ({ item }) => (
    <div className="relative group">
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-blue-200 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="p-3 sm:p-4 md:p-5 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-300">
            <Briefcase className="text-blue-600" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900">{item.role}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-6 mt-2 md:mt-3">
              <div className="flex items-center gap-1 text-gray-600 text-sm md:text-base">
                <Building size={16} className="flex-shrink-0" />
                <span>{item.company}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600 text-sm md:text-base">
                <Calendar size={16} className="flex-shrink-0" />
                <span>{item.duration}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600 text-sm md:text-base">
                <MapPin size={16} className="flex-shrink-0" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        </div>

        <ul className="space-y-3 md:space-y-4 ml-1 sm:ml-2">
          {item.responsibilities.map((point, idx) => (
            <li key={idx} className="flex items-start group/item">
              <div className="mr-3 md:mr-4 mt-1 h-4 w-4 md:h-5 md:w-5 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0 group-hover/item:from-blue-200 group-hover/item:to-blue-100 transition-all duration-300">
                <ChevronRight className="text-blue-600" size={12} />
              </div>
              <span className="text-sm md:text-base text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-white mt-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            PROFESSIONAL JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 md:mb-8">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Leveraging technical expertise and innovative approaches to deliver impactful solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          {experiences.map(exp => <ExperienceItem key={exp.id} item={exp} />)}
        </div>

        <div className="text-center pt-10 sm:pt-12 md:pt-16">
          <a 
            href="https://drive.google.com/file/d/10PH7sSPFUe3h-qgNhW-pMggGxmRvGRxb/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            <Download size={16} className="flex-shrink-0" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;