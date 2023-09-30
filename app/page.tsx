import Hero from "./(sections)/Hero";
import GalleryHome from "./(sections)/GalleryHome";
import Skills from "./(sections)/Skills";
import Availability from "./(sections)/Availability";
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


export default async function Home() {
  const homepagePhotos = await getHomepagePhotos();

  return (
    <main className="flex flex-col min-h-screen items-center sm:justify-between py-2 px-2 sm:py-24 sm:px-24">
      <Hero />
      <GalleryHome media={homepagePhotos} />
      <Skills />
      <Availability />
    </main>
  );
}

// 