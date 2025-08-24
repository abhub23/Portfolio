'use client';

import Github from '@/components/Github';
import Footer from '@/components/Footer';
import Introsec from '@/components/Introsec';
import Projects from './projects/page';
import Connectwithme from '@/components/Connectwithme';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience/Experience';
import { Bricolage } from '@/utils/fonts';
import { cn } from '@/lib/utils';
import useSmoothScroll from '@/components/useSmoothScroll';

export default function Home() {
  useSmoothScroll();
  return (
    <div className="bg-neutral-50 dark:bg-neutral-950">
      <div className={cn('mx-auto w-full max-w-[900px]', Bricolage)}>
        <Introsec />
        <Projects />
        <Experience />
        <Github />
        <Skills />
        <Connectwithme />
        <Footer />
      </div>
    </div>
  );
}
