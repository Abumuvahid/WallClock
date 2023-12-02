import React, { useState, useEffect } from "react";
import "./App.css";
import Clock from "./Clock";
const MyComponent = () => {
  const [secondRatio, setSecondRatio] = useState(0);
  const [minuteRatio, setMinuteRatio] = useState(0);
  const [hourRatio, setHourRatio] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const setClock = () => {
    const currentDate = new Date();
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12;

    setSecondRatio(secondRatio);
    setMinuteRatio(minuteRatio);
    setHourRatio(hourRatio);
  };

  return (
    <Clock
      secondRatio={secondRatio}
      minuteRatio={minuteRatio}
      hourRatio={hourRatio}
    />
  );
};

export default MyComponent;
