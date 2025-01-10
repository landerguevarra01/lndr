export default function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "",
    },
    {
      name: "Facebook",
      url: "",
    },
    { name: "LinkedIn", url: "" },
  ];
  return (
    <>
      <div className="text-black">
        <div className="flex flex-col justify-center items-center text-center gap-10 bg-yellow-400 w-auto h-screen">
          <div>Chat about a project</div>
          <div>guevarralander0@gmail.com</div>
          <div>Follow us</div>
          {/* <div className="flex flex-row justify-center items-center gap-10">
            <div>Instagram</div>
            <div>Facebook</div>
            <div>LinkedIn</div>
          </div> */}
          <div
            className="flex flex-col lg:flex-row justify-between items-center gap-10"
            style={{
              fontFamily: "Helvetica",
              fontWeight: "bold",
              fontStyle: "normal",
            }}
          >
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} className="cursor-pointer">
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-white w-screen py-[10%] 2xl:text-[180px] xl:text-[160px] kg:text-[140px] md:text-[120px] sm:text-[100px] text-[80px] -mt-10 lg:flex-row">
          LANDER
        </div>
      </div>
    </>
  );
}
