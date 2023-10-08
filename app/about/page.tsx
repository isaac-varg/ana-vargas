import Image from "next/image";
import BigText from "@/components/ui/BigText";
import BigButton from "@/components/ui/BigButton";
import { bigPageText } from "@/configs/contactPage";
import cloudinary from "@/utils/cloudinary";
import SocialHandles from "@/components/ui/SocialHandles";

const getContactMeImage = async () => {
    const response = await cloudinary.search
      .expression("folder=website AND tags=Contact Page Image ")
      .max_results(1)
      .execute();
    return response.resources[0];
  };

const About = async () => {

    const mainImage = await getContactMeImage();
  

  return (
    <>
      <div className="flex flex-col sm:flex-row mt-8 lg:mt-28 lg: gap-x-10 lg:gap-y-0 gap-y-4 px-2 sm:px-0 lg:px-20 mb-36">
        <div className=" sm:basis-1/2">
          <Image
            src={
              `https://res.cloudinary.com/dgflbdrkf/image/upload/q_auto,f_auto/${mainImage.public_id}.jpg`
            }
            width={600}
            height={799.8}
            alt="Ana Vargas"
            className="rounded-md"
          />
        </div>
        <div className=" basis-1/2 ">
          <div className="flex flex-col space-y-10 h-full pl-0 lg:pl-20 ">
            <div className="flex flex-col justify-start ">
              <BigText>{bigPageText}</BigText>

              <SocialHandles />
              
            </div>

            <p>
            I'm Ana Vargas, a content creator located in beautiful Southern California. My passion lies in crafting minimalistic and aesthetically pleasing content that resonates with your brand's vision. Join me in streamlining your brand management for effortless success. Together, we can create a seamless and captivating online presence that sets your brand apart.

            </p>
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
