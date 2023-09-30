import Link from "next/link";

type NavItemProps = {
    children: React.ReactNode;
    path: string;
    isMobileOpen: boolean;
    onMobileClick: () => void;
}

const NavItem = ({ children, path, isMobileOpen, onMobileClick} : NavItemProps) => {
  return (
    <>
      <Link href={path} onClick={isMobileOpen ? onMobileClick : () => {return}} className={`font-Inter font-bold ${isMobileOpen ? 'text-3xl' : 'text-xl'} tracking-tight text-[#161C2D] cursor-pointer hover:text-[#FFB5A7] transition-colors duration-300 hover:animate-pulse`}>
        {children}
      </Link>
    </>
  );
};

export default NavItem;
