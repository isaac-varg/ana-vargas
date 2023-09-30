import Hero from "./(sections)/Hero";
import GalleryHome from "./(sections)/GalleryHome";
import Skills from "./(sections)/Skills";
import Availability from "./(sections)/Availability";


export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center sm:justify-between py-2 px-2 sm:py-24 sm:px-24">
      <Hero />
      <GalleryHome />
      <Skills />
      <Availability />
    </main>
  );
}

// 