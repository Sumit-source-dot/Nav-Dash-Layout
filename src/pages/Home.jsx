// const Home = () => {
//   return (
//     <div className="min-h-screen p-8 bg-gradient-to-r from-white via-slate-100 to-white">
//       <header className="mb-12">
//         <h1 className="text-4xl font-bold text-gray-800 leading-tight">
//           Welcome to <span className="text-blue-600">Our Corporate Culture</span>
//         </h1>
//         <p className="text-gray-600 mt-4 text-lg max-w-3xl">
//           Empowering people, embracing innovation, and cultivating a culture of excellence.
//         </p>
//       </header>

//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Mission */}
//         <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">🚀 Our Mission</h2>
//           <p className="text-gray-700 leading-relaxed">
//             To deliver innovative solutions with integrity, passion, and excellence, while fostering a collaborative and inclusive environment.
//           </p>
//         </section>

//         {/* Vision */}
//         <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">🌍 Our Vision</h2>
//           <p className="text-gray-700 leading-relaxed">
//             To be a global leader in transforming industries through technology, with people and sustainability at the core.
//           </p>
//         </section>

//         {/* Values */}
//         <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">💡 Our Core Values</h2>
//           <ul className="list-disc list-inside text-gray-700 space-y-1">
//             <li>Integrity & Trust</li>
//             <li>Innovation & Curiosity</li>
//             <li>Empathy & Inclusion</li>
//             <li>Growth & Learning</li>
//           </ul>
//         </section>

//         {/* Culture */}
//         <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-600">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">🤝 Our Culture</h2>
//           <p className="text-gray-700 leading-relaxed">
//             A culture that encourages idea-sharing, supports diversity, rewards hard work, and nurtures both personal and professional development.
//           </p>
//         </section>
//       </div>

//       {/* Team Section */}
//       <section className="mt-16 bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-600">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">👥 Meet Our People</h2>
//         <p className="text-gray-700 max-w-4xl">
//           Our team is made up of passionate innovators, creative thinkers, and dedicated professionals who believe in working together to make a difference.
//         </p>
//       </section>

//       {/* Innovation Section */}
//       <section className="mt-12 bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-semibold text-gray-900 mb-2">🔧 Innovation at the Core</h2>
//         <p className="text-gray-800">
//           We invest in cutting-edge technologies and encourage out-of-the-box thinking to stay ahead in today’s ever-evolving landscape.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React from 'react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-blue-600">Sumit</span> 👋
        </h1>
        <p className="text-xl leading-8 text-gray-700">
          I'm a passionate engineering student specializing in full-stack development and AI solutions, 
          with additional expertise in remote sensing technologies. My mission is to build impactful 
          technology that bridges gaps between innovation and real-world problems.
        </p>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
          Professional Journey
        </h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            <span className="font-medium">Campus Ambassador</span> for premier technical institutes including:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="bg-blue-50 px-4 py-3 rounded-lg border-l-4 border-blue-500">
              <span className="font-medium">IIT Roorkee</span>
            </li>
            <li className="bg-blue-50 px-4 py-3 rounded-lg border-l-4 border-blue-500">
              <span className="font-medium">BITS Pilani (APOGEE)</span>
            </li>
            <li className="bg-blue-50 px-4 py-3 rounded-lg border-l-4 border-blue-500">
              <span className="font-medium">IIT Guwahati (Techniche)</span>
            </li>
          </ul>
          <p className="text-lg text-gray-700 mt-4">
            Currently undergoing specialized training at <span className="font-medium">IIRS ISRO</span> in 
            <span className="text-blue-600"> Remote Sensing Data Analytics for Crop Production Forecasting</span>.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
          Core Competencies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium text-blue-600 mb-3">Technical Skills</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Full-stack development (React, Node.js, MongoDB)
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                AI/ML solutions (Python, TensorFlow, OpenCV)
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                UI/UX design (Tailwind CSS, Framer Motion)
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Accessibility technology development
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium text-blue-600 mb-3">Achievements</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="font-medium">48th rank</span> in Code Crafter Challenge 2025 (among 5000+ participants)
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="font-medium">5th position</span> at IIIT Una in Meraki 25 Hackathon
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
          Notable Projects
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium text-gray-900 mb-2">Artisan Connect</h3>
            <p className="text-gray-700 mb-3">
              A platform connecting artisans across India to promote tourism and enable direct sales of 
              authentic handmade products. Facilitates cultural preservation and economic empowerment.
            </p>
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              Full-stack Development
            </span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium text-gray-900 mb-2">InnoSign</h3>
            <p className="text-gray-700 mb-3">
              An AI-powered accessibility tool that converts sign language into text and speech in real-time, 
              breaking communication barriers for the hearing-impaired community.
            </p>
            <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
              AI/ML
            </span>
            <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full ml-2">
              Accessibility Tech
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;