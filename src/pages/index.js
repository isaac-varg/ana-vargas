import Availability from "@/components/sections/Availability";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Showcase from "@/components/sections/Showcase";
import { Client } from "@notionhq/client";
import generateId from "../utilities/generateId";

export default function Home({ showcaseEntries }) {
  return (
    <>
      <Hero />
      <Showcase images={showcaseEntries} />
      <Services />
      <Availability />
    </>
  );
}

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
          contains: "Showcase",
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
        showcaseEntries: entries,
      },
      revalidate: 1000,
    };
  } catch (error) {
    console.log("Error:", error);
    return {
      props: {
        showcaseEntries: [],
      },
    };
  }
}
