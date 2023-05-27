import Image from "next/image";
import { useEffect, useState } from "react";

const Test = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");

  const runme = async () => {
    try {
      const res = await fetch("/api/entries?display=Showcase");
      if (res.ok) {
        const data = await res.json();

        console.log(data);
      } else {
        console.log("Error:", res.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    runme();
  }, []);

  return (
    <>
      <h1>{name ? name : "hi"}</h1>

      {image && <Image src={image} height={500} width={500} alt="test" />}
    </>
  );
};

export default Test;
