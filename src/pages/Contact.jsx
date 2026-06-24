import { useState } from "react";
import Navbar from "../components/Navbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="bg-slate-900 p-5 sm:p-8 rounded-xl w-full max-w-xl mx-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Contact Me
          </h1>

          {success && (
            <div className="mb-4 p-3 rounded bg-green-600 text-center">
              Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded bg-slate-800"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded bg-slate-800"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded bg-slate-800"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 py-4 rounded hover:bg-cyan-600 transition"
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