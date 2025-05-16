'use client'

import Card from '@/components/Card';
import { Bricolage } from '@/utils/fonts';
import { usePathname } from 'next/navigation';

const Projects: React.FC = () => {
  const pathname = usePathname()
  return (
    <>
      <p
        className={`lg:text-[34px] text-[24px] ${pathname == '/projects' ? 'mt-[150px]' :'mt-[32px]' } font-semibold flex justify-center p-2 lg:mb-4  ${Bricolage}`}
      >
        {' '}
        Projects
      </p>
      <div className="grid lg:grid-cols-2 gap-4 lg:mx-104 justify-center">
        <Card
          Title="To Be Decided"
          Desc="Compare your Github Metrics with the best in the Bizz. Torvalds, Karpathy, Harkirat and who not. You think you're doing your best? Lets see here mate."
          SrcLink=""
          WebLink=""
          Skills={[
            'Typescript',
            'React',
            'Express',
            'TailwindCSS',
            'Prisma',
            'PostgreSQL',
            'Gemini API',
            'Docker',
          ]}
        />

        <Card
          Title="Github Metrics"
          Desc="Compare your Github Metrics with the best in the Bizz. Torvalds, Karpathy, Harkirat and who not. You think you're doing your best? Lets see here mate."
          SrcLink="https://github.com/abhub23/Github-Metrics"
          WebLink=""
          Skills={[
            'Typescript',
            'React',
            'Express',
            'TailwindCSS',
            'Prisma',
            'PostgreSQL',
            'Gemini API',
            'Docker',
          ]}
        />

        <Card
          Title="React Flip game"
          Desc="Compare your Github Metrics with the best in the Bizz. Torvalds, Karpathy, Harkirat and who not. You think you're doing your best? Lets see here mate."
          SrcLink=""
          WebLink=""
          Skills={[
            'Typescript',
            'React',
            'Express',
            'TailwindCSS',
            'Prisma',
            'PostgreSQL',
            'Gemini API',
            'Docker',
          ]}
        />

        <Card
          Title="React Flip game"
          Desc="Created a Memory Game using React and TypeScript with dynamic grids, easy to hard levels and very cool UI to interact with."
          SrcLink="https://github.com/abhub23/React-Flip-Game"
          WebLink=""
          Skills={[
            'Typescript',
            'React',
            'Express',
            'TailwindCSS',
            'Prisma',
            'PostgreSQL',
            'Gemini API',
            'Docker',
          ]}
        />

        <Card
          Title="React Flip game"
          Desc="Compare your Github Metrics with the best in the Bizz. Torvalds, Karpathy, Harkirat and who not. You think you're doing your best? Lets see here mate."
          SrcLink=""
          WebLink=""
          Skills={[
            'Typescript',
            'React',
            'Express',
            'TailwindCSS',
            'Prisma',
            'PostgreSQL',
            'Gemini API',
            'Docker',
          ]}
        />

        <Card
          Title="React Flip game"
          Desc="Compare your Github Metrics with the best in the Bizz. Torvalds, Karpathy, Harkirat and who not. You think you're doing your best? Lets see here mate."
          SrcLink=""
          WebLink=""
          Skills={[
            'Typescript',
            'React',
            'Express',
            'TailwindCSS',
            'Prisma',
            'PostgreSQL',
            'Gemini API',
            'Docker',
          ]}
        />
      </div>
    </>
  );
};

export default Projects;
