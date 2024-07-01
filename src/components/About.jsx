import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";

const About = () => {
  return (
    <main className="mb-96 mt-8 flex w-full flex-col items-center">
      <h1 className="my-8 text-5xl">What I do</h1>
      <ul className="grid h-96 w-8/12 grid-cols-3 gap-x-12">
        <li className="flex h-full w-full flex-col items-center justify-center rounded-xl border bg-[#131313] duration-500 hover:bg-emerald-100 hover:text-black">
          <h2 className="mb-4 border-b pb-4 text-xl">Web Development</h2>
          <p className="text-md px-4">
            I use my knowledge in HTML, CSS, Javascript to create responsible
            adaptive websites
          </p>
        </li>
        <li className="flex h-full w-full flex-col items-center justify-center rounded-xl border bg-[#131313] duration-500 hover:bg-emerald-100">
          <h2 className="mb-4 border-b pb-4 text-xl">Web Development</h2>
          <p className="text-md px-4">
            I use my knowledge in HTML, CSS, Javascript to create responsible
            adaptive websites
          </p>
        </li>{" "}
        <li className="flex h-full w-full flex-col items-center justify-center rounded-xl border bg-[#131313] duration-500 hover:bg-emerald-100">
          <h2 className="mb-4 border-b pb-4 text-xl">Web Development</h2>
          <p className="text-md px-4">
            I use my knowledge in HTML, CSS, Javascript to create responsible
            adaptive websites
          </p>
        </li>
      </ul>
    </main>
  );
};

export default About;
