'use client';

import Card from '@/components/project/Card';
import { Bricolage } from '@/utils/fonts';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { projects } from '@/components/project/projects';
import { useState } from 'react';
import { Loadbtn } from '@/components/project/Loadbtn';
// import { ChevronDownIcon } from '@radix-ui/themes';
// import { ChevronUpIcon } from '@radix-ui/react-icons';

const Projects = () => {
  const pathname = usePathname();

  const [num, setNum] = useState(6);

  return (
    <div
      className={`bg-neutral-50 dark:bg-neutral-950 ${pathname == '/projects' ? 'h-screen' : ''} `}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`${pathname == '/projects' ? 'mb-[30px]' : 'mb-[1px]'}`}
      >
        <p
          className={`bg-neutral-50 text-[20px] lg:text-[30px] dark:bg-neutral-950 ${pathname == '/projects' ? 'mt-[150px]' : 'mt-[80px]'} flex justify-center p-2 font-semibold lg:mb-4 ${Bricolage}`}
        >
          Proof of work
        </p>
        <div className="flex w-full justify-center">
          <div className="mx-auto mb-8 grid justify-center gap-4 lg:grid-cols-2">
            {projects.slice(0, num).map((val, idx) => (
              <Card
                key={idx}
                Title={val.title}
                Desc={val.desc}
                SrcLink={val.srcLink}
                WebLink={val.webLink}
                Skills={val.skills}
                Imglink={val.imgLink}
              />
            ))}
          </div>
        </div>

        {/* { projects.length != num ? (
        <div className="flex justify-center lg:mt-[-24px]">
          <Loadbtn name='Load more' onClick={() => setNum(c => c + 2)} icon={<ChevronDownIcon />} />
        </div>
      ) : projects.length == num ? <div className="flex justify-center lg:mt-[-24px]">
        <Loadbtn name='Show less' onClick={() => setNum(c => c > 6 ? c - 2 : c - 0)} icon={<ChevronUpIcon />} /> </div> : <></>
      } */}
      </motion.div>
    </div>
  );
};

export default Projects;
