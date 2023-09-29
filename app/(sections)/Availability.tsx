import BigButton from "@/components/ui/BigButton";
import SectionText from "@/components/ui/SectionText";
import { buttonText, headingText, largeText } from "@/configs/availabilitySection";
import { BsChatFill } from "react-icons/bs"

const Availability = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center space-x-2 mb-6">
        <div className=" box-border rounded-full bg-green-600 w-3 h-3"></div>
        <div className="font-Poppins text-base text-[#161C2D] font-bold uppercase tracking-wide w-3/4 sm:w-auto">
          {headingText}
        </div>
      </div>

        <div className="w-1/2">
        <SectionText>
            {largeText}
        </SectionText>
        </div>

        <BigButton path="/contact">
            <div className="flex items-center justify-center space-x-4">
            <BsChatFill />
            <h1>{buttonText}</h1>
            </div>
        </BigButton>
        
      
    </div>
  );
};

export default Availability;
