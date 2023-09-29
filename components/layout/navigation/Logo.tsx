import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-Inter font-bold text-3xl tracking-tighter text-[#161C2D] cursor-pointer hover:text-[#FFB5A7] transition-colors duration-300 hover:animate-pulse "
    >
      ana vargas
    </Link>
  );
};

export default Logo;

