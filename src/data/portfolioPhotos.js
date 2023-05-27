import generateId from "@/utilities/generateId";
import getPhotoData from "../utilities/getPhotoData";

import WalnutScrub from "../../public/portfolio/WalnutScrub.jpg";
import Scrubs from "../../public/portfolio/Scrubs.jpg";
import Cucumber from "../../public/portfolio/Cucumber.jpg";
import CosmeticJar from "../../public/portfolio/CosmeticJar.jpg";
import WhippedCloudCream from "../../public/portfolio/WhippedCloudCream.jpg";
import Texture from "../../public/portfolio/Texture.jpg";
import Charcoal from "../../public/portfolio/Charcoal.jpg";
import LotionArm from "../../public/portfolio/LotionArm.jpg";
import LotionSwatch from "../../public/portfolio/LotionSwatch.jpg";
import PumpkinScrubTexture from "../../public/portfolio/PumpkinScrubTexture.jpg";
import PumpkinSugarScrubThumbnail from "../../public/portfolio/PumpkinSugarScrubThumbnail.jpg";
import FaceMask from "../../public/portfolio/FaceMask.jpg";
import DogSoap from "../../public/portfolio/DogSoap.jpg";

const portfolioPhotos = [
  {
    id: generateId(),
    type: "image",
    tags: ["product", "cosmetic"],
    title: "Walnut Body Scrub",
    media: WalnutScrub,
    ...getPhotoData(WalnutScrub),
  },
  {
    id: generateId(),
    type: "video",
    tags: ["product"],
    title: "Pumpkin Sugar Scrub Video",
    media:  PumpkinSugarScrubThumbnail,
    videoSource: "https://www.youtube.com/embed/iH40U8FlwiM",
  },
  {
    id: generateId(),
    type: "image",
    tags: ["product", "cosmetic"],
    title: "Dog Paw Soap",
    media: DogSoap,
    ...getPhotoData(DogSoap),
  },
  {
    id: generateId(),
    type: "image",
    tags: ["product", "cosmetic"],
    title: "Scrubs",
    media: Scrubs,
    ...getPhotoData(Scrubs),
  },
  {
    id: generateId(),
    type: "image",
    tags: ["product", "cosmetic"],
    title: "Cosmetic Jar",
    media: CosmeticJar,
    ...getPhotoData(CosmeticJar),
  },
  {
    id: generateId(),
    type: "image",
    tags: ["product", "cosmetic"],
    title: "Cucumber Ingredient",
    media: Cucumber,
    ...getPhotoData(Cucumber),
  },
  {
    id: generateId(),
    type: "image",
    tags: ["product", "cosmetic"],
    title: "Cucumber Ingredient",
    media: WhippedCloudCream,
    ...getPhotoData(WhippedCloudCream),
  },
  {
    id: generateId(),
    type: "image",
    tags: ["product", "cosmetic"],
    title: "Aesthetic picture of cosmetic texture",
    media: Texture,
    ...getPhotoData(Texture),
  },
  {
    id: generateId(),
    type: "image",
    tags: ["cosmetic"],
    title: "Lotion on arm",
    media: LotionArm,
    ...getPhotoData(LotionArm),
  },
  {
    id: generateId(),
    type: "image",
    tags: ["cosmetic"],
    title: "Swatch of a lotion",
    media: LotionSwatch,
    ...getPhotoData(LotionSwatch),
  },
  {
    id: generateId(),
    type: "image",
    tags: ["close-up", "cosmetic"],
    title: "Close-up of a pumpkin sugar scrub",
    media: PumpkinScrubTexture,
    ...getPhotoData(PumpkinScrubTexture),
  },
  {
    id: generateId(),
    type: "image",
    tags: ["close-up", "cosmetic"],
    title: "Display of a face mask",
    media: FaceMask,
    ...getPhotoData(FaceMask),
  },
  {
    id: generateId(),
    type: "image",
    tags: ["ingredient", "cosmetic"],
    title: "Charcoal powder",
    media: Charcoal,
    ...getPhotoData(Charcoal),
  },
];

export default portfolioPhotos;
