import { useState } from "react";
import { Client } from "@notionhq/client";
import BigText from "@/components/ui/BigText";
import GalleryGrid from "@/components/ui/GalleryGrid";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails, Video } from "yet-another-react-lightbox/plugins";
import VideoModal from "@/components/ui/VideoModal";
import generateId from "@/utilities/generateId";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Gallery = ({galleryEntries}) => {
  const [photoIndex, setPhotoIndex] = useState(-1);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [clickedVideo, setClickedVideo] = useState(null);

  const handleImageClick = (item) => {
    switch (item.type) {
      case "Image":
        handleLightboxOpen(item.id)
        break;
      case "Video":
        handleVideoModal(item);
        break;
      default:
        break;
    }
  };

  const handleVideoModal = item => {
    setVideoModalOpen(true);
    setClickedVideo(item);
  }

  const handleLightboxOpen = id => {
    
    const index = galleryEntries.filter((item) => item.type !== "Video" ).findIndex((photo) => photo.id === id);
    setPhotoIndex(index);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center space-x-2 mb-6 text-center mt-8 lg:mt-24">
        <div>
          <BigText width="sm:w-3/4 w-auto" margin="mb-12 sm:mb-32">
            Crafting lasting memories with design and photography
          </BigText>
    
        </div>
        <div>
          <GalleryGrid
            media={galleryEntries}
            onImageClick={handleImageClick}
          />
        </div>
      </div>

      <Lightbox
        open={photoIndex >= 0}
        index={photoIndex}
        close={() => setPhotoIndex(-1)}
        //removes videos from array then fixes the data for lightbox (the type key is used differnetly)
        slides={galleryEntries.filter((item) => item.type !== "Video" ).map(obj => {
          const {imageUrl} = obj;
          return {
            src: imageUrl,
          }
        })}
        plugins={[Thumbnails]}
        thumbnails={{
          border: 0,
        }}
      />

        <VideoModal 
          isOpen={videoModalOpen}
          setIsOpen={setVideoModalOpen}
          video={clickedVideo}
        />
    </>
  );
};

export default Gallery;


export async function getStaticProps() {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  try {
    const rawEntries = await notion.databases.query({
      database_id: process.env.DATABASE_ID,
      filter: {
        property: "Display",
        multi_select: {
          contains: "Gallery",
        },
      },
    });

    const entries = rawEntries.results.map(({ properties }) => ({
      id: generateId(),
      type: properties.Type.select.name,
      tags: properties.Tags.multi_select.map((tag) => tag.name),
      title: properties["Image Name"].title[0].plain_text,
      imageUrl: properties["Image URL"].url,
      width: properties["Image Width"].number,
      height: properties["Image Height"].number,
    }));

    return {
      props: {
        galleryEntries: entries,
      },
    };
  } catch (error) {
    console.log("Error:", error);
    return {
      props: {
        galleryEntries: [],
      },
    };
  }
}
