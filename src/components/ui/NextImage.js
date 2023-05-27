import Image from "next/image"

const NextImage = (props) => {
    const { photo, imageProps, wrapperStyle } = props;
    const { alt, title, sizes, className, onClick } = imageProps;

    console.log(sizes)

    return <>
     <div style={{ ...wrapperStyle, position: "relative" }}>
        
        <Image 
            src={photo}
            alt={alt}
            title={title}
            sizes={sizes}
            className={className}
            onClick={onClick} 
        />
    
     </div>
    </>

};

export default NextImage;