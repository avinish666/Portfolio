
 import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

const skillCategories = {
  Frontend: [
    { name: "React.js", level: 90, icon: <FaReact /> },
    { name: "JavaScript", level: 88, icon: <FaJs /> },
    { name: "HTML5", level: 95, icon: <FaHtml5 /> },
    { name: "CSS / Tailwind", level: 90, icon: <FaCss3Alt /> },
  ],

  Backend: [
    { name: "Node.js", level: 85, icon: <FaNodeJs /> },
    { name: "Express.js", level: 82, icon: <FaNodeJs /> },
    { name: "MongoDB", level: 80, icon: <FaDatabase /> },
  ],

  Tools: [
    { name: "Git", level: 88, icon: <FaGitAlt /> },
    { name: "GitHub", level: 90, icon: <FaGithub /> },
  ],
};

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{ y: -6 }}
      className="
        group
        bg-white dark:bg-slate-900
        border border-slate-200 dark:border-slate-800
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-xl
        hover:border-blue-500
        transition-all duration-300
      "
    >
      <div className="flex items-center justify-between mb-5">

        <div className="flex items-center gap-4">

          <div className="
            text-3xl
            text-blue-500
            group-hover:scale-125
            group-hover:rotate-6
            transition-all duration-300
          ">
            {skill.icon}
          </div>

          <div>
            <h3 className="
              font-bold
              text-slate-900 dark:text-white
            ">
              {skill.name}
            </h3>

            <p className="
              text-xs
              text-slate-500 dark:text-slate-400
              mt-1
            ">
              Technical Skill
            </p>
          </div>

        </div>

        <span className="text-blue-500 font-bold">
          {skill.level}%
        </span>

      </div>

      <div className="
        h-3
        bg-slate-200 dark:bg-slate-800
        rounded-full
        overflow-hidden
      ">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{
            duration: 1.2,
            delay: 0.2 + index * 0.1,
            ease: "easeOut",
          }}
          className="
            h-full
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-blue-400
            rounded-full
          "
        />
      </div>

    </motion.div>
  );
}

function CircularSkill({ skill, index }) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference -
    (skill.level / 100) * circumference;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.6,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      whileHover={{
        scale: 1.1,
      }}
      className="flex flex-col items-center"
    >

      <div className="relative w-36 h-36">

        <svg
          viewBox="0 0 120 120"
          className="w-full h-full -rotate-90"
        >

          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            strokeWidth="8"
            className="
              stroke-slate-200
              dark:stroke-slate-800
            "
          />

          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            className="stroke-blue-500"
            strokeDasharray={circumference}
            initial={{
              strokeDashoffset: circumference,
            }}
            animate={{
              strokeDashoffset: offset,
            }}
            transition={{
              duration: 1.5,
              delay: index * 0.2,
            }}
          />

        </svg>

        <div className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
        ">

          <span className="
            text-2xl
            font-extrabold
            text-slate-900 dark:text-white
          ">
            {skill.level}%
          </span>

          <span className="
            text-xs
            text-slate-500 dark:text-slate-400
          ">
            Proficiency
          </span>

        </div>

      </div>

      <div className="
        flex
        items-center
        gap-2
        mt-5
      ">

        <span className="text-xl text-blue-500">
          {skill.icon}
        </span>

        <span className="
          font-semibold
          text-slate-900 dark:text-white
        ">
          {skill.name}
        </span>

      </div>

    </motion.div>
  );
}

export default function Skills() {

  const [activeCategory, setActiveCategory] =
    useState("Frontend");

  const currentSkills =
    skillCategories[activeCategory];

  return (
    <section
      id="skills"
      className="
        py-24
        px-6
        bg-slate-50
        dark:bg-slate-950
        text-slate-900
        dark:text-white
        transition-colors duration-500
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >

          <p className="
            text-blue-600
            dark:text-blue-400
            font-semibold
            uppercase
            tracking-[0.3em]
            text-sm
          ">
            My Expertise
          </p>

          <h2 className="
            text-4xl
            md:text-6xl
            font-extrabold
            mt-4
          ">
            Skills &{" "}
            <span className="text-blue-500">
              Technologies
            </span>
          </h2>

          <p className="
            max-w-2xl
            mx-auto
            mt-6
            text-slate-600
            dark:text-slate-400
            leading-7
          ">
            A collection of technologies and tools I use
            to build modern, scalable and high-performance
            digital experiences.
          </p>

        </motion.div>


        {/* CATEGORY BUTTONS */}

        <div className="
          flex
          flex-wrap
          justify-center
          gap-4
          mt-12
          mb-14
        ">

          {Object.keys(skillCategories).map(
            (category) => {

              const active =
                activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`
                    relative
                    px-7
                    py-3
                    rounded-full
                    font-semibold
                    transition-all duration-300
                    ${
                      active
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                        : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:text-blue-500"
                    }
                  `}
                >
                  {category}

                  {active && (
                    <motion.span
                      layoutId="activeSkill"
                      className="
                        absolute
                        inset-0
                        rounded-full
                        border-2
                        border-blue-400
                      "
                    />
                  )}

                </button>
              );
            }
          )}

        </div>


        {/* SKILL BARS */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              grid
              md:grid-cols-2
              gap-6
            "
          >

            {currentSkills.map(
              (skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={index}
                />
              )
            )}

          </motion.div>

        </AnimatePresence>


        {/* CIRCULAR SECTION */}

        <div className="mt-28">

          <motion.h3
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-center
              mb-14
            "
          >
            Core{" "}
            <span className="text-blue-500">
              Technologies
            </span>
          </motion.h3>


          <div className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-10
            justify-items-center
          ">

            {[
              skillCategories.Frontend[0],
              skillCategories.Frontend[1],
              skillCategories.Backend[0],
              skillCategories.Backend[2],
            ].map(
              (skill, index) => (
                <CircularSkill
                  key={skill.name}
                  skill={skill}
                  index={index}
                />
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}