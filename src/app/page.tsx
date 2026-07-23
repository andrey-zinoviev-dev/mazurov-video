import { Hero } from "@/components/Hero/Hero";
import About from "@/components/About/About";
import { Projects } from "@/components/Projects/Projects";
import { Services } from "@/components/Services/Services";

export default function Home() {
  return (
    <main id="site-top">
      <Hero />
      <About />
      <Projects />
      <Services />
    </main>
  );
}
