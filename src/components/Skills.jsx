function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "JWT Authentication",
        "Auth.js",
      ],
    },
    {
      title: "Database & ORM",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Prisma",
        "Supabase",
      ],
    },
    {
      title: "Tools & Version Control",
      skills: [
        "Git",
        "GitHub",
        "Postman",
      ],
    },
  ];

  return (
    <div className="p-8 border-b border-gray-700">
      <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>

      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-lg font-semibold mb-3 text-gray-200">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-gray-600 px-3 py-1 rounded-md text-sm hover:border-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
