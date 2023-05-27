import Modal from "react-modal";
import Image from "next/image";
import {GrFormClose} from "react-icons/gr"

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    zIndex: "1000",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: ".375rem",
    borderWidth: "0",
    padding: "0",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    overflow: "auto",
  },
};

Modal.setAppElement("#__next");

const PageModal = ({ isOpen, closeModal, image, title, text }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
       <button
        className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-white opacity-40 hover:opacity-100 hover:bg-white focus:outline-none"
        onClick={closeModal}
      >
        <GrFormClose />
      </button>
      <Image src={image} quality={25} className="h-64 w- object-cover" />
      <div className="py-6 px-6">
        <h1 className="font-Poppins text-[#1f1f1f] text-xl font-bold mb-2">
      {title}
        </h1>
        <p className="font-Poppins font-normal text-base ">
          {text}
        </p>
      </div>
    </Modal>
  );
};

export default PageModal;
