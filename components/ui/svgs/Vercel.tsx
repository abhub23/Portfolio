type IconProps = {
  size?: number;
  className?: string;
};

export default function Vercel({ size = 16, className }: IconProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 22.525H0l12-21.05 12 21.05z"></path>
    </svg>
  );
}
