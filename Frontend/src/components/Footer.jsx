import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              Avinish<span className="text-white">.</span>
            </h2>

            <p className="text-gray-400 mt-4">
              Full Stack Developer passionate about creating modern,
              responsive and scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <FaGithub className="hover:text-blue-400 cursor-pointer"/>

              <FaLinkedin className="hover:text-blue-400 cursor-pointer"/>

              <FaEnvelope className="hover:text-blue-400 cursor-pointer"/>

            </div>
          </div>

        </div>

        <hr className="my-10 border-slate-700"/>

        <div className="flex justify-between items-center">

          <p className="text-gray-500">
            © 2026 Avinish. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="bg-blue-600 p-3 rounded-full hover:bg-blue-700"
          >
            <FaArrowUp/>
          </a>

        </div>

      </div>

    </footer>
  );
}