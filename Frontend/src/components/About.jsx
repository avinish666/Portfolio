import { motion } from "framer-motion";
import { FaLaptopCode, FaShoppingCart, FaChartLine } from "react-icons/fa";

export default function About() {
  const features = [
    {
      icon: <FaLaptopCode size={35} />,
      title: "Web Development",
      desc: "Building responsive and modern web applications using React and JavaScript.",
    },
    {
      icon: <FaShoppingCart size={35} />,
      title: "Shopify Development",
      desc: "Creating high-converting Shopify stores with custom features and themes.",
    },
    {
      icon: <FaChartLine size={35} />,
      title: "Business Growth",
      desc: "Helping businesses improve their online presence and increase sales.",
    },
  ];

  return (
    <section id="about" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            I'm Avinish, a passionate developer focused on creating
            professional websites, Shopify stores, and business solutions that
            deliver great user experiences and measurable results.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "10+", label: "Projects" },
            { value: "100%", label: "Dedication" },
            { value: "24/7", label: "Learning" },
            { value: "∞", label: "Ideas" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-slate-800 rounded-xl p-6 text-center shadow-lg"
            >
              <h3 className="text-4xl font-bold text-blue-500">
                {item.value}
              </h3>
              <p className="text-gray-300 mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 rounded-2xl p-8 shadow-xl"
            >
              <div className="text-blue-500 mb-5">{feature.icon}</div>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400 mt-4">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}