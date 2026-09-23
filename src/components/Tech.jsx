import { motion } from "framer-motion";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div
      className={`relative z-0 ${styles.padding} mx-auto max-w-7xl sm:px-16`}
    >
      <span className="hash-span" id="skills">
        &nbsp;
      </span>

      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-center text-[14px] text-secondary uppercase tracking-wider">
          Tools that I use
        </p>
        <h2 className="text-white text-center mb-5 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Tech Stack
        </h2>
      </motion.div>

      <ul className="mt-10 flex flex-wrap justify-center gap-4 list-none">
        {technologies.map((technology) => (
          <li
            key={technology.name}
            className="flex flex-col items-center gap-3 w-[140px] bg-tertiary rounded-xl py-6 px-4 border border-transparent hover:border-secondary transition-colors"
          >
            <img
              src={technology.icon}
              alt=""
              loading="lazy"
              className="w-12 h-12 object-contain rounded"
            />
            <span className="text-secondary text-[14px] font-medium">
              {technology.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tech;
