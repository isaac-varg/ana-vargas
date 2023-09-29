import Link from "next/link";

type NavItemProps = {
    children: React.ReactNode;
    path: string;
}

const NavItem = ({ children, path } : NavItemProps) => {
  return (
    <>
      <Link href={path} className="font-Inter font-bold text-xl tracking-tight text-[#161C2D] cursor-pointer hover:text-[#FFB5A7] transition-colors duration-300 hover:animate-pulse">
        {children}
      </Link>
    </>
  );
};

export default NavItem;
