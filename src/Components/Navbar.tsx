import { Link, Tooltip, Separator } from "@radix-ui/themes";
import {
  GitHubLogoIcon,
  SunIcon,
  MoonIcon,
  FileIcon,
  RowsIcon,
  LinkedInLogoIcon,
  CodeIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className="h-16 w-full flex justify-center py-6 fixed top-0 z-20">
      <div className="rounded-full border-4 w-[850px] max-lg:w-[800px] max-[400px]:w-[345px] max-[450px]:w-[400px] max-[350px]:w-[330px] max-[321px]:w-[310px] px-2 py-1 bg-white bg-opacity-10 backdrop-blur-lg border dark:border-white/20 flex items-center justify-center dark:shadow-none shadow">
        <div className="flex justify-center px-2 items-center max-sm:gap-4 gap-8 max-[400px]:gap-4 max-[450px]:gap-5 transition-all">
          <Link href="/" underline="none">
            <Tooltip content="Home">
              <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                <HomeIcon
                  className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black`}
                />
              </div>
            </Tooltip>
          </Link>
        </div>

        <Link href="/projects">
          <Tooltip content="Projects">
            <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
              <CodeIcon
                className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black `}
              />
            </div>
          </Tooltip>
        </Link>

        <Link href="/blogs">
          <Tooltip content="Blog">
            <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
              <RowsIcon
                className={`w-[16px] h-[16px] max-sm:w-[13px] max-sm:h-[13px] text-black  `}
              />
            </div>
          </Tooltip>
        </Link>

        <Link href="/about">
          <Tooltip content="About">
            <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
              <IoPerson
                className={`w-[18px] h-[18px] max-sm:w-[15px] max-sm:h-[15px] text-black  `}
              />
            </div>
          </Tooltip>
        </Link>

        <Separator
          orientation="vertical"
          size={{ sm: "1", lg: "2", xl: "2" }}
          className="bg-black dark:bg-gray-400"
        />

        <Link
          href="https://drive.google.com/file/d/1RFyHIwq0xZJrIqj3t0xsdCSt04sY_1Cv/view?usp=sharing"
          target="_blank"
          underline="none"
        >
          <Tooltip content="Resume">
            <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
              <FileIcon className="w-[19px] h-[19px] max-sm:h-[15px] max-sm:w-[15px] text-black" />
            </div>
          </Tooltip>
        </Link>

        <Link href="https://github.com/Fardeen26" target="_blank">
          <Tooltip content="Github">
            <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
              <GitHubLogoIcon className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black " />
            </div>
          </Tooltip>
        </Link>

        <Link
          href="https://x.com/intent/follow?screen_name=fardeen14693425"
          target="_blank"
        >
          <Tooltip content="X">
            <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
              <FaXTwitter className="w-[17px] h-[17px] max-sm:w-[15px] max-sm:h-[15px] text-black " />
            </div>
          </Tooltip>
        </Link>

        <Link
          href="https://www.linkedin.com/in/fardeenmansoori/"
          target="_blank"
        >
          <Tooltip content="Linkedin">
            <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
              <LinkedInLogoIcon className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black " />
            </div>
          </Tooltip>
        </Link>

        <Separator
          orientation="vertical"
          size={{ sm: "1", lg: "2", xl: "2" }}
          className="bg-black dark:bg-gray-400"
        />

        <div className="hover:px-3 max-sm:hover:px-2 py-2.5 rounded-full transition-all duration-300 cursor-pointer">
          <div className="flex items-center">
            <button>
              {
                <MoonIcon className="w-[18px] h-[18px] max-sm:w-[14px] max-sm:h-[14px]" />
              }
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
