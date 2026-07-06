import CTA from "@/components/landing/CTA";
import ClientProjects from "@/components/landing/ClientProjects";
import DevDocs from "@/components/landing/DevDocs";
import Education from "@/components/landing/Education";
import Experience from "@/components/landing/Experience";
import Github from "@/components/landing/Github";
import Hero from "@/components/landing/Hero";
import Journey from "@/components/landing/Journey";
import Projects from "@/components/landing/Projects";
import Skills from "@/components/landing/Skills";
import Terminal from "@/components/landing/Terminal";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Skills />
      <Experience />
      <ClientProjects />
      <Projects />
      <DevDocs />
      <Education />
      {/* <Github /> */}
      <Journey />
      <CTA />
    </main>
  );
}
