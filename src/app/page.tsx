import Hero1 from "./Pages/Home/Hero1";
import Header from "./Components/Header";
// import Creative from "./Pages/Project/Creative";
// import About from "./Pages/About";
// import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col overflow-x-hidden">
      <Header />
      <Hero1 />
      {/* <div className="flex flex-col lg:flex-row justify-center items-center border-[1px] border-solid border-white w-screen h-screen">
        <div className="border-[1px] border-solid border-white w-full h-auto">
          <Creative />
        </div>
        <div className="border-[1px] border-solid border-white w-full h-auto">
          <About />
        </div>
      </div> */}
      {/* <div className="w-full h-screen">
        <iframe
          src="https://www.crazygames.com/embed/golf-orbit"
          style={{ width: "100%", height: "100%" }}
          frameBorder="0"
          allow="gamepad *;"
        ></iframe>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
}
