import { useRouter } from "next/router";
import { useState } from "react";
import Text from "./Text";

const SocialIcon = ({ icon, path, handle }) => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
        onClick={handleClick}
        className="text-2xl hover:animate-wiggle cursor-pointer"
      >
        {icon}
      </div>
      {showPopup && (
        <div className="absolute z-10 text-2xl bg-white text-black px-2 py-1 rounded-md shadow-md bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1">
          <Text>{handle}</Text>
        </div>
      )}
    </div>
  );
};

export default SocialIcon;
