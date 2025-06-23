import { AboutMe } from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Horizontal from "@/components/Horizontal";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-black min-h-screen text-white px-4 md:px-12 py-12 space-y-12">
      {/* About Section with social links, no “More about me” link */}
      <AboutMe social={true} link={false} />

      {/* Responsive Image Section */}
      <div className="w-full max-w-5xl mx-auto">
        <Image
          src="/about-image.svg"
          alt="Illustration or portrait"
          width={1200}
          height={700}
          priority
          className="w-full h-auto object-contain rounded-2xl"
        />
      </div>
      <Skills />
      <Experience />
      <Horizontal />
    </main>
  );
}
