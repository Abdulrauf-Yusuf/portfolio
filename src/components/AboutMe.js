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
          I am a front-end developer based in Sydney. Has Mechanical Engineering
          background.
        </h1>
        <p className="text-gray-300 leading-relaxed">
          I am a front-end developer based in Sydney looking for exciting
          opportunities. Has Mechanical Engineering background. Likes to focus
          on accessibility when developing. Passionate and curious about solving
          problems. Currently, I’m exploring Reactjs, Webflow and a bit of
          Designing. While I am not programming, I enjoy playing football,
          photography and playing Valorant. Learning more to improve skill
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
