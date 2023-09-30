import BigText from "@/components/ui/BigText";
import Gallery from "@/components/ui/gallery/Gallery";
import { bigBlurb } from "@/configs/galleryPage";
import { MediaItem } from "@/types/MediaItem";
import cloudinary from "@/utils/cloudinary";


export const dynamic = 'force-dynamic';

const getHomepagePhotos = async () => {
  const response = await cloudinary.search
    .expression("folder=portfolio AND metadata.portfolio_section=gallery")
    .sort_by('public_id', 'desc')
    .with_field('tags')
    .max_results(400)
    .execute();

  return response.resources;
};


const GalleryPage = async () => {

  const homepagePhotos = await getHomepagePhotos();

  return (
    <main className="flex flex-col min-h-screen items-center px-2 sm:p-24">

        <div className="flex items-center justify-center mb-8">
            <BigText>{bigBlurb}</BigText>
        </div>
      <Gallery media={homepagePhotos} />
    </main>
  );
};

export default GalleryPage;
