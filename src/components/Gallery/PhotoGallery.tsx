import "photoswipe/style.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import images from "./Images";

const PhotoGallery = () => {
  return (
    <Gallery>
      <div className="grid grid-cols-3 gap-2 px-4 sm:px-6 md:px-8 lg:px-10">
        {images.map((image, index) => (
          <Item
            key={index}
            cropped
            original={image.source}
            thumbnail={image.source}
            width="1280"
            height="1920"
          >
            {({ ref, open }) => (
              <div className="relative w-full aspect-w-2 aspect-h-3 overflow-hidden">
                <img
                  alt={image.alt}
                  src={image.source}
                  ref={ref}
                  onClick={open}
                  className="object-cover w-full h-full cursor-pointer rounded-lg"
                />
              </div>
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
