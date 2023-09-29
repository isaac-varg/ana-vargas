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
      <div className="flex flex-col sm:flex-row mt-8 lg:mt-28 lg: gap-x-10 lg:gap-y-0 gap-y-4 px-0 lg:px-20 mb-36">
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
              Whether {"it's"} crafting a social media strategy, designing a
              website or creating a marketing campaign, I bring a unique blend
              of creativity and technical expertise to all of my projects.
            </p>
            <h1> I strive for a minimal and beautiful design.</h1>
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
