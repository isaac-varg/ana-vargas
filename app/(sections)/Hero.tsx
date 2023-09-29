import Image from "next/image";
import BigButton from "@/components/ui/BigButton";
import BigText from "@/components/ui/BigText";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-24 space-x-0 sm:mb-20 mb-16">
        <span className="w-full sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0">
          <div className="font-Poppins text-base text-[#161C2D] font-bold uppercase tracking-wide mb-6">
            content creator, social media manager, photographer, designer
          </div>

          <BigText>
          I create engaging content for brands
          </BigText>

          <BigButton path="/gallery">Discover Portfolio</BigButton>
        </span>
        <div className="max-w-xs  ">
          <Image alt="Photo of Ana" width={400} height={400} src="https://res.cloudinary.com/dgflbdrkf/image/upload/t_Profile/v1693871324/website/ana-vargas-hero_zsa6xi.jpg" className="rounded-full" />
        </div>
      </div>
    </>
  );
};

export default Hero;