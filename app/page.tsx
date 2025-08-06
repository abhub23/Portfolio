import Github from '@/components/Github';
import Footer from '@/components/Footer';
import Introsec from '@/components/Introsec';
import Projects from './projects/page';
import Connectwithme from '@/components/Connectwithme';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience/Experience';
import { Bricolage } from '@/utils/fonts';

export default function Home() {
  return (
    <div className={`bg-neutral-50 dark:bg-neutral-950 ${Bricolage}`}>
      <Introsec />
      <Projects />
      <Experience />
      <Github />
      <Skills />
      <Connectwithme />
      <Footer />
    </div>
  );
}
