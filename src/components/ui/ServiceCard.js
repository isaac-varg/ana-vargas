import Modal from "@/components/ui/PageModal";
import { useState } from "react";

const ServiceCard = ({ image, title, blurbText, longText, extendCard }) => {
  const [modalActive, setModalActive] = useState(false);

  const handleClick = () => {
    // setModalActive(true);
    console.log('Currently disabled.');
  };

  const handleCloseModal = () => {
    setModalActive(false);
  };

  return (
    <>
      <Modal
        isOpen={modalActive}
        closeModal={handleCloseModal}
        image={image}
        title={title}
        text={longText}
      />
      <div
        onClick={handleClick}
        className={`${
          extendCard ? "col-span-2" : null
        } rounded-md py-6 px-4 hover:bg-slate-100`}
      >
        <h1 className="font-Poppins text-[#1f1f1f] text-2xl font-bold mb-2 h-16 overflow-hidden">
          {title}
        </h1>
        <p className="font-Poppins font-normal text-base subpixel-antialiased ">
          {blurbText}
        </p>
      </div>
    </>
  );
};

export default ServiceCard;
