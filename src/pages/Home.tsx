import Navbar from "../component/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Harsh Panchal</h1>

          <h2 className="text-2xl mt-4 text-gray-700">
            Web Developer
          </h2>

          <p className="mt-3 text-gray-600">
            B.Tech AI & ML Student
          </p>

          <p className="text-gray-500 mt-2">
            Passionate about Coding & Building Web Applications
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;