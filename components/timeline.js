import React, { useState } from "react";

const steps = [
    {
        title: "Discovery & Strategy",
        description: "We start by understanding your business goals and target audience to craft a tailored strategy.",
    },
    {
        title: "Design & Prototyping",
        description: "Our team creates wireframes and prototypes to visualize your product before development.",
    },
    {
        title: "Development",
        description: "We build your MVP using modern technologies, ensuring scalability and performance.",
    },
    {
        title: "Launch & Iterate",
        description: "After launch, we gather feedback and iterate to improve your product continuously.",
    },
];

export default function Timeline() {
    const [step, setStep] = useState(0);

    return (
        <section id="timeline" className="bg-gray-900 text-white py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-cyan-400 animate-fadeInUp">
                    Our Timeline to Success
                </h3>
                <div className="w-full flex justify-center">
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-xl w-full hover:scale-105 transition-transform duration-300">
                        <p className="text-lg text-gray-400 mb-4 text-center">
                            Step <span className="text-cyan-400 font-bold">{step + 1}</span> of <span className="text-cyan-400 font-bold">{steps.length}</span>
                        </p>
                        <h4 className="text-xl font-semibold mb-4 text-cyan-400 text-center">
                            {steps[step].title}
                        </h4>
                        <p className="text-gray-300 mb-4 text-center">{steps[step].description}</p>
                        <div className="flex justify-between items-center mt-6">
                            <button
                                onClick={() => setStep((prevStep) => Math.max(prevStep - 1, 0))}
                                className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${step === 0
                                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                                        : "bg-cyan-400 text-black hover:bg-cyan-300"
                                    }`}
                                disabled={step === 0}
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => setStep((prevStep) => Math.min(prevStep + 1, steps.length - 1))}
                                className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${step === steps.length - 1
                                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                                        : "bg-cyan-400 text-black hover:bg-cyan-300"
                                    }`}
                                disabled={step === steps.length - 1}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
