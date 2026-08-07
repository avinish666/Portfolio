
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://portfolio-1-07p8.onrender.com/api/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Unable to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Let's Build Something
            <span className="text-blue-500"> Great</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Have a project, business idea, or opportunity?
            Send me a message and let's discuss it.
          </p>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold">
              Let's Talk
            </h3>

            <p className="text-gray-400 leading-8 mt-5">
              I'm open to discussing web development,
              Shopify projects, e-commerce solutions,
              freelance opportunities, and interesting
              technology projects.
            </p>

            <div className="flex items-center gap-5 mt-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <a
                  href="mailto:avinish729@gmail.com"
                  className="text-gray-200 hover:text-blue-500 transition"
                >
                  avinish729@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 mt-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Location
                </p>

                <p className="text-gray-200">
                  India
                </p>
              </div>
            </div>

            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/avinish666"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-xl hover:bg-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-xl hover:bg-blue-600 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-950 border border-slate-800 rounded-3xl p-8"
          >
            <form onSubmit={handleSubmit}>

              <div className="mb-5">
                <label className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm text-gray-400 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 disabled:cursor-not-allowed py-3 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02]"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}
              </button>

              {status && (
                <p
                  className={`text-center mt-5 ${
                    status.includes("successfully")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


