import Hero from "./(sections)/Hero";
import GalleryHome from "./(sections)/GalleryHome";
import Skills from "./(sections)/Skills";
import Availability from "./(sections)/Availability";


export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24">
      <Hero />
      <GalleryHome />
      <Skills />
      <Availability />
    </main>
  );
}

// 