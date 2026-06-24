import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white px-4 sm:px-6 py-10">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            About Me
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-8">
            My name is Harsh Panchal. I am pursuing
            B.Tech in Artificial Intelligence and Machine Learning.
            My profession is Web Development and my hobby is coding.
          </p>

        </div>
      </div>
    </>
  );
}

export default About;