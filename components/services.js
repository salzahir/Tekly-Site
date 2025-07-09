import React from "react";

const services = [
  {
    title: "DevOps Operations",
    items: [
      "CI/CD pipelines, infrastructure automation, release management",
      "Scalable and reliable IT architectures",
      "Containerization & Orchestration: Docker, Kubernetes, Helm",
      "Cloud Infrastructure Management: AWS, Azure, GCP setup and optimization",
      "Monitoring & Logging: Prometheus, Grafana, ELK Stack",
      "Configuration Management: Ansible, Terraform, Chef/Puppet",
      "Security & Compliance integration",
      "Performance Optimization: system tuning and cloud cost management",
      "Disaster Recovery & Backups",
      "DevOps Consulting",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Development",
    items: [
      "UX/UI Design: intuitive and engaging user experiences",
      "Backend & Frontend Development: scalable, secure, high-performance applications",
      "Custom Software Development",
      "Enterprise Software Development",
      "SAAS Development",
      "MVP Development: quick product validation",
      "Software Testing",
      "Software Consulting: tech strategy and architecture guidance",
    ],
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "ML & Agentic AI",
    items: [
      "Machine Learning Model Development: supervised, unsupervised, reinforcement learning",
      "Generative AI Solutions: custom LLM-based models (GPT, Claude, Gemini)",
      "Agentic AI Systems: autonomous AI agents",
      "AI Workflow Automation",
      "Natural Language Processing (NLP): chatbots, sentiment analysis, language understanding",
      "Predictive Analytics & Forecasting",
    ],
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Mobility & Apps",
    items: [
      "Mobile App Development",
      "Android App Development",
      "iOS App Development",
      "Web App Development",
    ],
    color: "from-green-500 to-teal-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-[1.03] transition-transform duration-300 border-t-4 border-transparent bg-gradient-to-br ${service.color} bg-clip-padding`}
              style={{ borderTopColor: "rgba(0,0,0,0.1)" }}
            >
              <h4 className="text-2xl font-semibold mb-4 text-cyan-200 drop-shadow-lg">
                {service.title}
              </h4>
              <ul className="list-disc list-inside text-gray-200 space-y-2 text-base pl-2">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}