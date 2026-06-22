import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

        <div className="bg-slate-900 p-8 rounded-xl w-full max-w-xl">

          <h1 className="text-4xl font-bold mb-8 text-center">
            Contact Me
          </h1>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 rounded bg-slate-800"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded bg-slate-800"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full p-4 rounded bg-slate-800"
            />

            <button
              className="w-full bg-cyan-500 py-4 rounded"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </>
  );
}

export default Contact;