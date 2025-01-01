
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="about-page d-flex justify-content-center align-items-center mt-4 bg-white">
      <motion.div
        className="text-center col-lg-6 col-sm-10 col-md-10 col-10"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-danger"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          QuizMaster
        </motion.h1>
        <motion.p
          className="text-black fs-4"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          Welcome to QuizMaster, the ultimate platform to test your knowledge
          and have fun while learning! Whether you're preparing for exams,
          exploring new topics, or just challenging your friends, QuizMaster
          offers quizzes across a variety of categories including:
        </motion.p>

        <motion.div
          className="align-items-center justify-content-center d-flex"
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          <ul className="text-start text-black">
            <li>Metals and Non-Metals</li>
            <li>Magnetic Effects of Electric Current</li>
            <li>How Do Organisms Reproduce</li>
            <li>Heredity</li>
          </ul>
        </motion.div>

        <motion.p
          className="text-black fs-4"
          variants={fadeIn}
          transition={{ delay: 0.8 }}
        >
          With our interactive and user-friendly interface, you'll enjoy an
          engaging experience tailored just for you. Dive in and become a quiz
          master today!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
