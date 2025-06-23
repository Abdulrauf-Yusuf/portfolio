import Link from "next/link";
import Image from "next/image";
export function AboutMe({ social = false, link = true }) {
  return (
    <section className="flex flex-col lg:flex-row gap-10 p-6 lg:p-12 bg-[#0D0D0D] text-white rounded-3xl ">
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl font-bold tracking-tight uppercase">
          About me
        </h1>
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl font-bold tracking-tight">
          I am a front-end developer based in Africa. Has Actuarial Science
          background.
        </h1>
        <p className="text-gray-300 leading-relaxed">
          Hi, I’m Abdulrauf Youseph — a curious and creative Frontend Developer
          with a strong foundation in JavaScript, React, and Next.js. I build
          clean, responsive, and user-focused web applications that solve
          real-world problems. With a background in Actuarial Science, I
          approach development with a data-driven mindset and a deep
          appreciation for structure, logic, and impact. I’ve built projects
          like BetaHouse, a real estate app featuring dynamic listings, search
          filters, and admin tools—all styled with Tailwind CSS and powered by
          real APIs. Beyond the code, I’m a big fan of Ewa Aganyin and soft
          bread—a combo that reminds me to keep things simple, satisfying, and
          full of flavor. Just like the experiences I strive to create on the
          web. Let’s build something awesome together. I’m open to freelance
          work, internships, and full-time roles on teams that value clean code
          and creative thinking.
        </p>
        {link && (
          <span className="inline-block mt-5">
            <Link
              href="/about"
              className=" text-[#D3E97A] border-b uppercase border-[#D3E97A] hover:underline"
            >
              More about me
            </Link>
          </span>
        )}
        {social && (
          <div className="flex items-center gap-6 mt-6">
            {/* Contact Button */}
            <Link href="/contact" className=" w-50">
              <button className="md:hidden relative bg-[#D3E97A]  uppercase text-black text-left font-semibold px-4 py-3 w-full rounded-full overflow-hidden hover:scale-105 transition-transform">
                Contact Me
                <span className="absolute top-0 left-19 w-full h-full ">
                  <Image
                    src="/circle.svg"
                    alt="Decorative circle"
                    fill
                    className="object-contain"
                  />
                </span>
              </button>
              <button className="hidden md:block relative bg-[#D3E97A]  uppercase text-black font-semibold px-8 py-3 w-full rounded-full overflow-hidden hover:scale-105 transition-transform">
                Contact Me
                <span className="absolute top-0 left-18 w-full h-full ">
                  <Image
                    src="/dot.svg"
                    alt="Decorative circle"
                    fill
                    className="object-contain"
                  />
                </span>
              </button>
            </Link>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                className="rounded-full bg-[#222222] px-3 py-3"
              >
                <Image
                  src="/bxl-linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://github.com/your-username"
                target="_blank"
                className="rounded-full bg-[#222222] px-3 py-3"
              >
                <Image
                  src="/bxl-github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
