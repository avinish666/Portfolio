import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaShoppingCart,
} from "react-icons/fa";

const experiences = [
  {
    type: "experience",
    icon: <FaBriefcase />,
    date: "2025 - Present",
    title: "Full Stack Developer",
    company: "Freelance / Personal Projects",
    description:
      "Developing modern web applications, business websites, dashboards, e-commerce solutions and API-driven applications using React, Node.js, Express and MongoDB.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },

  {
    type: "experience",
    icon: <FaShoppingCart />,
    date: "2025 - Present",
    title: "E-commerce & Shopify Developer",
    company: "E-commerce Projects",
    description:
      "Working on Shopify stores, product management, customer experience, conversion optimization and e-commerce workflows.",
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "E-commerce",
    ],
  },

  {
    type: "project",
    icon: <FaCode />,
    date: "2026",
    title: "Full Stack Portfolio Platform",
    company: "Personal Project",
    description:
      "Building a complete portfolio platform with React, animations, Node.js, Express, MongoDB, authentication, blog management and an admin dashboard.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
  },

  {
    type: "education",
    icon: <FaGraduationCap />,
    date: "Continuous Learning",
    title: "Software Development",
    company: "Self-Learning & Practical Projects",
    description:
      "Continuously improving development skills through practical projects, modern technologies, problem solving and real-world application development.",
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "AI",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        py-24
        px-6
        bg-white
        dark:bg-slate-900
        text-slate-900
        dark:text-white
        transition-colors
        duration-500
        overflow-hidden
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="
            text-blue-600
            dark:text-blue-400
            font-semibold
            uppercase
            tracking-widest
          ">
            My Journey
          </p>

          <h2 className="
            text-4xl
            md:text-5xl
            font-extrabold
            mt-3
          ">
            Experience &{" "}
            <span className="text-blue-500">
              Education
            </span>
          </h2>

          <p className="
            max-w-2xl
            mx-auto
            mt-5
            text-slate-600
            dark:text-slate-400
          ">
            A timeline of my development journey, projects,
            experience and continuous learning.
          </p>
        </motion.div>


        {/* TIMELINE */}

        <div className="relative">

          {/* CENTER LINE */}

          <div className="
            absolute
            left-4
            md:left-1/2
            top-0
            bottom-0
            w-1
            bg-gradient-to-b
            from-blue-500
            via-cyan-400
            to-blue-500
            md:-translate-x-1/2
            rounded-full
          " />


          {/* ITEMS */}

          <div className="space-y-16">

            {experiences.map((item, index) => {

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -80 : 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  className="
                    relative
                    grid
                    md:grid-cols-2
                    gap-8
                  "
                >

                  {/* LEFT */}

                  <div
                    className={`
                      ${
                        isLeft
                          ? "md:text-right md:pr-12"
                          : "md:col-start-2 md:pl-12"
                      }
                      pl-12
                      md:pl-0
                    `}
                  >

                    <div className="
                      inline-block
                      w-full
                      bg-slate-50
                      dark:bg-slate-950
                      border
                      border-slate-200
                      dark:border-slate-800
                      rounded-2xl
                      p-7
                      shadow-lg
                      hover:shadow-2xl
                      hover:border-blue-500
                      transition-all
                      duration-300
                      group
                    ">

                      {/* DATE */}

                      <span className="
                        inline-block
                        text-sm
                        font-semibold
                        text-blue-600
                        dark:text-blue-400
                        bg-blue-100
                        dark:bg-blue-500/10
                        px-4
                        py-1.5
                        rounded-full
                      ">
                        {item.date}
                      </span>


                      {/* TITLE */}

                      <h3 className="
                        text-2xl
                        font-bold
                        mt-4
                        group-hover:text-blue-500
                        transition-colors
                      ">
                        {item.title}
                      </h3>


                      {/* COMPANY */}

                      <p className="
                        text-blue-500
                        font-medium
                        mt-2
                      ">
                        {item.company}
                      </p>


                      {/* DESCRIPTION */}

                      <p className="
                        text-slate-600
                        dark:text-slate-400
                        leading-7
                        mt-4
                      ">
                        {item.description}
                      </p>


                      {/* TECHNOLOGIES */}

                      <div className="
                        flex
                        flex-wrap
                        gap-2
                        mt-5
                        md:justify-end
                      ">

                        {item.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="
                                text-xs
                                font-medium
                                px-3
                                py-1.5
                                rounded-full
                                bg-slate-200
                                dark:bg-slate-800
                                text-slate-700
                                dark:text-slate-300
                              "
                            >
                              {technology}
                            </span>
                          )
                        )}

                      </div>

                    </div>

                  </div>


                  {/* TIMELINE DOT */}

                  <motion.div
                    whileInView={{
                      scale: [0, 1.2, 1],
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      absolute
                      left-4
                      md:left-1/2
                      top-8
                      w-8
                      h-8
                      -translate-x-1/2
                      rounded-full
                      bg-blue-500
                      border-4
                      border-white
                      dark:border-slate-900
                      shadow-lg
                      z-10
                      flex
                      items-center
                      justify-center
                      text-white
                      text-xs
                    "
                  >
                    {item.icon}
                  </motion.div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}