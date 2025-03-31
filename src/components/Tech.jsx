import React from "react";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="relative z-0">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-center text-[14px] text-secondary uppercase tracking-wider">
          Tools that I use
        </p>
        <h2 className="text-white text-center mb-5 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Tech Stack
        </h2>
      </motion.div>

      <div
        className={`flex flex-row flex-wrap justify-center gap-10 relative z-0 ${styles.padding} max-w-7xl mx-auto `}
      >
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-center text-secondary">{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
