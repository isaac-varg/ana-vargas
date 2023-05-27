import Modal from "react-modal";
import { IoWarning } from "react-icons/io5";
import Text from "./Text";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: "1000",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    padding: "2rem",
  },
};

Modal.setAppElement("#__next");

const SubmitModal = ({
  isOpen,
  closeModal,
  confirmButtonLabel,
  onConfirm,
  title,
  children,
  status,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div className="flex flex-col items-center justify-between space-y-6">
        <p className="text-2xl font-Poppins antialiased  mb-2">{title} </p>
        <div className="max-w-sm">
          <Text>{children}</Text>
        </div>
        <button
          onClick={onConfirm}
          className={`${
            status !== "success"
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-[#ffd4de] text-gray-800"
          } font-bold py-2 px-4 mr-4 rounded`}
        >
          {confirmButtonLabel}
        </button>
      </div>
    </Modal>
  );
};

export default SubmitModal;
