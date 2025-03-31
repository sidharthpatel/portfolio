import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useState, useEffect } from "react";

const ExperienceCard = ({ experience, setSelectedExperience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232621" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      onTimelineElementClick={() => {
        setSelectedExperience(experience);
      }}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <p className="text-secondary text-[16px] font-semibold italic">
          Click to learn more
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const ExperienceModal = ({ selectedExperience, setSelectedExperience }) =>
  selectedExperience && (
    <div
      className="fixed z-[1] inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
      onClick={() => setSelectedExperience(null)}
      style={{ backdropFilter: "blur(4px)" }}
    >
      <div className="bg-[#1d1836] rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={() => setSelectedExperience(null)}
          className="absolute top-6 right-6 text-white text-3xl hover:text-secondary transition-colors"
        >
          &times;
        </button>

        <div className="flex items-start gap-6 mb-8">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ background: selectedExperience.iconBg }}
          >
            <img
              src={selectedExperience.icon}
              alt={selectedExperience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
          <div>
            <h3 className="text-white text-2xl font-bold">
              {selectedExperience.title}
            </h3>
            <p className="text-secondary text-lg font-semibold mt-1">
              {selectedExperience.company_name}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              {selectedExperience.date}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-white text-xl font-bold">
            Key Responsibilities:
          </h4>
          <ul className="list-disc ml-5 space-y-3">
            {selectedExperience.points.map((point, index) => (
              <li
                key={index}
                className="text-white-100 text-base leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        {selectedExperience.skills &&
          ((
            <div className="mt-8">
              <h4 className="text-white text-xl font-bold mb-4">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-3">
                {selectedExperience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm font-medium text-white bg-[#151030] rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ),
          document.getElementById("modal-root"))}
      </div>
    </div>
  );

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              setSelectedExperience={setSelectedExperience}
            />
          ))}
        </VerticalTimeline>
      </div>
      <ExperienceModal
        selectedExperience={selectedExperience}
        setSelectedExperience={setSelectedExperience}
      />
    </>
  );
};

export default SectionWrapper(Experience, "work");
