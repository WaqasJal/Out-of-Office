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
    <div><Link to="/">
    <div className="flex items-center w-16 h-16 fixed z-10 mt-4 ml-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <img src={logo} alt="Company Logo" className="logo" />
      </motion.div>
    </div>
  </Link>
    <div className="bg-[#0d1418] w-full h-screen flex flex-col sm:items-center ">
      

      <div className="lg:pt-20 lg:ml-5 lg:text-left sm:items-center ">
  <p className="lg:absolute lg:px-4 lg:py-24 lg:left-0 text-white text-4xl lg:text-5xl font-thin font-Inter mt-5  lg:w-auto sm:items-center px-28 -py-4">
    Make your vision a reality.
  </p>
</div>

<div className="text-gray-700 body-font mx-0 p-4 lg:self-end lg:py-32">
  <div className="flex flex-col text-center w-full mb-12"></div>
  <div className="lg:w-1/2 mx-auto">
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
            <div className="p-2 w-full flex justify-end md:justify-end mt-4">
            <button
  className="text-white border-0 py-2 px-8 focus:outline-none rounded text-lg"
  style={{
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    fontSize: "0.75rem",
    letterSpacing: "0.177em",
    textTransform: "uppercase",
    transition: "border 0.3s ease", // Adding transition for a smooth effect
  }}
  onMouseOver={(e) => (e.currentTarget.style.border = "2px solid white")}
  onMouseOut={(e) => (e.currentTarget.style.border = "0")}
  onClick={handleSubmit}
>
  Submit
</button>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
