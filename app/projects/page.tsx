'use client';

import Card from '@/components/Card';
import { Bricolage } from '@/utils/fonts';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

const Projects: React.FC = () => {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`${pathname == '/projects' ? 'mb-[30px]' : 'mb-[1px]'}`}
    >
      <p
        className={`text-[26px] lg:text-[32px] ${pathname == '/projects' ? 'mt-[150px]' : 'mt-[80px]'} flex justify-center p-2 font-semibold lg:mb-4 ${Bricolage}`}
      >
        {' '}
        Projects
      </p>
      <div className="grid justify-center gap-4 lg:mx-104 lg:grid-cols-2">
        <Card
          Title="Privado"
          Desc="Privado is a fast, secure private chat app powered by Socket.IO. Instantly connect, message friends, and enjoy real-time private conversations with no distractions. Simple, smooth, and built for people who value privacy and speed."
          SrcLink="https://github.com/abhub23/Web-Socket-Server-Sets"
          WebLink="https://privado.abdullahtech.dev"
          Skills={[
            'Typescript',
            'React',
            'NextJS',
            'Express',
            'Node JS',
            'Socket.IO',
            'TailwindCSS',
            'Golang',
            'Vercel',
          ]}
          Imglink="/chat.png"
        />

        <Card
          Title="Github Metrics"
          Desc="Now you can Compare your Github Stats with the best in the world, be it Torvalds, Karpathy, Harkirat and who not. You think you're doing your best? have better PR's than someone? Lets see here mate."
          SrcLink="https://github.com/abhub23/Github-Metrics"
          WebLink="https://githubstats.abdullahtech.dev"
          Skills={['Typescript', 'React', 'Express', 'TailwindCSS', 'Vite', 'Gemini', 'Zustand']}
          Imglink="/githublogo.png"
        />

        <Card
          Title="React Flip game"
          Desc="Created a Fun to play Memory Game using React and TypeScript with dynamic grids support, dark and light themes and easy to hard levels with a very cool UI to interact with. Hope you enjoy it."
          SrcLink="https://github.com/abhub23/React-Flip-Game"
          WebLink="https://flipgame.abdullahtech.dev/"
          Skills={[
            'Typescript',
            'React',
            'TailwindCSS',
            'next - themes',
            'grids',
            'Vercel',
            'Zustand',
          ]}
          Imglink="/flipgame.webp"
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
          Imglink="/chat.png"
        />

        <Card
          Title="Go http server"
          Desc="Made an Http Server in Go from scratch. A reliable Tcp connection using go std net library and unix system calls interacting with low level networking of the operating system."
          SrcLink="https://github.com/abhub23/http-Server-Go"
          WebLink="https://github.com/abhub23/http-Server-Go"
          Skills={[
            'Golang',
            'Networking',
            'HTTP',
            'Operating System',
            'TCP',
            'Sys Calls',
            'Unix',
          ]}
          Imglink="/gologo.webp"
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
          Imglink="/chat.png"
        />
      </div>
    </motion.div>
  );
};

export default Projects;
