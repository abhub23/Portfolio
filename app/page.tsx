'use client';

import Github from '@/components/Github';
import Footer from '@/components/Footer';
import Cta from '@/components/cta';
import Projects from './projects/page';
import Connect from '@/components/Connect';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience/Experience';
import { Bricolage } from '@/utils/fonts';
import { cn } from '@/lib/utils';
import useSmoothScroll from '@/components/useSmoothScroll';

export default function Home() {
  useSmoothScroll();
  return (
    <div className="bg-neutral-50 dark:bg-neutral-950">
      <div className={cn('mx-auto w-full max-w-[700px]', Bricolage)}>
        <Cta />
        <Projects />
        <Experience />
        <Github />
        <Skills />
        <Connect />
        <Footer />
      </div>
    </div>
  );
}
