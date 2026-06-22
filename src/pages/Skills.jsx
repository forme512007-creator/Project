import Navbar from "../components/Navbar";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-10">
        <h1 className="text-center text-5xl font-bold mb-12">
          Skills
        </h1>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 p-8 rounded-xl text-center hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;