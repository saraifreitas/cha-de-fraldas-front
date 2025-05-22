
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Confetti = ({ show }) => {
  const [particles, setParticles] = useState([]);
  const controls = useAnimation();

  useEffect(() => {
    if (show) {
      const newParticles = [];
      const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F3", "#33FFF3"];
      
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: -20,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
        });
      }
      
      setParticles(newParticles);
      controls.start("visible");
      
      const timer = setTimeout(() => {
        controls.start("hidden");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [show, controls]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-50"
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-md"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: particle.x,
            top: particle.y,
            rotate: particle.rotation,
          }}
          animate={{
            y: window.innerHeight + 50,
            x: particle.x + (Math.random() * 200 - 100),
            rotate: particle.rotation + 360,
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default Confetti;
