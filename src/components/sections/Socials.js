import {
  BsInstagram,
  BsLinkedin,
  BsDiscord,
  BsWhatsapp,
} from "react-icons/bs";
import SocialIcon from "@/components/ui/SocialIcon";

const Socials = () => {
  return (
    <>
      <div className="flex flex-row space-x-10">
        <SocialIcon handle='@anavargas.design' path="https://www.instagram.com/anavargas.design/" icon={<BsInstagram />}></SocialIcon>
        <SocialIcon handle='Ana Vargas' path="https://www.linkedin.com/in/ana-vargas-36626326a/" icon={<BsLinkedin />}></SocialIcon>
        {/* <SocialIcon handle='discord' path="/" icon={<BsDiscord />}></SocialIcon> */}
        <SocialIcon handle='WhatsApp' path="https://wa.me/19514078104" icon={<BsWhatsapp />}></SocialIcon>
      </div>
    </>
  );
};

export default Socials;
