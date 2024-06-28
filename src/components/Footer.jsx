import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center h-20">
      <div className="w-8/12 text-white flex items-center justify-between">
        <div className="text-lg">&#169;2024 - AlexMAS</div>
        <div>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
