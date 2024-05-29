import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-GB", { hour12: !is24Hour });
  };

  const toggleTimeFormat = () => {
    setIs24Hour(!is24Hour);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-white w-full text-gray-800">
        <motion.div
          className="text-[48px] sm:text-[72px] md:text-[120px] lg:text-[200px] xl:text-[300px] font-bold"
          animate={{ opacity: [0, 1], y: [-20, 0] }}
          transition={{ duration: 0.5 }}
        >
          {formatTime(time)}
        </motion.div>

        <motion.div
          className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          id="day"
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.5 }}
        >
          {time.toLocaleDateString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </motion.div>
        <motion.button
          onClick={toggleTimeFormat}
          className="mt-10 px-4 py-2 bg-gray-800 text-white rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {is24Hour ? "12-hour" : "24-hour"}
        </motion.button>
      </div>
    </>
  );
};

export default Clock;
