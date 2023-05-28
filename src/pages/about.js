import Image from "next/image";
import ana2 from "../../public/assets/layout/ana2.jpg";
import BigText from "@/components/ui/BigText";
import Text from "@/components/ui/Text";
import { BsInstagram, BsLinkedin, BsDiscord, BsTwitter} from "react-icons/bs"
import BigButton from "@/components/ui/BigButton";
import Socials from "@/components/sections/Socials";

const About = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row mt-8 lg:mt-28 lg: gap-x-10 lg:gap-y-0 gap-y-4 px-0 lg:px-20 mb-36">
        <div className=" sm:basis-1/2">
          <Image src={ana2} alt="Ana Vargas" className="rounded-md"/>
        </div>
        <div className=" basis-1/2 ">
          <div className="flex flex-col space-y-10 h-full pl-0 lg:pl-20 ">
            <div className="flex flex-col justify-start ">
              <BigText justify="start" margin="mb-4">Ana Vargas</BigText>
              <Socials />
            </div>

            <Text>
              Whether {"it's"} crafting a social media strategy, designing a website
              or creating a marketing campaign, I bring a unique blend of
              creativity and technical expertise to all of my projects.
            </Text>
            <Text> I strive for a minimal and beautiful design.</Text>
            <div>
            <BigButton path="/contact">Contact Me</BigButton>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
