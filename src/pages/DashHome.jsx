import React from 'react';
import { Link } from 'react-router-dom';

const DashHome = () => {
  const projects = [
    {
      title: "Artisan Connect / TravelIntel",
      description: "Tourism platform connecting local artisans with global audience",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "InnoSign",
      description: "AI-powered sign language to speech/text conversion",
      tags: ["Python", "OpenCV", "MediaPipe"],
      link: "#"
    },
    {
      title: "Quiz Application",
      description: "Interactive quiz with timers and scoring logic",
      tags: ["React", "Tailwind CSS"],
      link: "#"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Hi, I'm Sumit</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Engineering Student | Full-stack Developer | AI Enthusiast
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Frontend</h3>
          <ul className="space-y-2 text-gray-700">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Backend & AI</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Node.js/Express</li>
            <li>Python</li>
            <li>TensorFlow/PyTorch</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Experience</h3>
          <ul className="space-y-2 text-gray-700">
            <li>CodeAlpha</li>
            <li>CodSoft</li>
            <li>Techlearns Academy</li>
            <li>Tryst IIT Delhi</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to={project.link} className="text-blue-600 hover:underline">View Project →</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashHome;