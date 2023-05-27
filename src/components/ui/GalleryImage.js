import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

const GalleryImage = ({ id, image, width, height, type, onImageClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isVideo = type === "Video";

  return (
    <AnimatePresence >
      <motion.div
        onClick={onImageClick.bind(null, image)}
        key={id}
        layout="position"
        whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
        transition={{ type: "spring", stiffness: 50}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          key={id}
          src={image}
          width={width}
          height={height}
          alt="This image"
          className="rounded-md mb-6"
        />

        {isVideo && isHovered && (
          <motion.div
            className="overflow-hidden absolute inset-0 flex items-center justify-center"
          >
            <FaPlay className="text-white text-6xl opacity-70" />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryImage;
