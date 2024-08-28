import Banner from "./Banner";
import Greeting from "./Greeting";

function Main() {
  return (
    <>
      <main className="flex justify-start items-center flex-col h-full w-full max-w-[620px] mx-auto text-lg leading-6 box-border font-custom">
        <Banner />
        <Greeting />
      </main>
    </>
  );
}

export default Main;
