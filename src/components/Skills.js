const skillData = [
  {
    id: 1,
    skill: "HTML",
  },
  {
    id: 2,
    skill: "CSS",
  },
  {
    id: 3,
    skill: "JAVASCRIPT",
  },
  {
    id: 4,
    skill: "TAILWINDCSS",
  },
  {
    id: 5,
    skill: "REACT",
  },
  {
    id: 6,
    skill: "NEXTJS",
  },
  {
    id: 7,
    skill: "IT SUPPORT",
  },
];
export function Skill({ skill }) {
  return (
    <li className="rounded-full px-4 py-2 border-[1px] border-gray-500 m-2 inline-block">
      <span>{skill}</span>
    </li>
  );
}
export default function Skills() {
  return (
    <section className="flex flex-col lg:flex-row mx-auto items-start gap-10 rounded-3xl shadow-lg p-6 lg:p-12 bg-[#0D0D0D]">
      <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-3xl font-bold tracking-tight uppercase">
          My Capabilities
        </h1>
      </div>
      <div className="w-full lg:w-1/2 space-y-6">
        <p className="text-gray-300 leading-relaxed">
          I am always looking to add more skills.Morbi egestas neque eu blandit
          fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus
          faucibus tristique ut et dolor.
        </p>
        <ul>
          {skillData.map((skill) => (
            <Skill key={skill.id} skill={skill.skill} />
          ))}
        </ul>
      </div>
    </section>
  );
}
