import Image from "next/image";

const Github = () => {
  return (
    <Image
      src="https://ghchart.rshah.org/00ff00/abhub23"
      alt="Github contribution Chart"
      width={900}
      height={600}
      unoptimized={true}
    />
  );
};

export default Github;
