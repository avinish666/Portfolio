import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaUser,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Client Name",
    role: "Business Owner",
    message:
      "Avinish did a great job understanding our requirements and creating a clean, professional digital solution. His attention to detail and willingness to improve made the project a great experience.",
  },
  {
    name: "Client Name",
    role: "E-commerce Business",
    message:
      "The website experience was modern, responsive, and easy to use. Avinish understood the importance of user experience and e-commerce performance.",
  },
  {
    name: "Client Name",
    role: "Startup Founder",
    message:
      "Avinish is passionate about technology and continuously looks for better ways to solve problems. His approach to development and learning is impressive.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            What People
            <span className="text-blue-500"> Say</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Feedback and experiences from people I have worked with.
          </p>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300"
            >

              {/* Quote Icon */}
              <div className="absolute top-6 right-7 text-blue-500/20 text-5xl">
                <FaQuoteLeft />
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-gray-400 leading-7">
                "{testimonial.message}"
              </p>

              {/* Person */}
              <div className="flex items-center gap-4 mt-8">

                <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500">
                  <FaUser />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    {testimonial.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {testimonial.role}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-gray-400">
            Have a project in mind?
          </p>

          <a
            href="#contact"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Let's Work Together
          </a>
        </motion.div>

      </div>
    </section>
  );
}