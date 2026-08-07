import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition">

      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((item) => (
            <span
              key={item}
              className="bg-blue-600 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex justify-between mt-8">

          <a href={project.github}>
            <FaGithub />
          </a>

          <a href={project.live}>
            <FaExternalLinkAlt />
          </a>

        </div>

      </div>
    </div>
  );
}