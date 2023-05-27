import Logo from "./Logo";
import NavItem from "./NavItem";

const Topbar = ({ isSticky }) => {
  return (
    <div className={`sticky top-0 ${isSticky ? 'shadow-md bg-white ' : null} w-full sm:h-16 h-24 z-10 `}>

      <header className="flex flex-col sm:flex-row justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 h-full py-2 sm:py-0">
        <Logo />
        <nav className="flex space-x-8">
          <NavItem path="/about">about me</NavItem>
          <NavItem path="/gallery">gallery</NavItem>
          <NavItem path="/contact">contact me</NavItem>
        </nav>
      </header>
    </div>
  );
};

export default Topbar;
