import React, { useState, useEffect } from "react";
import Mainvideo from "./Mainvideo";
import Navigation from "./Navigation";

const Home = () => {
  const [titleFontSize, setTitleFontSize] = useState("190px");

  useEffect(() => {
    const handleResize = () => {
      const newFontSize = window.innerWidth > 768 ? "90px" : "47px";
      setTitleFontSize(newFontSize);
    };

    handleResize(); // Initial call to set the font size based on the screen width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const titleStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: titleFontSize,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    transform: "translate(-50%, -50%)",
    whiteSpace: "nowrap",
    mixBlendMode: "difference",
    filter: "invert(30%)",
  };

  return (
    <>
      <Mainvideo />
      <Navigation />
      <div className="text-xl md:text-4xl lg:text-3xl" style={titleStyle}>
        OUT OF OFFICE&trade;
      </div>
    </>
  );
};

export default Home;
