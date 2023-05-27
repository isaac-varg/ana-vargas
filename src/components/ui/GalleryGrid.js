import { useState, useEffect } from "react";
import TagSelection from "./TagSelection";
import { motion } from "framer-motion"
import GalleryImage from "./GalleryImage";

const GalleryGrid = ({ media, onImageClick }) => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredMedia, setFilteredMedia] = useState([]);


  const handleTagClick = (tagName) => {
    setSelectedTag(tagName);
  };

  useEffect(() => {
    if (selectedTag === "All") {
      setFilteredMedia(media);
      return;
    }
    const selection = media.filter((item) =>
      item.tags.includes(selectedTag)
    );
    setFilteredMedia(selection);
  }, [selectedTag]);


  return (
    <div className="mb-32">
      <TagSelection photos={media} onTagClick={handleTagClick} selectedTag={selectedTag} />

      <motion.div layout className="sm:columns-4 columns-3 sm:gap-6  gap-2">
        {filteredMedia.map((item) => {
          return (
            <GalleryImage
              key={item.id}
              image={item.imageUrl}
              width={item.width}
              height={item.height}
              type={item.type}
              onImageClick={onImageClick.bind(null, item)}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default GalleryGrid;
