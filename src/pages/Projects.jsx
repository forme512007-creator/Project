import Navbar from "../components/Navbar";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      tech: "React, Tailwind CSS",
      desc: "Modern responsive portfolio with animations and dark UI.",
      github: "#",
    },
    {
      title: "Weather App",
      tech: "React, API",
      desc: "Real-time weather forecasting application.",
      github: "#",
    },
    {
      title: "AI Chat App",
      tech: "React, OpenAI API",
      desc: "AI-powered chatbot with modern interface.",
      github: "#",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white px-4 sm:px-6 py-12 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          My Projects
        </h1>

        <p className="text-center text-gray-400 mb-16">
          Some projects I have built using modern web technologies.
        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 transition duration-300"
            >
              <h2 className="text-2xl font-bold mb-3">
                {project.title}
              </h2>

              <p className="text-cyan-400 mb-3">
                {project.tech}
              </p>

              <p className="text-gray-400 mb-5">
                {project.desc}
              </p>

              <a
                href={project.github}
                className="inline-block bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;