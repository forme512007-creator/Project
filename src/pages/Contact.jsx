import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";


const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

function Contact() {
  // Load EmailJS credentials from .env
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="bg-slate-900 p-5 sm:p-8 rounded-xl w-full max-w-xl mx-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Contact Me
          </h1>

          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={ContactSchema}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              // Send email via EmailJS
              emailjs
                .send(serviceId, templateId, values, publicKey)
                .then((response) => {
                  console.log("Success!", response.status, response.text);
                  alert("Message sent successfully!");
                  resetForm();
                  setSubmitting(false);
                })
                .catch((err) => {
                  console.error("Failed to send email:", err);
                  alert("Failed to send message.");
                  setSubmitting(false);
                });
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                {/* Name */}
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full p-4 rounded bg-slate-800"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-4 rounded bg-slate-800"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                {/* Message */}
                <div>
                  <Field
                    as="textarea"
                    rows="5"
                    name="message"
                    placeholder="Message"
                    className="w-full p-4 rounded bg-slate-800"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-500 py-4 rounded hover:bg-cyan-600 transition"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Contact;
