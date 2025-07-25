import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 gap-10">
      {/* Left section */}
      <div className="w-full lg:w-1/2 space-y-6 ">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight uppercase">
          Hi, I am <br /> Abdulrauf Youseph.
        </h1>
        <p className="text-lg text-gray-300">
          An Africa-based front-end developer passionate about building
          accessible and user-friendly websites.
        </p>

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
      </div>

      {/* Right image section */}
      <div className="w-full lg:w-1/2 relative flex justify-center items-center">
        <Image
          src="/image.svg"
          alt="Hero Illustration"
          width={500}
          height={500}
          className="object-contain w-full h-auto max-w-md lg:max-w-full"
          priority
        />
      </div>
    </section>
  );
}
