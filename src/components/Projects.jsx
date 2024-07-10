import { motion } from "framer-motion";

const Projects = () => {
  return (
    <main className="flex w-full justify-center overflow-hidden">
      <div className="flex w-8/12 flex-col gap-y-12 max-lg:w-full">
        <h1 className="my-8 w-full text-center text-5xl uppercase">
          MY PROJECTS
        </h1>
        <motion.ul
          initial={{ opacity: 0, x: "-50%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex w-full flex-col gap-10"
        >
          <li className="grid h-64 w-full grid-cols-2 justify-between gap-x-[10%] max-md:h-fit max-md:grid-cols-1">
            <img
              className="h-full max-h-64 rounded-xl object-cover max-md:max-h-fit"
              src="images/juristk.png"
            />
            <div className="flex flex-col justify-between gap-y-4 max-md:items-center">
              <p className="text-white [font-size:_clamp(0.99em,1vw,0.5em)] max-md:py-4">
                ЮристК. Сайт юридической компании
              </p>
              <ul className="flex w-full flex-wrap gap-x-[2%] gap-y-3 text-purple-400 max-md:justify-center">
                <li className="border px-4 py-1 text-center duration-500 hover:bg-[#162b50]">
                  React
                </li>
                <li className="w-24 border px-4 py-1 text-center">Tailwind</li>
                <li className="w-24 border px-4 py-1 text-center">NextJS</li>
                <li className="w-24 border px-4 py-1 text-center">Python</li>
                <li className="w-24 border px-4 py-1 text-center">HuiJS</li>
              </ul>
              <div className="">
                <button className="w-44 rounded-xl border p-3">Check it</button>
              </div>
            </div>
          </li>
        </motion.ul>
        <motion.ul
          initial={{ opacity: 0, x: "-50%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex w-full flex-col gap-10"
        >
          <li className="grid h-64 w-full grid-cols-2 justify-between gap-x-[10%] max-md:h-fit max-md:grid-cols-1">
            <img
              className="h-full max-h-64 rounded-xl object-cover max-md:max-h-fit"
              src="images/mdnord.png"
            />
            <div className="flex flex-col justify-between gap-y-4 max-md:items-center">
              <p className="text-white [font-size:_clamp(0.99em,1vw,0.5em)] max-md:py-4">
                ЮристК. Сайт юридической компании
              </p>
              <ul className="flex w-full flex-wrap gap-x-[2%] gap-y-3 text-purple-400 max-md:justify-center">
                <li className="border px-4 py-1 text-center duration-500 hover:bg-[#162b50]">
                  React
                </li>
                <li className="w-24 border px-4 py-1 text-center">Tailwind</li>
                <li className="w-24 border px-4 py-1 text-center">NextJS</li>
                <li className="w-24 border px-4 py-1 text-center">Python</li>
                <li className="w-24 border px-4 py-1 text-center">HuiJS</li>
              </ul>
              <div className="">
                <button className="w-44 rounded-xl border p-3">Check it</button>
              </div>
            </div>
          </li>
        </motion.ul>
        <motion.ul
          initial={{ opacity: 0, x: "-50%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex w-full flex-col gap-10"
        >
          <li className="grid h-64 w-full grid-cols-2 justify-between gap-x-[10%] max-md:h-fit max-md:grid-cols-1">
            <img
              className="h-full max-h-64 rounded-xl object-cover max-md:max-h-fit"
              src="images/juristk.png"
            />
            <div className="flex flex-col justify-between gap-y-4 max-md:items-center">
              <p className="text-white [font-size:_clamp(0.99em,1vw,0.5em)] max-md:py-4">
                ЮристК. Сайт юридической компании
              </p>
              <ul className="flex w-full flex-wrap gap-x-[2%] gap-y-3 text-purple-400 max-md:justify-center">
                <li className="border px-4 py-1 text-center duration-500 hover:bg-[#162b50]">
                  React
                </li>
                <li className="w-24 border px-4 py-1 text-center">Tailwind</li>
                <li className="w-24 border px-4 py-1 text-center">NextJS</li>
                <li className="w-24 border px-4 py-1 text-center">Python</li>
                <li className="w-24 border px-4 py-1 text-center">HuiJS</li>
              </ul>
              <div className="">
                <button className="w-44 rounded-xl border p-3">Check it</button>
              </div>
            </div>
          </li>
        </motion.ul>
      </div>
    </main>
  );
};

export default Projects;
