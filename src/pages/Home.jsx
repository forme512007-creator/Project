import Navbar from "../components/Navbar";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profile from "../assets/profile.jpg";

function Home() {
return (
<> <Navbar />


  <section className="min-h-screen bg-slate-950 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 pt-24">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-xl mb-2">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Harsh Panchal
          </h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "AI / ML Student",
              2000,
              "Web Designer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-3xl font-semibold mt-4"
          />

          <p className="text-gray-400 mt-6 text-lg max-w-xl">
            I am a B.Tech Artificial Intelligence & Machine Learning
            student who loves building beautiful, responsive and
            modern web applications using React and Tailwind CSS.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-8 py-3 rounded-full bg-cyan-500 hover:scale-105 transition">
              View Projects
            </button>

            <button className="px-8 py-3 rounded-full border border-cyan-500 hover:bg-cyan-500/10 transition">
              Download CV
            </button>
          </div>

          <div className="flex gap-5 text-3xl mt-8">
            <FaGithub className="hover:text-cyan-400 cursor-pointer" />
            <FaLinkedin className="hover:text-cyan-400 cursor-pointer" />
            <FaInstagram className="hover:text-cyan-400 cursor-pointer" />
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

            <img
              src={profile}
              alt="Harsh Panchal"
              className="relative w-96 h-96 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_50px_rgba(6,182,212,0.5)]"
            />
          </div>
        </motion.div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mt-24">
        <div className="bg-slate-900 p-8 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-cyan-400">10+</h2>
          <p className="text-gray-400 mt-2">Projects Completed</p>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-cyan-400">2+</h2>
          <p className="text-gray-400 mt-2">Years Coding</p>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-cyan-400">AI/ML</h2>
          <p className="text-gray-400 mt-2">Engineering Student</p>
        </div>
      </div>
    </div>
  </section>
</>
);
}

export default Home;
