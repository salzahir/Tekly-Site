import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Why Choose Tekly Studio",
  desc: "Tekly Studio delivers cutting-edge solutions that elevate businesses through robust technology, seamless user experiences, and scalable architectures.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Comprehensive DevOps Expertise",
      desc: "We provide top-tier CI/CD, cloud management, and performance optimization to streamline your operations.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Advanced Software Development",
      desc: "From intuitive UX/UI to scalable backend systems, we build custom solutions that grow with your business.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Innovative AI & Automation",
      desc: "We integrate AI-driven systems and automation to future-proof your workflows and drive results.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Tekly Studio Advantages",
  desc: "We combine mobile responsiveness, modern frameworks, and user-centric design to deliver high-performance digital products.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile-First Design",
      desc: "Our solutions are fully responsive and optimized for all devices.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Powered by Modern Tech",
      desc: "We leverage Next.js, TailwindCSS, and scalable backend technologies to maximize efficiency.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Seamless Dark & Light Modes",
      desc: "All our designs come with easy-to-use dark and light mode support for superior user experiences.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
