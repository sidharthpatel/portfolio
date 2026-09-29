import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Where I&apos;m studying</p>
				<h2 className={styles.sectionHeadText}>Education.</h2>
			</motion.div>

			<div className="mt-12 flex flex-col gap-6">
				{education.map((item, index) => (
					<motion.div
						key={`${item.school}-${item.degree}`}
						variants={fadeIn("up", "spring", index * 0.5, 0.75)}
						className="bg-tertiary rounded-2xl p-8 max-w-3xl"
					>
						<h3 className="text-white text-[24px] font-bold">{item.school}</h3>
						<p className="text-secondary text-[16px] font-semibold mt-1">
							{item.degree}
						</p>
						{item.specialization && (
							<p className="text-secondary text-[16px] mt-1">
								Specialization: {item.specialization}
							</p>
						)}
						<p className="text-secondary text-[14px] italic mt-3">
							{item.date}
						</p>
						{item.coursework && (
							<div className="mt-6">
								<h4 className="text-white text-[16px] font-bold mb-3">
									Coursework
								</h4>
								<ul className="flex flex-wrap gap-2 list-none">
									{item.coursework.map((course) => (
										<li
											key={course.code}
											className="bg-black-100 text-secondary text-[14px] rounded-full px-4 py-2"
										>
											<span className="text-white-100">{course.name}</span>
											<span className="ml-2 opacity-70">{course.code}</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</motion.div>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Education, "education");
