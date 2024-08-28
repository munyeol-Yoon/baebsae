import "photoswipe/dist/photoswipe.css"; // PhotoSwipe 기본 스타일 import
import { Item, Gallery as PhotoSwipeGallery } from "react-photoswipe-gallery";

import Image1 from "../assets/GalleryImages/image1.jpg";
import Image2 from "../assets/GalleryImages/image2.jpg";
import Image3 from "../assets/GalleryImages/image3.jpg";
import Image4 from "../assets/GalleryImages/image4.jpg";
// 더 많은 이미지를 추가할 수 있습니다.

function Gallery() {
  const images = [
    { src: Image1, width: 720, height: 480 },
    { src: Image2, width: 720, height: 480 },
    { src: Image3, width: 720, height: 480 },
    { src: Image4, width: 720, height: 480 },
    { src: Image4, width: 720, height: 480 },
    { src: Image4, width: 720, height: 480 },
    { src: Image4, width: 720, height: 480 },
    { src: Image4, width: 720, height: 480 },
    { src: Image4, width: 720, height: 480 },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-serif text-center text-yellow-600 mb-8">
        Wedding Gallery
      </h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        <PhotoSwipeGallery>
          {images.map((image, index) => (
            <Item
              key={index}
              original={image.src}
              thumbnail={image.src}
              width={image.width}
              height={image.height}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={image.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-[100px] h-[150px] object-contain cursor-pointer rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              )}
            </Item>
          ))}
        </PhotoSwipeGallery>
      </div>
    </div>
  );
}

export default Gallery;
