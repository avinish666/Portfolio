import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaShopify,
} from "react-icons/fa";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Add Your Certification Provider",
    date: "2026",
    icon: <FaCode />,
    description:
      "Certification covering modern frontend and backend web development technologies.",
    link: "#",
  },
  {
    title: "JavaScript Development",
    issuer: "Add Your Certification Provider",
    date: "2026",
    icon: <FaCode />,
    description:
      "Certification focused on JavaScript programming, application development, and modern web technologies.",
    link: "#",
  },
  {
    title: "MongoDB / Database Development",
    issuer: "Add Your Certification Provider",
    date: "2026",
    icon: <FaDatabase />,
    description:
      "Certification focused on databases, data management, and MongoDB application development.",
    link: "#",
  },
  {
    title: "Shopify Development",
    issuer: "Add Your Certification Provider",
    date: "2026",
    icon: <FaShopify />,
    description:
      "Certification or training related to Shopify development, e-commerce, and online store management.",
    link: "#",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            Certifications
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            My
            <span className="text-blue-500"> Certifications</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Certifications and professional learning achievements that
            demonstrate my continuous growth in technology and development.
          </p>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Certificate Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="group bg-slate-950 border border-slate-800 rounded-2xl p-7 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-start gap-5">

                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-2xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  {certificate.icon}
                </div>

                {/* Content */}
                <div className="flex-1">

                  <div className="flex flex-wrap justify-between gap-3">

                    <h3 className="text-xl font-bold">
                      {certificate.title}
                    </h3>

                    <span className="text-sm text-blue-400">
                      {certificate.date}
                    </span>

                  </div>

                  <p className="text-blue-500 text-sm font-semibold mt-2">
                    {certificate.issuer}
                  </p>

                  <p className="text-gray-400 mt-4 leading-7">
                    {certificate.description}
                  </p>

                  {/* View Certificate */}
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-blue-500 hover:text-blue-400 font-semibold transition"
                  >
                    View Certificate
                    <FaExternalLinkAlt className="text-sm" />
                  </a>

                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-14"
        >
          <div className="inline-flex items-center gap-3 text-gray-400">
            <FaCertificate className="text-blue-500" />
            <span>
              Continuously learning and building new skills.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}