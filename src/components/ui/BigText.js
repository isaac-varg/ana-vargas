import { BsChatRightTextFill } from "react-icons/bs";

const BigText = ({ children, justify = 'center', width = 'w-2/3', margin}) => {

  return (
    <div className={`flex justify-${justify} ${margin ? margin : 'mb-12'}`}>
      <div className={`font-Poppins font-bold text-4xl sm:text-5xl text-[#161C2D] ${width}`}>
        {children}
      </div>
    </div>
  );
};

export default BigText;