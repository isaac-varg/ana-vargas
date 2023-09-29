"use client";
import { TagContext } from "@/context/tag.context";
import { useContext } from "react";

type TagProps = {
  tagName: string;
};

const Tag = ({ tagName }: TagProps) => {
  const { state, dispatch } = useContext(TagContext);

  const isSelected = state.selectedHomepageTag === tagName;
  
  return (
      <button
        onClick={() => dispatch({ type: "setHomepageTag", payload: tagName })}
        className={`font-Poppins text-base text-gray-800 font-bold uppercase tracking-wide mb-6 ${
          !isSelected
            ? "hover:text-[#FFB5A7] transition-colors duration-300 hover:animate-pulse"
            : ""
        } ${isSelected ? "bg-[#ffd4de] rounded-md" : ""} px-4 py-2`}
      >
        {tagName}
      </button>
  );
};

export default Tag;
