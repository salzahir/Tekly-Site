import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <section id="faq" className="bg-gray-900 text-white py-20">
      <Container className="!p-0">
        <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
          {faqdata.map((item, index) => (
            <div key={item.question} className="mb-5">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-white rounded-lg bg-gray-800 hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-cyan-100 focus-visible:ring-opacity-75">
                      <span>{item.question}</span>
                      <ChevronUpIcon
                        className={`${open ? "transform rotate-180" : ""
                          } w-5 h-5 text-cyan-400`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-300">
                      {item.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const faqdata = [
  {
    question: "What services does Tekly Studio offer?",
    answer: "We offer comprehensive DevOps operations, software development, ML & AI solutions, and mobile/web app development to help businesses scale and innovate."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. MVP development typically takes 2-4 weeks, while full-scale applications can take 3-6 months. We provide detailed timelines during our discovery phase."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, monitoring, and continuous optimization to ensure your solution performs at its best."
  },
  {
    question: "Can you work with our existing technology stack?",
    answer: "Absolutely! We have expertise across a wide range of technologies and can integrate with your existing systems or recommend the best stack for your specific needs."
  },
  {
    question: "How do you ensure project quality and timelines?",
    answer: "We follow agile development methodologies with regular check-ins, automated testing, CI/CD pipelines, and transparent project management to deliver high-quality solutions on time."
  }
];
