import BigButton from "@/components/ui/BigButton";
import BigText from "@/components/ui/BigText";
import { BsChatFill } from "react-icons/bs";

const Availability = () => {
  return (
    <>
      <div className="mb-32">
        <div className="flex justify-center items-center space-x-2 mb-6">
          <div className=" box-border rounded-full bg-green-600 w-3 h-3"></div>
          <div className="font-Poppins text-base text-[#161C2D] font-bold uppercase tracking-wide w-3/4 sm:w-auto">
            Available for open positions and freelance projects
          </div>
        </div>

        <BigText width="sm:w-1/2">
          Got a creative project or open position that you think I'd be a great
          fit for?
        </BigText>

        <div className="flex justify-center text-center">
          <BigButton path="/contact">
            <div className="flex justify-center items-center space-x-2">
              <BsChatFill className="text-2xl" />
              <div>Let's chat!</div>
            </div>
          </BigButton>
        </div>
      </div>
    </>
  );
};

export default Availability;
