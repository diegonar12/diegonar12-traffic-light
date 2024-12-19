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
  }, []);

  return (
    <div className="traffic-light">
      <div
        className={`light red ${currentLight === "red" ? "flash" : ""}`}
        onClick={() => setCurrentLight("red")}
      ></div>

      <div
        className={`light yellow ${currentLight === "yellow" ? "flash" : ""}`}
        onClick={() => setCurrentLight("yellow")}
      ></div>

      <div
        className={`light green ${currentLight === "green" ? "flash" : ""}`}
        onClick={() => setCurrentLight("green")}
      ></div>
    </div>
  );
};

export default TrafficLight;
