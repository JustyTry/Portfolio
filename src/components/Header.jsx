import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";

const Header = () => {
  return (
    <header className="w-full h-screen">
      <div className="h-20 isolate bg-blue-500/30 border-b ring-black/5  aspect-video shadow-lg ring-1 backdrop-blur-md w-full text-green-500 capitalize flex justify-center  fixed">
        <ul className="w-8/12 grid grid-cols-2 items-center">
          <li className="w-full">{">_AlexMAS"}</li>

          <li className="w-full flex justify-end">
            <ul className="flex gap-x-4">
              <li>
                <img src={telegram} alt="telegram" className="w-8 h-8 invert" />
              </li>
              <li>
                <img src={whatsapp} alt="whatsapp" className="w-8 h-8 invert" />
              </li>
              <li>
                <img src={linkedin} alt="linkedin" className="w-8 h-8 invert" />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="h-dvh bg-fixed bg-[radial-gradient(#a5e7eb_1px,transparent_1px)] bg-[#080808] shadow-xl [background-size:64px_64px] flex flex-col justify-center gap-y-6 items-center">
        <h1 className="text-5xl text-white bg-scroll">I'm Alexander Maslak</h1>
        <h2 className="flex justify-center text-green-500 items-center text-3xl">
          Frontend Developer
        </h2>
      </div>
    </header>
  );
};

export default Header;
