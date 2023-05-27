import Image from "next/image";
import Ana from "../../../public/assets/layout/ana.jpg";
import BigButton from "@/components/ui/BigButton";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-24 space-x-0 mt-8 sm:mt-24 sm:mb-40 mb-20">
        <span className="w-full sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0">
          <div className="font-Poppins text-base text-[#161C2D] font-bold uppercase tracking-wide mb-6">
            social media manager, photographer, designer
          </div>

          <div className="font-Poppins font-bold text-4xl md:text-4xl lg:text-7xl text-[#161C2D] mb-6">
            I create beautiful product photos for clients
          </div>

          <BigButton path="/gallery">Discover Portfolio</BigButton>
        </span>
        <div className="max-w-xs  ">
          <Image alt="Photo of Ana" src={Ana} className="rounded-full" />
        </div>
      </div>
    </>
  );
};

export default Hero;
