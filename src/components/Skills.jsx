function Skills() {
  return (
    <div className="p-8 border-b border-gray-700">
      <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>

      <div className="flex flex-wrap gap-3 text-sm">
        {[
          "Node.js",
          "Express",
          "MongoDB",
          "PostgreSQL",
          "JWT",
          "React",
          "TypeScript",
          "Postman API Tool",
        ].map((skill) => (
          <span key={skill} className="border border-gray-600 px-3 py-1">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
