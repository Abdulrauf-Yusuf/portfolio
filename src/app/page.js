import { AboutMe } from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Horizontal from "@/components/Horizontal";
import Project from "@/components/Project";
import ProjectHeader from "@/components/ProjectHeader";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white space-y-24 px-4 md:px-12 py-12">
      <Hero />
      <Horizontal />
      <ProjectHeader />

      <Project
        header="Promotional landing page for our favorite show"
        description="Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures."
        year={2025}
        liveLink="https://your-live-site.com"
        githubLink="https://github.com/your-repo"
        liveText=" Live Demo"
      />

      <Project
        header="Blog site for World News"
        description="Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development."
        year={2024}
        git={false}
        image="/blog.svg"
        liveLink="https://worldnews.com"
        liveText="View project"
      />

      <Project
        header="E-commerce product page"
        description="Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development."
        year={2022}
        git={true}
        image="/blog.svg"
        liveLink="https://worldnews.com"
        liveText="Live Demo"
      />
      <Horizontal />
      <AboutMe social={false} />
    </main>
  );
}
