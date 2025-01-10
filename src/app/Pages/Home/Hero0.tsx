import Experience from "../../Components/ThreeJs/Cone";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen relative px-[2%]">
        <div className="absolute top-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          <br />
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          <br />
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          <br />
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          <br />
          pariatur.
        </div>
        <div className="absolute bottom-0 pb-[120px] cursor-pointer">MORE</div>
      </div>
      <div>
        <Experience />
      </div>
    </>
  );
}
