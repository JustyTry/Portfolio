import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mt-8 flex w-full flex-col items-center">
      <h1 className="my-8 text-5xl">What I do</h1>
      <ul className="grid h-fit w-8/12 grid-cols-3 gap-x-12 max-xl:gap-y-12 max-lg:w-full max-md:grid-cols-1">
        <motion.li
          initial={{ opacity: 0, y: "50%", rotate: -30 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex h-full w-full flex-col items-center rounded-xl border bg-[#131313] pb-8 duration-500 hover:bg-white hover:text-black max-md:py-8"
        >
          <img
            src="https://www.nexel.in/media/blog/banner/web_development_Z62jy4k.jpg"
            className="my-8 h-32 w-32 rounded-full max-md:m-0 max-md:h-48 max-md:w-48"
          />
          <h2 className="mb-4 border-b pb-4 text-xl">Web Development</h2>
          <p className="text-md px-4">
            I use my knowledge in HTML, CSS, Javascript to create responsible
            adaptive websites
          </p>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: "50%", rotate: -30 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex h-full w-full flex-col items-center rounded-xl border bg-[#131313] pb-8 duration-500 hover:bg-white hover:text-black max-md:py-8"
        >
          <img
            src="https://www.nexel.in/media/blog/banner/web_development_Z62jy4k.jpg"
            className="my-8 h-32 w-32 rounded-full max-md:m-0 max-md:h-48 max-md:w-48"
          />
          <h2 className="mb-4 border-b pb-4 text-xl">Web Development</h2>
          <p className="text-md px-4">
            I use my knowledge in HTML, CSS, Javascript to create responsible
            adaptive websites
          </p>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: "50%", rotate: -30 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex h-full w-full flex-col items-center rounded-xl border bg-[#131313] pb-8 duration-500 hover:bg-white hover:text-black max-md:py-8"
        >
          <img
            src="https://www.nexel.in/media/blog/banner/web_development_Z62jy4k.jpg"
            className="my-8 h-32 w-32 rounded-full max-md:m-0 max-md:h-48 max-md:w-48"
          />
          <h2 className="mb-4 border-b pb-4 text-xl">Web Development</h2>
          <p className="text-md px-4">
            I use my knowledge in HTML, CSS, Javascript to create responsible
            adaptive websites
          </p>
        </motion.li>
      </ul>
    </div>
  );
};

export default About;
