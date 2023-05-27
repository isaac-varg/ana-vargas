import { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import Topbar from "./topbar/Topbar";

const Layout = ({ children }) => {
  const [isTopbarSticky, setIsTopbarSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsTopbarSticky(window.pageYOffset > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Topbar isSticky={isTopbarSticky} />
        <main className={`flex flex-col flex-grow justify-between py-4 px-6`}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
