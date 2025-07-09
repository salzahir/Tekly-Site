import React from "react";
import Container from "./container";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-900 text-white py-20">
      <Container>
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-cyan-400 animate-fadeInUp">
          Our Portfolio
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">CryptoNest Web Platform</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
              <li>A cutting-edge web application that enhances user engagement.</li>
              <li>Includes real-time crypto dashboards and responsive UI.</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">TaskMaster Mobile App</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
              <li>An innovative mobile app that simplifies daily task management.</li>
              <li>Features push notifications and seamless calendar integration.</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">AI Insights Engine</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
              <li>A robust AI solution that automates business processes.</li>
              <li>Provides predictive analytics and intelligent data visualization.</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform duration-300">
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">OpsOptimizer DevOps Suite</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
              <li>A scalable DevOps solution that optimizes IT operations.</li>
              <li>Includes automated deployment pipelines and cloud cost monitoring.</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}