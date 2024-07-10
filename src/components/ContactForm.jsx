import { motion } from "framer-motion";
const ContactForm = () => {
  return (
    <div className="my-24 flex w-full justify-center">
      <form className="flex w-8/12 flex-col gap-y-8 max-lg:w-full">
        <h1 className="w-full text-center text-5xl uppercase">Contact me</h1>
        <motion.input
          initial={{ opacity: 0, y: "50%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          placeholder="Имя"
          className="rounded-lg border bg-transparent bg-opacity-80 p-4 outline-none"
        />
        <motion.input
          initial={{ opacity: 0, y: "50%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          placeholder="Фамилия"
          className="rounded-lg border bg-transparent bg-opacity-80 p-4 outline-none"
        />
        <motion.textarea
          initial={{ opacity: 0, y: "50%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          placeholder="Кейс"
          className="min-h-40 resize-none rounded-lg border bg-transparent p-4 outline-none"
        ></motion.textarea>
        <div className="flex w-full justify-center p-4">
          <input
            type="submit"
            className="w-44 rounded-lg border p-4 text-center"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
