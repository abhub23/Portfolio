import React from 'react';

const SkillsText = () => {
  const skills = [
    {
      category: "Languages",
      items: ["C", "JavaScript", "TypeScript", "HTML", "CSS", "Python"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "Next.js", "Express.js", "Node.js", "Tailwind CSS", "WebSocket", "Zustland",]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "SQL", "Redis (caching & database)"]
    },
    {
      category: "DevOps",
      items: ["Docker", "AWS"]
    },
    {
      category: "Tools",
      items: ["VS Code", "Postman", "Figma", "GitHub", "Git", "VMs"]
    },
    {
      category: "ORMs",
      items: ["Prisma","Drizzle"]
    },
  ];

  return (
    
      <ul className="space-y-4">
        {skills.map((skillGroup, index) => (
          <li key={index} className="flex flex-col sm:flex-row sm:items-start gap-2 text-lg">
            {/* Category Label */}

            <span className="font-medium text-gray-200 min-w-fit flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gray-500 inline-block mt-0.5"></span>
              {skillGroup.category} :
            </span>
            
            {/* Skill Items */}
            <span className="text-gray-400 leading-relaxed">
              {skillGroup.items.join(", ")}
            </span>
          </li>
        ))}
      </ul>
  );
};

export default SkillsText;