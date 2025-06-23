export default function Experience() {
  return (
    <section className="flex flex-col lg:flex-row gap-10 rounded-3xl mx-auto items-start p-6 lg:p-12 shadow-lg bg-[#0D0D0D] text-white">
      {/* Heading Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase">
          My Experience
        </h1>
      </div>

      {/* Experience Details */}
      <div className="w-full lg:w-1/2 space-y-10">
        {/* Freelance Role */}
        <div className="space-y-2">
          <div className="flex flex-col lg:flex-row justify-between">
            <h2 className="text-2xl font-semibold">Freelance Developer</h2>
            <span className="text-gray-400">Nov 2023 — Present</span>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Built several client-facing websites with responsive layouts and
            accessibility in mind. Handled projects from design to deployment
            using React, Next.js, and Tailwind CSS.
          </p>
        </div>

        <hr className="border-gray-700" />

        {/* Internship Role */}
        <div className="space-y-2">
          <div className="flex flex-col lg:flex-row justify-between">
            <h2 className="text-2xl font-semibold">Front-End Intern</h2>
            <span className="text-gray-400">Sep 2023 — Nov 2023</span>
          </div>
          <h3 className="text-[#D3E97A] text-lg font-medium">Roos Tech</h3>
          <p className="text-gray-300 leading-relaxed">
            Contributed to the development of user interfaces for SaaS products.
            Worked closely with the design team to implement pixel-perfect
            components, improved performance, and fixed accessibility issues.
          </p>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import { motion } from "framer-motion";

// export default function Experience() {
//   return (
//     <section className="relative px-6 lg:px-20 py-16 bg-[#0D0D0D] text-white">
//       {/* Timeline Line */}
//       <div className="absolute left-6 lg:left-10 top-0 bottom-0 w-[2px] bg-[#D3E97A]"></div>

//       {/* Section Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="mb-12 ml-12 lg:ml-16"
//       >
//         <h1 className="text-3xl sm:text-4xl font-bold uppercase">
//           My Experience
//         </h1>
//       </motion.div>

//       {/* Experience Entries */}
//       <div className="space-y-12">
//         {/* Freelance */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="relative pl-12 lg:pl-16"
//         >
//           <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#D3E97A]"></span>
//           <div className="flex flex-col lg:flex-row justify-between">
//             <h2 className="text-2xl font-semibold">Freelance Developer</h2>
//             <span className="text-gray-400">Nov 2023 — Present</span>
//           </div>
//           <p className="text-gray-300 mt-2">
//             Built client-facing websites with responsive layouts and
//             accessibility in mind. Handled projects from design to deployment
//             using React, Next.js, and Tailwind CSS.
//           </p>
//         </motion.div>

//         {/* Roos Tech */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="relative pl-12 lg:pl-16"
//         >
//           <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#D3E97A]"></span>
//           <div className="flex flex-col lg:flex-row justify-between">
//             <h2 className="text-2xl font-semibold">Front-End Intern</h2>
//             <span className="text-gray-400">Sep 2023 — Nov 2023</span>
//           </div>
//           <h3 className="text-[#D3E97A] text-lg font-medium mt-1">Roos Tech</h3>
//           <p className="text-gray-300 mt-2">
//             Contributed to the development of user interfaces for SaaS products.
//             Implemented pixel-perfect components, improved performance, and
//             fixed accessibility issues.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
