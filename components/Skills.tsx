import { DATA } from '@/lib/data';

function Skills() {
  return (
    <div className="mx-auto mb-10 w-full max-w-[380px] lg:mb-10 lg:max-w-[700px]">
      <div className="mx-auto mb-2 text-center text-xl font-semibold text-black lg:mb-4 lg:p-0.5 lg:text-3xl dark:text-white">
        Skills
      </div>
      <div className="mx-auto flex w-full max-w-[340px] flex-wrap justify-start gap-2 px-0.5 lg:max-w-[700px] lg:px-1">
        {DATA.skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <div
              key={idx}
              className="flex h-7 w-fit items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-xs font-medium ring-2 ring-border/20 lg:h-8 lg:gap-2 lg:px-4 lg:text-sm"
            >
              <Icon className="size-3.5 lg:size-4" />
              <span className="text-foreground">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
