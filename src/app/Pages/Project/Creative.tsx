import Image from "next/image";
import Img1 from "../../../assets/randomImage.png";

export default function Creative() {
  const sections = [
    {
      id: 1,
      text: "Identities, strategy, animation, UI design and more, driven by emotion.",
      image: Img1,
    },
    {
      id: 2,
      text: "Crafting unique experiences to inspire and connect with audiences.",
      image: Img1,
    },
    {
      id: 3,
      text: "Innovative solutions that blend creativity and technology seamlessly.",
      image: Img1,
    },
  ];

  return (
    <div className="flex flex-col">
      {sections.map((section) => (
        <div
          key={section.id}
          className="grid grid-cols-2 items-center justify-center w-full h-screen px-[5%] gap-8"
        >
          {section.id % 2 === 0 ? (
            <>
              {/* For even sections, image comes first */}
              <Image
                src={section.image}
                width={500}
                height={500}
                alt={`Creative Section ${section.id}`}
                className="rounded-lg shadow-lg"
              />
              <div className="text-lg font-medium text-[#ffffff]">
                {section.text}
              </div>
            </>
          ) : (
            <>
              {/* For odd sections, text comes first */}
              <div className="text-lg font-medium text-[#ffffff]">
                {section.text}
              </div>
              <Image
                src={section.image}
                width={500}
                height={500}
                alt={`Creative Section ${section.id}`}
                className="rounded-lg shadow-lg"
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
