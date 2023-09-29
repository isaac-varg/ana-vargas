// * given query data from cloudinary returns unique tags
// * query must include the tags fields with  .with_field('tags')
// TODO check if tags property exists

import { Tags } from "@/types/Tags";

export const getUniqueTags = (data: any[]) : Tags => {
    const uniques = new Set();
    const property = "tags";
  
    data.forEach(object => {
      if (object.hasOwnProperty(property)) {
        const propertyValue = object[property];
        if (Array.isArray(propertyValue)) {
          propertyValue.forEach(value => {
            uniques.add(value);
          });
        }
      }
    });
  
    return Array.from(uniques) as Tags;
  }
  