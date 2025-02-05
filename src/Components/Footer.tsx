import Button from "./Button";
const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full text-black text-center p-4 font-mono">
      Designed and Developed by{" "}
      <a
        className="text-blue-600 hover:underline"
        href="https://x.com/abdullah_twt23"
      >
        {" "}
        Abdullah Mukri
      </a>
      <Button prop="Get in Touch" h={12} w={54}/>
    </footer>
  );
};

export default Footer;
