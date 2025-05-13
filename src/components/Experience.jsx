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
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl blur-2xl opacity-70"></div>
      <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-6 mb-6">
          <div className="p-4 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Briefcase className="text-blue-700" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{item.role}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Building size={18} className="text-gray-600" />
                <span>{item.company}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar size={18} className="text-gray-600" />
                <span>{item.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={18} className="text-gray-600" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        </div>

        <ul className="space-y-3 md:space-y-4">
          {item.responsibilities.map((point, idx) => (
            <li key={idx} className="flex items-start">
              <div className="mr-3 mt-1.5 h-4 w-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <ChevronRight className="text-blue-700" size={12} />
              </div>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 mt-8">
            PROFESSIONAL JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Leveraging technical expertise and innovative approaches to deliver impactful solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
          {experiences.map(exp => <ExperienceItem key={exp.id} item={exp} />)}
        </div>

        <div className="text-center pt-12 md:pt-16">
          <a 
            href="https://drive.google.com/file/d/1CHSmFEME9H1IG4JfVafxM_y4MmNasv2K/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium shadow-lg hover:shadow-xl"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;