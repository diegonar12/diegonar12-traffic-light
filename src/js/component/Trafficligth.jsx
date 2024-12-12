import React, { useEffect, useState } from "react";

const Trafficligth = () => {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLight((luzPrev) => {
        if (luzPrev === "red") return "yellow";
        if (luzPrev === "yellow") return "green";
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
        className={`light ${currentLight === "red" ? "red" : ""}`}
        onClick={() => handleClick("red")}
      ></div>
      <div
        className={`light ${currentLight === "yellow" ? "yellow" : ""}`}
        onClick={() => handleClick("yellow")}
      ></div>
      <div
        className={`light ${currentLight === "green" ? "green" : ""}`}
        onClick={() => handleClick("green")}
      ></div>
    </div>
  );
};

export default Trafficligth;
