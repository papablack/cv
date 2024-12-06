import React from 'react';
import {
  Calendar,
  Briefcase,
  Code,
  Globe,
  Mail,
  Phone,
  GraduationCap,
  Languages,
  Star,
  Package,
  Download,
  Printer
} from 'lucide-react';
import { cvData } from './data';
import { SectionTitle, SkillTag } from './components';
import { Experience, Education, Language, Skill, Project, SkillLevel } from './types';

const CV: React.FC = () => {
  const handleExportJSON = (): void => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cvData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "cv_data.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handlePrint = (): void => {
    window.print();
  };

  return (
    <>
      <style>
        {`
          @media print {
            body {
              margin: 0;
              padding: 0;
              background: white !important;
              color: black !important;
              width: 100% !important;
              height: 100% !important;
            }
            #cv-content {
              background: white !important;
              color: black !important;
              border: none !important;
              box-shadow: none !important;
              width: 100% !important;
              height: 100% !important;
              margin: 0 !important;
              padding: 2cm !important;
            }
            .section-title {
              color: black !important;
              font-size: 2rem !important;
              text-shadow: 2px 2px 4px rgba(192, 192, 192, 0.8) !important;
              border: none !important;
              border-bottom: 3px solid #808080 !important;
              background: none !important;
              padding-bottom: 0.5rem;
              break-inside: avoid;
            }
            .section-title span {
              color: black !important;
              background: none !important;
              -webkit-text-fill-color: black !important;
            }
            .header-section {
              background: white !important;
              border: none !important;
              border-bottom: 3px solid #808080 !important;
              padding-bottom: 1rem !important;
              break-inside: avoid;
            }
            .header-title {
              background: none !important;
              color: black !important;
              font-size: 3rem !important;
              text-shadow: 3px 3px 6px rgba(192, 192, 192, 0.8) !important;
              -webkit-text-fill-color: black !important;
            }
            h3 {
              font-size: 1.5rem !important;
              color: black !important;
              break-after: avoid;
            }
            .text-gray-100, .text-gray-300, .text-gray-400 {
              color: black !important;
            }
            .border-gray-700 {
              border: none !important;
              border-bottom: 3px solid #808080 !important;
            }
            .border-l-2 {
              border: none !important;
              border-bottom: 3px solid #808080 !important;
              padding-bottom: 1rem;
              margin-bottom: 1rem;
            }
            .page-break {
              break-before: page !important;
              margin-top: 0 !important;
              padding-top: 2cm !important;
            }
            section {
              break-inside: avoid;
            }
            .project-entry {
              break-inside: avoid;
              border: none !important;
              border-bottom: 3px solid #808080 !important;
              padding-bottom: 1rem;
              margin-bottom: 1rem;
            }
            .export-buttons {
              display: none !important;
            }        
          }   

          .project-entry a {
              font-size: 14px;
              margin-top: 5px;
              display: block;
              color: #0066cc !important;
              text-decoration: underline;
          }

          @page {
            margin: 0;
            size: A4;
          }
        `}
      </style>
      <div className="min-h-screen bg-black py-10 px-4 sm:px-6 lg:px-8">
        {/* Export Buttons */}
        <div className="max-w-4xl mx-auto mb-4 flex gap-4 export-buttons">
          <button
            onClick={handleExportJSON}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-zinc-700 to-gray-600 text-gray-100 rounded-lg hover:from-zinc-600 hover:to-gray-500 transition-all"
          >
            <Download className="w-5 h-5 mr-2" />
            Export CV Data as JSON
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-600 text-gray-100 rounded-lg hover:from-blue-600 hover:to-blue-500 transition-all"
          >
            <Printer className="w-5 h-5 mr-2" />
            Print CV
          </button>
        </div>

        <div id="cv-content" className="max-w-4xl mx-auto bg-zinc-900 rounded-xl overflow-hidden border border-transparent bg-gradient-to-r from-zinc-900 via-gray-800 to-zinc-900 shadow-2xl">
          {/* Header Section */}
          <div className="header-section bg-gradient-to-r from-gray-900 to-zinc-800 p-8 border-b border-gray-700">
            <div className="flex flex-wrap md:flex-nowrap gap-8 items-start">
              {/* Profile Image */}
              <div className="w-48 h-48 flex-shrink-0">
                <img
                  src={cvData.personal.image || 'https://via.placeholder.com/200'}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg border-2 border-gray-700"
                />
              </div>

              {/* Personal Information */}
              <div className="flex-grow">
                <h1 className="header-title text-4xl font-bold mb-2 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-transparent bg-clip-text">
                  {cvData.personal.name}
                </h1>
                <h2 className="text-2xl mb-4 text-gray-100">
                  {cvData.personal.title}
                </h2>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center text-gray-100">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{cvData.personal.birthDate}</span>
                  </div>
                  <div className="flex items-center text-gray-100">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>{cvData.personal.email}</span>
                  </div>
                  <div className="flex items-center text-gray-100">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>{cvData.personal.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-100">
                    <Globe className="w-5 h-5 mr-2" />
                    <a 
                      href={cvData.personal.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      {cvData.personal.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8 text-gray-100">
            {/* Professional Summary */}
            <section className="mb-12">
              <SectionTitle icon={Code} title="Professional Summary" />
              <p className="text-gray-300 leading-relaxed">
                {cvData.professionalSummary}
              </p>
            </section>

            {/* Experience */}
            <section className="mb-12 page-break">
              <SectionTitle icon={Briefcase} title="Professional Experience" />

              <div className="space-y-6">
                {cvData.experience.map((exp: Experience, index: number) => (
                  <div key={index} className="border-l-2 border-gray-700 pl-4">
                    <h3 className="text-xl font-semibold text-gray-100">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company} • {exp.period}</p>
                    <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                      {exp.achievements.map((achievement: string, i: number) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Earlier Positions */}
                <div className="border-l-2 border-gray-700 pl-4">
                  <h3 className="text-xl font-semibold text-gray-100">Earlier Positions</h3>
                  <p className="text-gray-400">2012 - 2017</p>
                  <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                    {cvData.earlierPositions.map((position: string, index: number) => (
                      <li key={index}>{position}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-12 page-break">
              <SectionTitle icon={Star} title="Technical Skills" />
              <div className="flex flex-wrap gap-2">
                {cvData.skills.map((skill: Skill, index: number) => (
                  <SkillTag key={index} level={skill.level}>{skill.name}</SkillTag>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-12 page-break">
              <SectionTitle icon={GraduationCap} title="Education" />
              <div className="space-y-4">
                {cvData.education.map((edu: Education, index: number) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-100">{edu.school}</h3>
                    <p className="text-gray-400">{edu.period}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="mb-12">
              <SectionTitle icon={Languages} title="Languages" />
              <div className="flex flex-wrap gap-2">
                {cvData.languages.map((lang: Language, index: number) => (
                  <SkillTag key={index} level={lang.level as SkillLevel}>{`${lang.language}`}</SkillTag>
                ))}
              </div>
            </section>

            {/* Notable Projects */}
            <section className="mb-12 page-break">
              <SectionTitle icon={Package} title="Notable Projects" />

              <div className="space-y-6">
                {cvData.projects.map((project: Project, index: number) => (
                  <div key={index} className="project-entry border-l-2 border-gray-700 pl-4">
                    <h3 className="text-xl font-semibold text-gray-100">
                      {project.name}
                    </h3>
                    { project.url ? <a 
                        href={`${project.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                      >
                        {project.url}
                      </a> : null}
                    <p className="text-gray-300 mt-2">
                      {project.description}
                    </p>
                    <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                      {project.features.map((feature: string, i: number) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <footer>
           CV <a href="https://github.com/papablack/cv" target="_blank">application</a> created by Papa Black and made with help of a <a href="https://www.anthropic.com/claude" target="_blank">friend</a>
        </footer> 
      </div>
    </>
  );
};

export default CV;
