import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaShopify,
} from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "How I Build Modern React Applications",
    description:
      "A practical look at how I structure React applications for performance, scalability and maintainability.",
    category: "React",
    icon: <FaCode />,
    date: "August 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building High-Converting Shopify Stores",
    description:
      "Important principles behind creating Shopify stores that provide better user experiences and improve conversions.",
    category: "Shopify",
    icon: <FaShopify />,
    date: "August 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "From Frontend to Full Stack Development",
    description:
      "My approach to connecting React frontends with Node.js, Express and MongoDB backends.",
    category: "Full Stack",
    icon: <FaCode />,
    date: "August 2026",
    readTime: "7 min read",
  },
];

export default function BlogPreview() {
  return (
    <section
      id="blog"
      className="
        py-24
        px-6
        bg-slate-50
        dark:bg-slate-950
        text-slate-900
        dark:text-white
        transition-colors
        duration-500
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="
            text-blue-600
            dark:text-blue-400
            font-semibold
            uppercase
            tracking-widest
          ">
            My Blog
          </p>

          <h2 className="
            text-4xl
            md:text-5xl
            font-extrabold
            mt-3
          ">
            Latest{" "}
            <span className="text-blue-500">
              Articles
            </span>
          </h2>

          <p className="
            mt-5
            max-w-2xl
            mx-auto
            text-slate-600
            dark:text-slate-400
          ">
            I share what I learn about web development,
            e-commerce, technology and building digital products.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="
          grid
          md:grid-cols-3
          gap-8
        ">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                group
                bg-white
                dark:bg-slate-900
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
              "
            >

              {/* Icon */}
              <div className="
                w-14
                h-14
                rounded-xl
                bg-blue-100
                dark:bg-blue-500/10
                text-blue-600
                dark:text-blue-400
                flex
                items-center
                justify-center
                text-2xl
                group-hover:scale-110
                transition-transform
                duration-300
              ">
                {post.icon}
              </div>

              {/* Category */}
              <span className="
                inline-block
                mt-6
                text-sm
                font-semibold
                text-blue-600
                dark:text-blue-400
              ">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="
                text-2xl
                font-bold
                mt-2
                group-hover:text-blue-500
                transition-colors
              ">
                {post.title}
              </h3>

              {/* Description */}
              <p className="
                mt-4
                text-slate-600
                dark:text-slate-400
                leading-7
              ">
                {post.description}
              </p>

              {/* Meta */}
              <div className="
                flex
                justify-between
                mt-6
                text-sm
                text-slate-500
                dark:text-slate-500
              ">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              {/* Read Button */}
              <button
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  text-blue-600
                  dark:text-blue-400
                  font-semibold
                  group-hover:gap-4
                  transition-all
                "
              >
                Read Article
                <FaArrowRight />
              </button>

            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            className="
              inline-flex
              items-center
              gap-3
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-7
              py-3
              rounded-lg
              font-semibold
              transition-all
              duration-300
              hover:scale-105
            "
          >
            View All Articles
            <FaArrowRight />
          </button>
        </motion.div>

      </div>
    </section>
  );
}