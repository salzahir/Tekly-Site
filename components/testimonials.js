import React from "react";
import Container from "./container";

const testimonials = [
  {
    name: "Alex Johnson",
    title: "CEO, ExampleCorp",
    img: { src: "/img/user1.jpg" },
    quote: "Tekly Studio transformed our digital presence and helped us grow fast."
  },
  {
    name: "Maria Lopez",
    title: "Product Manager, StartupX",
    img: { src: "/img/user2.jpg" },
    quote: "The team was responsive, innovative, and exceeded our expectations."
  },
  {
    name: "David Kim",
    title: "Startup Founder",
    img: { src: "/img/user3.jpg" },
    quote: "Their design and development work was top-notch. Highly recommend."
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-900 text-white py-20">
      <Container className="py-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-cyan-400 animate-fadeInUp">What Our Clients Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform duration-300 text-center">
              <img src={t.img.src} alt={t.name} className="rounded-full w-16 h-16 mb-4 mx-auto" />
              <p className="text-gray-300 mb-4">&quot;{t.quote}&quot;</p>
              <h4 className="text-cyan-400 font-semibold">— {t.name}, {t.title}</h4>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <img
          src={props.image.src}
          width="40"
          height="40"
          alt="Avatar"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
