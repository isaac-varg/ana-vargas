"use client";

import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { TagContext } from "@/context/tag.context";

import GalleryItem from "@/components/ui/gallery/GalleryItem";
import { MediaItem } from "@/types/MediaItem";

import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";

import "yet-another-react-lightbox/styles.css";

type GalleryGridProps = {
  media: MediaItem[];
};

const GalleryGrid = ({ media }: GalleryGridProps) => {
  const { state, dispatch } = useContext(TagContext);
  const [filteredMedia, setFilteredMedia] = useState(media);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const selectedTag = state.selectedHomepageTag;

  const lightboxSlides = media.map((item) => {
    if (item.resource_type === "image") {
      return {
        src: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto/${item.public_id}.${item.format}`,
      };
    }

    if (item.resource_type === "video") {
      return {
        type: "video",
        autoPlay: true,
        loop: true,
        sources: [
          {
            src: item.url,
            type: `video/${item.format}`,
          },
        ],
      };
    }
  });

  const handleItemSelection = (item: MediaItem) => {
    const index = media.findIndex((obj) => obj.public_id === item.public_id);
    console.log(lightboxSlides);
    setSelectedItemIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <motion.div layout className="sm:columns-4 columns-3 sm:gap-4 space-y-4">
        {media.map((medium) => {
          return (
            <GalleryItem
              key={medium.public_id}
              item={medium}
              onItemSelection={handleItemSelection}
            />
          );
        })}
      </motion.div>

      {lightboxSlides && (
        <Lightbox
          plugins={[Video]}
          open={isLightboxOpen}
          close={() => setIsLightboxOpen(false)}
          slides={lightboxSlides as any}
          index={selectedItemIndex}
        />
      )}
    </>
  );
};

export default GalleryGrid;
