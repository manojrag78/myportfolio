import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

const AboutMe = () => {
  return (
    <LampContainer>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-base md:text-lg lg:text-xl text-gray-100 max-w-4xl mx-auto text-center leading-relaxed px-4"
      >
        Experienced MEAN and MERN Stack Developer with expertise in Risk
        Management, SOD, ITGC, and ITAC. Skilled in building scalable web
        applications and ensuring robust security and compliance frameworks.
        Developed a Power BI-like dashboard for data visualization and
        analytics, enhancing decision-making processes. Proficient in end-to-end
        development, aligning IT solutions with business goals with a strong
        focus on risk mitigation and control implementation. Passionate about
        delivering secure, efficient, and innovative technology solutions.
      </motion.p>
    </LampContainer>
  );
};

export default AboutMe;
