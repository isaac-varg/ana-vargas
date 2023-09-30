import Gallery from "@/components/ui/gallery/Gallery";
import { MediaItem } from "@/types/MediaItem";

type GalleryHomeProps = {
  media: MediaItem[] 
}


const GalleryHome = async ({ media } : GalleryHomeProps) => {


  return (
    <>
      <Gallery media={media} />
    </>
  );
};

export default GalleryHome;
