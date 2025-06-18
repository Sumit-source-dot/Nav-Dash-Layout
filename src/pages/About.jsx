import React from 'react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Engineering student passionate about building impactful tech solutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Background</h2>
          <p className="text-gray-700 mb-4">
            I'm currently pursuing my engineering degree with a focus on computer science and remote sensing technologies.
          </p>
          <p className="text-gray-700">
            As a campus ambassador for premier institutes like IIT Roorkee, BITS Pilani (APOGEE), and IIT Guwahati (Techniche), 
            I've developed strong leadership and technical communication skills.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Current Training</h2>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-medium text-gray-900 mb-2">IIRS ISRO</h3>
            <p className="text-gray-700">
              Remote Sensing Data Analytics for Crop Production Forecasting
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Special Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-medium text-gray-900 mb-2">AI Accessibility</h3>
            <p className="text-gray-700 text-sm">Real-time sign language interpretation</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-medium text-gray-900 mb-2">Speech Analysis</h3>
            <p className="text-gray-700 text-sm">Emotion/speed detection</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-medium text-gray-900 mb-2">Safety Tech</h3>
            <p className="text-gray-700 text-sm">AI-driven women's safety solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;