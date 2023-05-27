// const { Client } = require("@notionhq/client");
// const generateId = require("../../utilities/generateId")
import { Client } from "@notionhq/client"
import generateId from "../../utilities/generateId";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  const { display } = req.query;

  try {
    const rawEntries = await notion.databases.query({
      database_id: process.env.DATABASE_ID,
      filter: {
        property: "Display",
        multi_select: {
          contains: display,
        },
      },
    });
    console.log(rawEntries.results[0])
    const entries =  rawEntries.results.map(({ properties }) => ({
      id: generateId(),
      type: properties.type,
      tags: properties.Tags.multi_select.map(tag => tag.name),
      title: properties["Image Name"].title[0].plain_text,
      imageUrl: properties["Image URL"].url,
      width: properties["Image Width"].number,
      height: properties["Image Height"].number,
    }));

    res.status(200).json(entries);
  } catch (error) {
    res.status(500).send("Error retrieving entries");
  }
}
