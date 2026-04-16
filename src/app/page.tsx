import { Hero } from "@/components/Hero/Hero";
import About from "@/components/About/About";
import { Principles } from "@/components/Principles/Principles";
import { Projects } from "@/components/Projects/Projects";
import { Footer } from "@/components/Footer/Footer";
import { Services } from "@/components/Services/Services";
import { Contacts } from "@/components/Contacts/Contacts";

export default function Home() {
  return (
    <main id="site-top">
      <Hero />
      <About />
      {/* <div id="resume" aria-hidden="true" /> */}
      <Projects />
      <Principles />
      <Services />
      <Contacts />
      {/* <div id="news" aria-hidden="true" /> */}
      <Footer />
    </main>
  );
}
