import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";

const About = () => {
  return (
    <main className="w-full flex justify-center mt-8">
      <div className="w-8/12 grid grid-cols-2 gap-x-12">
        <div className="text-white">
          <h1 className="text-5xl mb-8">About me</h1>
          <p className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            similique error earum tenetur totam enim unde nihil ratione! Ut,
            cumque corrupti! Deserunt quibusdam veniam numquam quo dolorum a rem
            autem.
          </p>
        </div>
        <div className="w-8/12">
          <ul className="w-full grid grid-cols-4 items-center gap-10">
            <li className="w-full flex justify-center">
              <img
                src={javascript}
                alt="javascript"
                className="w-full h-auto"
              />
            </li>
            <li className="w-full flex justify-center">
              <img src={mongodb} alt="mongodb" className="w-full h-auto" />
            </li>
            <li className="w-full flex justify-center">
              <img src={nextjs} alt="nextjs" className="w-full h-auto" />
            </li>
            <li className="w-full flex justify-center">
              <img src={nodejs} alt="nodejs" className="w-full h-auto" />
            </li>
            <li className="w-full flex justify-center">
              <img src={react} alt="react" className="w-full h-auto" />
            </li>
            <li className="w-full flex justify-center">
              <img src={tailwind} alt="tailwind" className="w-full h-auto" />
            </li>
            <li className="w-full flex justify-center">
              <img
                src={typescript}
                alt="typescript"
                className="w-full h-auto"
              />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default About;
