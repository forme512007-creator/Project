import Navbar from "../component/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>

          <p className="mb-4">
            My name is Harsh Panchal.
          </p>

          <p className="mb-4">
            I am pursuing B.Tech in Artificial Intelligence and Machine Learning.
          </p>

          <p className="mb-4">
            I work as a Web Developer and enjoy creating responsive websites.
          </p>

          <p>
            My hobby is coding and learning new technologies.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;