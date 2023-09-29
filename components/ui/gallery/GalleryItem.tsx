"use client";
import React, { useId } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MediaItem } from "@/types/MediaItem";
import { TbPlayerPlay } from "react-icons/tb";

import { useContext } from "react";
import { TagContext } from "@/context/tag.context";

type GalleryItemProps = {
  item: MediaItem;
  onItemSelection: (item: MediaItem) => void;
};

const GalleryItem = ({ item, onItemSelection }: GalleryItemProps) => {
  const { state } = useContext(TagContext);
  const itemType = item.resource_type;

  if (
    state.selectedHomepageTag !== "All" &&
    !item.tags.includes(state.selectedHomepageTag)
  ) {
    return false;
  }

  return (
    <AnimatePresence>
      <motion.div
        onClick={onItemSelection.bind(null, item)}
        key={item.public_id}
        layout="position"
        transition={{ type: "spring", stiffness: 50 }}
      >
        {itemType === "image" && (
          <motion.div
            whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
          >
            <Image
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto/${item.public_id}.${item.format}`}
              alt={item.filename}
              width={item.width}
              height={item.height}
            />
          </motion.div>
        )}

        {itemType === "video" && (
          <motion.div
            whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
            className="overflow-hidden relative"
          >
            <Image
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/${item.public_id}.jpg`}
              alt={item.filename}
              width={item.width}
              height={item.height}
              id={useId()}
            />

            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-white/30"
              whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
            >
              <TbPlayerPlay className="text-white text-6xl opacity-70" />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryItem;
