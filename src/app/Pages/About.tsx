import { Abel } from "@next/font/google";

const abel = Abel({
  subsets: ["latin"],
  weight: ["400"],
});

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-auto p-[2%]">
        <div className={`${abel.className} text-[#ffffff] text-[46px]`}>
          I&apos;m a front-end developer based in Laguna, specializing in web
          development. I currently work at Blink Creative Studio, where I focus
          on creating innovative and functional digital experiences. Feel free
          to reach out for opportunities, collaborations, or more information
          about my work!
        </div>
      </div>
    </>
  );
}
