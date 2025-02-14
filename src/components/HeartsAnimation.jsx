import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeartsAnimation = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prevHearts) => [
        ...prevHearts,
        {
          id: Math.random(),
          left: Math.random() * 100 + "vw",
          top: Math.random() * 100 + "vh", 
          duration: Math.random() * 5 + 3, 
        },
      ]);

      setTimeout(() => {
        setHearts((prevHearts) => prevHearts.slice(1));
      }, 8000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hearts-container">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="heart"
          initial={{ opacity: 0, scale: 0.5, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: -300 }}
          exit={{ opacity: 0, scale: 0.5, y: -350 }}
          transition={{ duration: heart.duration, ease: "easeInOut" }}
          style={{ left: heart.left, top: heart.top }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default HeartsAnimation;
