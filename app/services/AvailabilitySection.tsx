import BigButton from "@/components/ui/BigButton";
import SectionText from "@/components/ui/SectionText";
import { availabilityButtonText, availabilityHeaderText, availabilitySectionText } from "@/configs/servicesPage";
import { BsChatFill } from "react-icons/bs"

const AvailabilitySection = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-18">
      <div className="flex justify-center items-center space-x-2 mb-6">
        <div className=" box-border rounded-full bg-green-600 w-3 h-3"></div>
        <div className="font-Poppins text-base text-[#161C2D] font-bold uppercase tracking-wide w-3/4 sm:w-auto">
          {availabilityHeaderText}
        </div>
      </div>

        <div className="w-1/2">
        <SectionText>
            {availabilitySectionText}
        </SectionText>
        </div>

        <BigButton path="/contact">
            <div className="flex items-center justify-center space-x-4">
            <BsChatFill />
            <h1>{availabilityButtonText}</h1>
            </div>
        </BigButton>
        
      
    </div>
  );
};

export default AvailabilitySection;
