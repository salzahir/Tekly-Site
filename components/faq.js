import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What services does Tekly Studio offer?",
    answer: "Tekly Studio offers DevOps Operations, Custom Software Development, Mobile App Development, and cutting-edge AI solutions, including Agentic AI systems and NLP tools.",
  },
  {
    question: "Is Tekly Studio focused on backend or frontend development?",
    answer: "Tekly Studio specializes in both backend and frontend development, delivering scalable, secure, and high-performance applications across web and mobile platforms.",
  },
  {
    question: "What technologies does Tekly Studio use?",
    answer: "We leverage modern technologies like Docker, Kubernetes, AWS, Azure, GCP, Prisma, Node.js, React, Next.js, and advanced AI frameworks for machine learning and NLP.",
  },
  {
    question: "Do you offer deployment and DevOps support?",
    answer: "Yes, we provide full DevOps support including CI/CD pipelines, infrastructure automation, performance optimization, and cloud management for AWS, Azure, and GCP.",
  },
  {
    question: "Can Tekly Studio build mobile applications?",
    answer: "Absolutely. We offer development for Android, iOS, and web-based mobile applications to ensure your product reaches users across all platforms.",
  },
  {
    question: "How can I get started with Tekly Studio?",
    answer: "Simply fill out the contact form on our website or reach out via email. Our team will promptly schedule a consultation to understand your project requirements."
  },
];
