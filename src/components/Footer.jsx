import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="flex h-20 w-full justify-center">
      <div className="flex w-8/12 items-center justify-between text-white max-lg:w-full max-lg:flex-col-reverse">
        <div className="text-lg">&#169;2024 - AlexMAS</div>
        <div>
          <ul className="flex gap-x-4">
            <li>
              <img src={telegram} alt="telegram" className="h-8 w-8 invert" />
            </li>
            <li>
              <img src={whatsapp} alt="whatsapp" className="h-8 w-8 invert" />
            </li>
            <li>
              <img src={linkedin} alt="linkedin" className="h-8 w-8 invert" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
