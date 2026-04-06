type IconProps = {
  size?: number;
  className?: string;
};

export default function Hono({ size = 16, className }: IconProps) {
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
      className={className}
    >
      <path d="M12.445 0c-.5 3.04-3.017 4.656-5.5 7.42C4.053 10.737 3 13.942 3 16.315 3 20.043 6.16 24 12 24c5.84 0 9-3.957 9-7.685 0-4.096-2.457-7.718-5.39-10.32-1.416-1.256-2.37-2.815-3.165-5.995zM9.68 22.123c-.586-.263-2.195-1.298-2.168-4.123.021-2.24 1.346-4.053 3.488-5.5l.016-.009c.028-.015.056-.028.085-.04l.02-.007c2.336-.976 3.403 1.468 1.882 3.59-.87 1.213-1.773 1.857-1.773 3.466 0 1.61 1.093 2.623 2.77 2.623-1.073.63-2.69.6-4.32 0z" />
    </svg>
  );
}
