import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Services from "@/components/Services";
import Projects from "@/components/projects";
import Portfolio from "@/components/Portfolio";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Services/>
      <Projects />
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  );
}
