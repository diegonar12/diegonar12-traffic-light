import React, { useEffect, useState } from "react";

const Trafficligth = () => {
  const [currentLigth, setCurrentLigth] = useState("red");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLigth((luzPrev) => {
        if (luzPrev === "red") return "yellow";
        if (luzPrev === "yellow") return "green";
        return "red";
      });
    }, 3000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="traffic-light">
      <div className={`light ${currentLigth === "red" ? "red" : ""}`}></div>
      <div
        className={`light ${currentLigth === "yellow" ? "yellow" : ""}`}
      ></div>
      <div className={`light ${currentLigth === "green" ? "green" : ""}`}></div>
    </div>
  );
};

export default Trafficligth;
