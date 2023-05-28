import { useState, useEffect } from "react";
import Tag from "./Tag";

const TagSelection = ({ photos, onTagClick, selectedTag }) => {
  const [uniqueTags, setUniqueTags] = useState([]);

  useEffect(() => {
    const reducedTags = photos.reduce((acc, curr) => {
      curr.tags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
      return acc;
    }, []);

    setUniqueTags(reducedTags);
  }, [photos]);

  return (
    <>
      <div className="flex flew-row flex-wrap justify-start sm:justify-center space-x-2 sm:space-x-10">
        <Tag
          onTagClick={onTagClick}
          selectedTag={selectedTag}
          key={"All"}
        />
        {uniqueTags.map((tag) => {
          return (
            <Tag
              onTagClick={onTagClick}
              tagName={tag}
              selectedTag={selectedTag}
              key={tag}
            />
          );
        })}
      </div>
    </>
  );
};

export default TagSelection;
