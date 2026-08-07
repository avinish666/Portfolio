import { motion } from "framer-motion";
import {
  FaCode,
  FaShoppingCart,
  FaTools,
  FaRocket,
} from "react-icons/fa";

const stats = [
  {
    number: "10+",
    title: "Projects",
    icon: <FaCode />,
  },
  {
    number: "5+",
    title: "Technologies",
    icon: <FaTools />,
  },
  {
    number: "3+",
    title: "E-commerce Solutions",
    icon: <FaShoppingCart />,
  },
  {
    number: "100%",
    title: "Dedication",
    icon: <FaRocket />,
  },
];

export default function Stats() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-100
        dark:bg-slate-950
        text-slate-900
        dark:text-white
        py-20
        px-6
        transition-colors
        duration-500
      "
    >

      {/* Background glow */}

      <motion.div
        className="
          absolute
          w-72
          h-72
          bg-blue-500/10
          rounded-full
          blur-3xl
          -top-20
          left-10
        "
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="
          absolute
          w-72
          h-72
          bg-purple-500/10
          rounded-full
          blur-3xl
          -bottom-20
          right-10
        "
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
      />


      <div className="relative max-w-7xl mx-auto">

        {/* Section heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
          className="text-center mb-12"
        >
          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            My Journey
          </p>

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            mt-3
          ">
            Turning Ideas Into{" "}
            <span className="text-blue-500">
              Digital Solutions
            </span>
          </h2>
        </motion.div>


        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat, index) => (

            <motion.div
              key={stat.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="
                group
                relative
                overflow-hidden
                bg-white
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-800
                rounded-2xl
                p-7
                text-center
                shadow-lg
                hover:shadow-blue-500/20
                transition-all
                duration-500
              "
            >

              {/* Hover glow */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  bg-blue-500/5
                  transition
                  duration-500
                "
              />


              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  relative
                  text-blue-500
                  text-3xl
                  flex
                  justify-center
                "
              >
                {stat.icon}
              </motion.div>


              {/* Number */}

              <motion.h3
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.15 + 0.3,
                  duration: 0.5,
                }}
                className="
                  relative
                  text-4xl
                  font-extrabold
                  mt-4
                "
              >
                {stat.number}
              </motion.h3>


              {/* Title */}

              <p className="
                relative
                text-slate-500
                dark:text-gray-400
                mt-2
              ">
                {stat.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}