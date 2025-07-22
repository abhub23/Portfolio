'use client';

import Card from '@/components/project/Card';
import { Bricolage } from '@/utils/fonts';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { projects } from '@/components/project/projects';
import { useState } from 'react';
import { Loadbtn } from '@/components/project/Loadbtn';
import { ChevronDownIcon } from '@radix-ui/themes';
import { ChevronUpIcon } from '@radix-ui/react-icons';

const Projects = () => {
  const pathname = usePathname();

  const [num, setNum] = useState(6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`${pathname == '/projects' ? 'mb-[30px]' : 'mb-[1px]'}`}
    >
      <p
        className={`text-[26px] lg:text-[30px] ${pathname == '/projects' ? 'mt-[150px]' : 'mt-[80px]'} flex justify-center p-2 font-semibold lg:mb-4 ${Bricolage}`}
      >
        {' '}
        Proof of work
      </p>
      <div className="mb-8 grid justify-center gap-4 lg:mx-104 lg:mb-10 lg:grid-cols-2">
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
      {/* { projects.length != num ? (
        <div className="flex justify-center lg:mt-[-24px]">
          <Loadbtn name='Load more' onClick={() => setNum(c => c + 2)} icon={<ChevronDownIcon />} />
        </div>
      ) : projects.length == num ? <div className="flex justify-center lg:mt-[-24px]">
        <Loadbtn name='Show less' onClick={() => setNum(c => c > 6 ? c - 2 : c - 0)} icon={<ChevronUpIcon />} /> </div> : <></>
      } */}
    </motion.div>
  );
};

export default Projects;
