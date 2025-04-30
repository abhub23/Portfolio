'use client';

import React from 'react';
import { Link, Separator, Tooltip, IconButton } from '@radix-ui/themes';
import {
  GitHubLogoIcon,
  SunIcon,
  MoonIcon,
  FileIcon,
  RowsIcon,
  LinkedInLogoIcon,
  CodeIcon,
  HomeIcon,
} from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';
import { FaXTwitter } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import type { JSX } from 'react';
import { useDarkmode } from '@/store/useDarkmode';

const Navbar: React.FC = (): JSX.Element => {
  const { isDarkmode, toggleDarkmode } = useDarkmode();
  const pathname = usePathname();

  return (
    <nav className="w-full py-6 flex justify-center fixed top-0 z-50">
      <div className="rounded-full w-[800px] lg:w-[860px] hover:w-[820px] max-[400px]:w-[345px]  max-[450px]:w-[400px] max-[350px]:w-[330px] max-[321px]:w-[310px] px-2 py-1 bg-white/10 dark:bg-oklch(14.1% 0.005 285.823)/10 bg-opacity-10 backdrop-blur-lg border-1/70 dark:border-white/20 flex items-center justify-center dark:shadow-none shadow-xl transition-all duration-300">
        <div className="flex justify-center px-2 items-center max-sm:gap-4 gap-8 max-[400px]:gap-4 max-[450px]:gap-5 transition-all">
          <Link href="/" underline="none">
            <Tooltip content="Home">
              <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300 mt-1">
                <HomeIcon
                  className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == '/' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`}
                />
              </div>
            </Tooltip>
          </Link>

          <Link href="/projects">
            <Tooltip content="Projects">
              <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                <CodeIcon
                  className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == '/projects' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`}
                />
              </div>
            </Tooltip>
          </Link>

          <Link href="/blogs">
            <Tooltip content="Blog">
              <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                <RowsIcon
                  className={`w-[16px] h-[16px] max-sm:w-[13px] max-sm:h-[13px] text-black dark:text-white ${pathname.startsWith('/blogs') ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`}
                />
              </div>
            </Tooltip>
          </Link>

          <Link href="/about">
            <Tooltip content="About">
              <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                <IoPerson
                  className={`w-[18px] h-[18px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == '/about' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`}
                />
              </div>
            </Tooltip>
          </Link>

          <span className=" bg-black dark:bg-gray-400 h-full">
            <Separator
              orientation="vertical"
              size={{ sm: '1', lg: '2', xl: '2' }}
              className="bg-black dark:bg-gray-400"
            />
          </span>

          <Link href="" target="_blank" underline="none">
            <Tooltip content="Resume">
              <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                <FileIcon className="w-[19px] h-[19px] max-sm:h-[15px] max-sm:w-[15px] text-black dark:text-white" />
              </div>
            </Tooltip>
          </Link>

          <Link href="https://github.com/abhub23" target="_blank">
            <Tooltip content="Github">
              <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                <GitHubLogoIcon className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white" />
              </div>
            </Tooltip>
          </Link>

          <Link href="https://x.com/abdullah_twt23" target="_blank">
            <Tooltip content="X">
              <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                <FaXTwitter className="w-[17px] h-[17px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white" />
              </div>
            </Tooltip>
          </Link>

          <Link href="https://www.linkedin.com/in/abdullah-mukri-84a56b220/" target="_blank">
            <Tooltip content="Linkedin">
              <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                <LinkedInLogoIcon className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white" />
              </div>
            </Tooltip>
          </Link>

          <span className=" bg-black dark:bg-gray-400 h-full">
            <Separator
              orientation="vertical"
              size={{ sm: '1', lg: '2', xl: '2' }}
              className="bg-black dark:bg-gray-400"
            />
          </span>

          <div
            className="hover:px-3 max-sm:hover:px-2 py-2.5 rounded-full transition-all duration-300"
            onClick={toggleDarkmode}
          >
            <div className="flex items-center">
              <button>
                {isDarkmode == 'dark' ? (
                  <MoonIcon className="w-[18px] h-[18px] max-sm:w-[14px] max-sm:h-[14px] text-white cursor-pointer" />
                ) : (
                  <SunIcon className="w-5 h-5 max-sm:w-[15px] max-sm:h-[15px] cursor-pointer" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
