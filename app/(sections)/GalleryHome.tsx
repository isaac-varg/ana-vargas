import Gallery from "@/components/ui/gallery/Gallery";
import { MediaItem } from "@/types/MediaItem";
import cloudinary from "@/utils/cloudinary";


export const dynamic = 'force-dynamic';

const getHomepagePhotos = async () => {
  const response = await cloudinary.search
    .expression("folder=portfolio AND metadata.portfolio_section=homepage")
    .sort_by('public_id', 'desc')
    .with_field('tags')
    .max_results(400)
    .execute();

  return response.resources;
};


const GalleryHome = async () => {

  const homepagePhotos = await getHomepagePhotos();

  return (
    <>
      <Gallery media={homepagePhotos} />
    </>
  );
};

export default GalleryHome;
