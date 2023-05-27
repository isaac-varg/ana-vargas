import Image from "next/image";

const ImageModal = ({ selectedImage, setSelectedImage }) => {
  if (!selectedImage) {
    return <></>;
  }

  return (
    <div onClick={() => {setSelectedImage(null)}} className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="relative max-w-3xl mx-auto">
          <Image src={selectedImage} className="rounded-md" />

      </div>
    </div>
  );
};

export default ImageModal;
