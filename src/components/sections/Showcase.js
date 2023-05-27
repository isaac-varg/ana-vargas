import { useState } from "react";
import ImageModal from "../ui/ImageModal";
import VideoModal from "../ui/VideoModal";
import GalleryGrid from "../ui/GalleryGrid";

const Showcase = ({images}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [clickedVideo, setClickedVideo] = useState(null);

  const handleImageClick = (item) => {
    switch (item.type) {
      case "image":
        setSelectedImage(item);
        break;
      case "video":
        handleVideoModal(item);
        break;
      default:
        break;
    }
  };

  const handleVideoModal = (item) => {
    setVideoModalOpen(true);
    setClickedVideo(item);
  };


  return (
    <>
      <ImageModal
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <VideoModal
        isOpen={videoModalOpen}
        setIsOpen={setVideoModalOpen}
        video={clickedVideo}
      />

      <GalleryGrid media={images} onImageClick={handleImageClick} />
    </>
  );
};



export default Showcase;
