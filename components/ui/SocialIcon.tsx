"use client"
import { SocialHandle } from "@/types/SocialHandle";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SocialIconProps = {
    icon: JSX.Element
    path: string
    handle: string
}

const SocialIcon = ( {socialHandle } : {socialHandle : SocialHandle}) => {
  const router = useRouter();

  const {icon, path, handle } = socialHandle;
  const [showPopup, setShowPopup] = useState(false);

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
          <div className="font-Poppins font-normal text-base subpixel-antialiased">{handle}</div>
        </div>
      )}
    </div>
  );
};

export default SocialIcon;
