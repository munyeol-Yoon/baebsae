import { useState } from "react";
import PhotoGallery from "./PhotoGallery.tsx";

const GalleryWrap = () => {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView);
  };

  return (
    <div className="my-8 box-border overflow-hidden flex flex-col items-center relative">
      <div
        className={`relative ${
          isMoreView ? "" : "max-h-[60vh] overflow-hidden"
        }`}
      >
        {!isMoreView && (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white backdrop-blur-none z-10"></div>
        )}
        <PhotoGallery />
      </div>
      {!isMoreView && (
        <div
          onClick={onClickImageMoreViewButton}
          className="w-11/12 box-border p-2 text-lg flex items-center justify-center rounded border border-gray-300 cursor-pointer bg-white hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          더보기
        </div>
      )}
    </div>
  );
};

export default GalleryWrap;
