import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Portfolio from "../components/portfolio";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import Services from "../components/services";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Tekly Studio - Creative Digital Solutions</title>
        <meta
          name="description"
          content="Tekly Studio builds innovative digital experiences, scalable IT operations, and cutting-edge AI solutions for businesses."
        />
        <link rel="icon" href="/img/logo.jpg" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Tekly Studio Benefits"
        title="Why Choose Tekly Studio">
        Tekly Studio delivers tailored digital solutions, robust DevOps, and cutting-edge AI systems to help your business scale, innovate, and succeed.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Tekly Studio Services"
        title="Our Services">
        Tekly Studio delivers tailored digital solutions, robust DevOps, and cutting-edge AI systems to help your business scale, innovate, and succeed.
      </SectionTitle>
      <Services />
      <SectionTitle
        pretitle="Explore Our Work"
        title="Discover Our Creative Projects">
        This section showcases the innovative solutions we've delivered for our clients. Each project is crafted with precision and purpose to drive results and elevate digital experiences.
      </SectionTitle>
      <Portfolio />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}
