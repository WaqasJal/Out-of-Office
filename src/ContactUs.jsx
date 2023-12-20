import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../src/images/OOOLogo.svg";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#0d1418] w-full h-screen flex flex-col justify-center items-center">
    <Link to="/">
      <div className="flex items-center w-16 h-16 fixed z-10 mt-4 ml-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <img src={logo} alt="Company Logo" className="logo" />
        </motion.div>
      </div>
    </Link>

    <p className="text-white text-4xl px-4 md:text-5xl font-thin font-Inter mt-8 md:mt-0 md:ml-4 w-full md:w-auto text-left">
  Make your vision a reality.
</p>

    <section className="text-gray-700 body-font md:w-1/2 md:self-center md:mr-4 p-4 md:p-0">
      <div className="flex flex-col text-center w-full mb-12"></div>
      <div className="lg:w-1/2 md:w-full mx-auto">
        <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full md:w-1/2">
              <div className="relative">
                <label
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    letterSpacing: "0.177em",
                    textTransform: "uppercase",
                    color: "white",
                  }}
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-b border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-transparent"
                />
              </div>
            </div>
            <div className="p-2 w-full md:w-1/2">
              <div className="relative">
                <label
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    letterSpacing: "0.177em",
                    textTransform: "uppercase",
                    color: "white",
                  }}
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-b border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-transparent"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    letterSpacing: "0.177em",
                    textTransform: "uppercase",
                    color: "white",
                  }}
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-32 border-b border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out bg-transparent"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full flex justify-end md:justify-start mt-4"> {/* Positioned at the bottom right */}
              <button
                className="text-white border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                  letterSpacing: "0.177em",
                  textTransform: "uppercase",
                }}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
