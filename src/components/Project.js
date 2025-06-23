import Image from "next/image";
import Link from "next/link";

export default function Project({
  header,
  description,
  year,
  liveText,
  git = true,
  image = "/image24.png",
  liveLink = "/",
  githubLink = "/",
}) {
  return (
    <section className="flex flex-col lg:flex-row gap-10 items-start p-6 lg:p-12 bg-[#0D0D0D] text-white rounded-3xl shadow-lg">
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <Image
          src={image}
          alt={header}
          width={800}
          height={600}
          className="rounded-xl w-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">{header}</h1>
        <p className="text-gray-300 leading-relaxed">{description}</p>

        {/* Meta Info */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-100 border-b border-gray-700 pb-1">
            Project Info
          </h2>
          <div className="flex justify-between border-b border-gray-700 py-2">
            <span className="text-gray-400">Year</span>
            <span>{year}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 py-2">
            <span className="text-gray-400">Role</span>
            <span>Front-end Developer</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-6 mt-4">
          <Link
            href={liveLink}
            className="flex items-center gap-2 text-[#D3E97A] border-b border-[#D3E97A] hover:underline"
          >
            {liveText}
            <Image src="/arrow.svg" alt="arrow" width={16} height={16} />
          </Link>

          {git && (
            <Link
              href={githubLink}
              className="flex items-center gap-2 text-[#D3E97A] border-b border-[#D3E97A] hover:underline"
            >
              See on GitHub
              <Image
                src="/bxl-github.svg"
                alt="GitHub"
                width={16}
                height={16}
              />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
