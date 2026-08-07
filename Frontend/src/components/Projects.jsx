import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaShopify,
  FaDatabase,
} from "react-icons/fa";

const projects = [
  {
    title: "Sleeply E-commerce",
    category: "E-commerce",
    description:
      "A modern mattress e-commerce platform with product browsing, customer experience, contact functionality and business-focused design.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80",
    technologies: ["React", "Shopify", "JavaScript"],
    icon: <FaShopify />,
    github: "https://github.com/",
    demo: "https://mysleeply.com/",
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "A modern developer portfolio featuring animations, dark mode, responsive design, projects, testimonials and contact functionality.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
    technologies: ["React", "Tailwind", "Framer Motion"],
    icon: <FaReact />,
    github: "https://github.com/",
    demo: "#home",
  },
  {
    title: "Business Dashboard",
    category: "Dashboard",
    description:
      "An interactive business dashboard designed to visualize important business information and provide a clean management experience.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    technologies: ["React", "Node.js", "MongoDB"],
    icon: <FaDatabase />,
    github: "https://github.com/",
    demo: "#projects",
  },
  {
    title: "AI Business Assistant",
    category: "AI",
    description:
      "An AI-powered business assistant concept designed to automate repetitive tasks and provide intelligent business support.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
    technologies: ["React", "Node.js", "AI"],
    icon: <FaNodeJs />,
    github: "https://github.com/",
    demo: "#contact",
  },
];

const categories = [
  "All",
  "Web Development",
  "E-commerce",
  "Dashboard",
  "AI",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-24
        px-6
        bg-white
        dark:bg-slate-950
        text-slate-900
        dark:text-white
        transition-colors
        duration-500
      "
    >

      {/* Background glow */}

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -left-40
          w-96
          h-96
          bg-blue-500/10
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-40
          -right-40
          w-96
          h-96
          bg-purple-500/10
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-blue-500 font-semibold uppercase tracking-[0.3em] text-sm">
            My Work
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-4">
            Featured{" "}
            <span className="text-blue-500">
              Projects
            </span>
          </h2>

          <p className="
            max-w-2xl
            mx-auto
            mt-6
            text-slate-600
            dark:text-gray-400
            text-lg
            leading-8
          ">
            A selection of projects I've built using modern
            technologies to solve real-world problems.
          </p>
        </motion.div>

        {/* ================= FILTERS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            flex
            flex-wrap
            justify-center
            gap-3
            mt-12
          "
        >

          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`
                px-5
                py-2.5
                rounded-full
                font-medium
                border
                transition-all
                duration-300

                ${
                  activeCategory === category
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20"
                    : "border-slate-300 dark:border-slate-700 text-slate-600 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500"
                }
              `}
            >
              {category}
            </motion.button>
          ))}

        </motion.div>

        {/* ================= PROJECT GRID ================= */}

        <motion.div
          layout
          className="
            grid
            md:grid-cols-2
            gap-8
            mt-16
          "
        >

          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-slate-100
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-800
                shadow-xl
                hover:border-blue-500/50
                transition-colors
                duration-500
              "
            >

              {/* IMAGE */}

              <div className="
                relative
                h-64
                overflow-hidden
              ">

                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                {/* Image overlay */}

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-slate-950
                  via-transparent
                  to-transparent
                  opacity-80
                " />

                {/* Category */}

                <div className="
                  absolute
                  top-5
                  left-5
                  px-4
                  py-2
                  rounded-full
                  bg-black/50
                  backdrop-blur-md
                  text-white
                  text-sm
                  font-semibold
                ">
                  {project.category}
                </div>

                {/* Project icon */}

                <motion.div
                  whileHover={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="
                    absolute
                    bottom-5
                    right-5
                    w-12
                    h-12
                    rounded-xl
                    bg-blue-600
                    text-white
                    flex
                    items-center
                    justify-center
                    text-xl
                    shadow-lg
                  "
                >
                  {project.icon}
                </motion.div>

              </div>

              {/* CONTENT */}

              <div className="p-7">

                <h3 className="
                  text-2xl
                  font-bold
                  group-hover:text-blue-500
                  transition
                ">
                  {project.title}
                </h3>

                <p className="
                  mt-4
                  text-slate-600
                  dark:text-gray-400
                  leading-7
                ">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="
                  flex
                  flex-wrap
                  gap-2
                  mt-6
                ">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        px-3
                        py-1.5
                        rounded-lg
                        bg-blue-500/10
                        text-blue-600
                        dark:text-blue-400
                        text-sm
                        font-medium
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="
                  flex
                  gap-4
                  mt-7
                ">

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-2.5
                      rounded-lg
                      bg-slate-900
                      dark:bg-white
                      text-white
                      dark:text-slate-900
                      font-semibold
                    "
                  >
                    <FaGithub />
                    GitHub
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-2.5
                      rounded-lg
                      border
                      border-blue-500
                      text-blue-600
                      dark:text-blue-400
                      hover:bg-blue-600
                      hover:text-white
                      font-semibold
                      transition
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>

                </div>

              </div>

              {/* Hover glow */}

              <div className="
                absolute
                inset-0
                pointer-events-none
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                rounded-3xl
                shadow-[inset_0_0_40px_rgba(59,130,246,0.15)]
              " />

            </motion.article>
          ))}

        </motion.div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >

          <p className="
            text-slate-600
            dark:text-gray-400
            mb-5
          ">
            Interested in working together?
          </p>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 35px rgba(59,130,246,0.4)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              inline-flex
              items-center
              px-8
              py-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
            "
          >
            Let's Build Something Great
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}