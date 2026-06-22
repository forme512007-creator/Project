import Navbar from "../component/Navbar";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Contact Me
          </h1>

          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-3 rounded mb-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded mb-4"
            />

            {/* <textarea
              rows="4"
              placeholder="Message"
              className="w-full border p-3 rounded mb-4"
            ></textarea> */}

            <button
              className="w-full bg-blue-600 text-white py-3 rounded"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;