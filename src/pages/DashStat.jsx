import React from 'react';

const data = [
  { name: 'Frontend', value: 90 },
  { name: 'Backend', value: 85 },
  { name: 'AI/ML', value: 80 },
  { name: 'UI/UX', value: 75 },
  { name: 'Data Analytics', value: 70 },
];

const achievements = [
  { title: "Code Crafter Challenge 2025", detail: "Ranked 48th among 5000+ participants" },
  { title: "Meraki 25 Hackathon", detail: "5th position at IIIT Una" },
  { title: "Campus Ambassador", detail: "IIT Roorkee, BITS Pilani, IIT Guwahati" }
];

const DashStat = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Stats & Achievements</h1>
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Skill Proficiency</h2>
          <div className="space-y-4">
            {data.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="text-gray-700">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Achievements</h2>
          <div className="space-y-6">
            {achievements.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Organizational Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <h3 className="font-medium text-gray-900">CodeAlpha</h3>
            <p className="text-gray-700 text-sm">Web Development Intern</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <h3 className="font-medium text-gray-900">CodSoft</h3>
            <p className="text-gray-700 text-sm">AI/ML Intern</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <h3 className="font-medium text-gray-900">Techlearns Academy</h3>
            <p className="text-gray-700 text-sm">Technical Trainer</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <h3 className="font-medium text-gray-900">Tryst IIT Delhi</h3>
            <p className="text-gray-700 text-sm">Event Coordinator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashStat;