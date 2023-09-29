"use client";
import TagSelection from "@/components/ui/gallery/TagSelection";
import { getUniqueTags } from "@/utils/getUniqueTags";
import { TagContextProvider } from "@/context/tag.context";
import { MediaItem } from "@/types/MediaItem";
import GalleryGrid from "./GalleryGrid";

type GalleryProps = {
  media: MediaItem[];
};

const Gallery = ({ media }: GalleryProps) => {

  const homepageGalleryTags = getUniqueTags(media);


  return (
    <>
      <TagContextProvider>
        <TagSelection tags={homepageGalleryTags} />

        <GalleryGrid media={media} />
        
      </TagContextProvider>
    </>
  );
};

export default Gallery;
