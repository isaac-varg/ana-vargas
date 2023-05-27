import Link from "next/link";

const NavItem = ({ children, path }) => {
  return (
    <>
      <Link href={path} className="font-Inter font-bold text-xl tracking-tight text-[#161C2D] cursor-pointer hover:text-[#FFB5A7] transition-colors duration-300 hover:animate-pulse">
        {children}
      </Link>
    </>
  );
};

export default NavItem;
