'use client';

import Github from '@/components/Github';
import Footer from '@/components/Footer';
import Introsec from '@/components/Introsec';
import Projects from './projects/page';
import Connectwithme from '@/components/Connectwithme';
import { motion } from 'motion/react';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Introsec />
        <Projects />
        <Github />
        <Skills/>
        <Connectwithme />
        <Footer />
      </motion.div>
    </>
  );
}
