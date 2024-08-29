import { NavermapsProvider } from "react-naver-maps";
import Account from "./Account/Account";
import Banner from "./Banner";
import Calender from "./Calender";
import Call from "./Call";
import Comment from "./Comment/Comment";
import GalleryWrap from "./Gallery/GalleryWrap";
import Greeting from "./Greeting";
import Invitation from "./Invitation";
import Location from "./Location/Location";

function Main() {
  const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;

  return (
    <NavermapsProvider ncpClientId={ncpClientId}>
      <main className="flex justify-start items-center flex-col h-full w-full max-w-[620px] mx-auto text-lg leading-6 box-border font-custom">
        <Banner />
        <Greeting />
        <Calender />
        <GalleryWrap />
        <Invitation />
        <Call />
        <Location />
        <Account />
        <Comment />
      </main>
    </NavermapsProvider>
  );
}

export default Main;
