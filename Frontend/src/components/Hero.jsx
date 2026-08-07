import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const floatingCards = [
  {
    text: "React.js",
    position: "top-10 -left-8",
    delay: 0,
  },
  {
    text: "Shopify",
    position: "top-32 -right-10",
    delay: 0.5,
  },
  {
    text: "Node.js",
    position: "bottom-28 -left-12",
    delay: 1,
  },
  {
    text: "MongoDB",
    position: "bottom-10 -right-8",
    delay: 1.5,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-slate-50
        dark:bg-slate-950
        text-slate-900
        dark:text-white
        flex
        items-center
        pt-20
        transition-colors
        duration-500
      "
    >

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Large glowing circle */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-500/10
            dark:bg-blue-500/10
            blur-3xl
            -top-40
            -left-40
          "
        />

        {/* Second glowing circle */}
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            w-[450px]
            h-[450px]
            rounded-full
            bg-purple-500/10
            blur-3xl
            bottom-[-200px]
            right-[-150px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            dark:opacity-[0.08]
          "
          style={{
            backgroundImage:
              "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >

            {/* Welcome badge */}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-blue-500/30
                bg-blue-500/10
                text-blue-600
                dark:text-blue-400
                text-sm
                font-semibold
              "
            >
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="w-2 h-2 bg-blue-500 rounded-full"
              />

              Available for opportunities
            </motion.div>

            {/* Heading */}

            <h1
              className="
                text-5xl
                md:text-7xl
                font-extrabold
                leading-tight
                mt-6
              "
            >
              Hi, I'm{" "}

              <motion.span
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-blue-500
                  via-purple-500
                  to-blue-500
                  bg-[length:200%_auto]
                "
              >
                Avinish
              </motion.span>
            </h1>

            {/* Typewriter */}

            <h2
              className="
                text-2xl
                md:text-3xl
                mt-5
                text-blue-600
                dark:text-blue-400
                font-semibold
              "
            >
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Shopify Developer",
                  "React Developer",
                  "E-commerce Specialist",
                  "AI Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="
                mt-6
                text-slate-600
                dark:text-gray-400
                leading-8
                max-w-xl
                text-lg
              "
            >
              I build modern websites, Shopify stores, business
              applications, dashboards, and AI-powered solutions
              that help businesses grow.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-5 mt-8"
            >

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 30px rgba(59,130,246,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-8
                  py-3
                  rounded-xl
                  font-semibold
                "
              >
                Hire Me
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download="Avinish-Resume.pdf"
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.95 }}
                className="
                  border
                  border-blue-500
                  text-blue-600
                  dark:text-blue-400
                  hover:bg-blue-600
                  hover:text-white
                  px-8
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Download Resume
              </motion.a>

            </motion.div>

            {/* Social icons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="
                flex
                gap-6
                mt-10
                text-3xl
                text-slate-600
                dark:text-gray-300
              "
            >

              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -6,
                  scale: 1.2,
                }}
                className="hover:text-blue-500"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -6,
                  scale: 1.2,
                }}
                className="hover:text-blue-500"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="mailto:your@email.com"
                whileHover={{
                  y: -6,
                  scale: 1.2,
                }}
                className="hover:text-blue-500"
              >
                <FaEnvelope />
              </motion.a>

            </motion.div>

          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="
              relative
              flex
              justify-center
              items-center
              min-h-[500px]
            "
          >

            {/* Rotating ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[350px]
                h-[350px]
                md:w-[430px]
                md:h-[430px]
                rounded-full
                border
                border-blue-500/30
                border-dashed
              "
            />

            {/* Outer ring */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[390px]
                h-[390px]
                md:w-[480px]
                md:h-[480px]
                rounded-full
                border
                border-purple-500/20
              "
            />

            {/* Glow */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                w-80
                h-80
                rounded-full
                bg-blue-500
                blur-[100px]
                opacity-30
              "
            />

            {/* Profile image */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80"
                alt="Avinish profile"
                className="
                  w-64
                  h-64
                  md:w-80
                  md:h-80
                  rounded-full
                  border-8
                  border-blue-500
                  object-cover
                  shadow-[0_0_60px_rgba(59,130,246,0.4)]
                "
              />

            </motion.div>

            {/* Floating technology cards */}

            {floatingCards.map((card) => (
              <motion.div
                key={card.text}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  delay: card.delay,
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`
                  absolute
                  ${card.position}
                  hidden
                  md:block
                  z-20
                  px-4
                  py-2
                  rounded-xl
                  bg-white/80
                  dark:bg-slate-900/80
                  backdrop-blur-lg
                  border
                  border-blue-500/30
                  shadow-xl
                  text-sm
                  font-semibold
                  text-blue-600
                  dark:text-blue-400
                `}
              >
                {card.text}
              </motion.div>
            ))}

          </motion.div>

        </div>

      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-blue-500
          text-2xl
        "
      >
        <FaArrowDown />
      </motion.a>

    </section>
  );
}