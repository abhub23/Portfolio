import Github from '@/components/Github';
import Footer from '@/components/Footer';
import Introsec from '@/components/Introsec';
import Projects from './projects/page';
import Connectwithme from '@/components/Connectwithme';
import Skills from '@/components/Skills';
import { Bricolage } from '@/utils/fonts';
import Experience from '@/components/Experience/Experience';

export default function Home() {
  return (
    <>
      <Introsec />
      <Projects />
      <Experience />
      <Github />
      <Skills />
      <Connectwithme />
      <Footer />
    </>
  );
}
