import { motion } from "framer-motion";

const Projects = () => {
  return (
    <main className="flex w-full justify-center">
      <motion.div
        className="w-8/12 max-xl:w-full"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="my-8 w-full text-center text-5xl capitalize">
          MY PROJECTS
        </h1>
        <ul className="flex w-full flex-col gap-10">
          <li className="flex h-64 w-full justify-between gap-x-[10%] max-md:h-fit max-md:flex-col">
            <img
              className="max-h-64 rounded-xl max-md:max-h-fit"
              src="https://img.freepik.com/free-photo/beautiful-shot-forest-with-tall-green-trees_181624-20615.jpg"
            />
            <div className="flex flex-col justify-between gap-y-4 max-md:items-center">
              <p className="text-white [font-size:_clamp(.8em,1vw,10em)]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis pariatur nulla ex accusamus ducimus sequi, aliquid
                vero odio quaerat eveniet mollitia in iure rem. Corporis nisi
                ducimus numquam explicabo dolorum!
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
              <div className="flex gap-x-[7%]">
                <button className="w-32 rounded-xl border p-3">Github</button>
                <button className="w-32 rounded-xl border p-3">Demo</button>
              </div>
            </div>
          </li>
        </ul>
      </motion.div>
    </main>
  );
};

export default Projects;
