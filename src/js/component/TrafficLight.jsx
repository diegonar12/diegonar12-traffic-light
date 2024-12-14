import React, { useState, useEffect } from "react";
import "../../styles/index.css";

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLight((lightPrev) => {
        if (lightPrev === "red") return "yellow";
        if (lightPrev === "yellow") return "green";
        return "red";
      });
    }, 3000);
    return () => clearInterval(intervalId);
  });

  const handleClick = (e) => {
    setCurrentLight(e);
  };

  return (
    <div className="traffic-light">
      <div
        className={`light ${currentLight === "red" ? "red flash" : ""}`}
        onClick={() => setCurrentLight("red")}
      ></div>

      <div
        className={`light ${currentLight === "yellow" ? "yellow flash" : ""}`}
        onClick={() => setCurrentLight("yellow")}
      ></div>
      <div
        className={`light ${currentLight === "green" ? "green flash" : ""}`}
        onClick={() => setCurrentLight("green")}
      ></div>
    </div>
  );
};

export default TrafficLight;
