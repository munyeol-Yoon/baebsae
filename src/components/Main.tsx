import Banner from "./Banner";
import Calender from "./Calender";
import GalleryWrap from "./Gallery/GalleryWrap";
import Greeting from "./Greeting";
import Invitation from "./Invitation";

function Main() {
  return (
    <>
      <main className="flex justify-start items-center flex-col h-full w-full max-w-[620px] mx-auto text-lg leading-6 box-border font-custom">
        <Banner />
        <Greeting />
        <Calender />
        <GalleryWrap />
        <Invitation />
      </main>
    </>
  );
}

export default Main;
