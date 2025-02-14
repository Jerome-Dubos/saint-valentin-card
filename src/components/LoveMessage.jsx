import { motion } from "framer-motion";

const LoveMessage = () => {
  return (
    <motion.div
      className="love-message"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <h1>
        <span className="emoji">🌹</span> À Toi, Mon Âme Sœur <span className="emoji">🌹</span>
      </h1>
      <p>Tu es la plus belle étoile qui illumine ma nuit,</p>
      <p>La douce mélodie qui fait danser mon cœur,</p>
      <p>Chaque seconde avec toi est un trésor éternel</p>
    </motion.div>
  );
};

export default LoveMessage;
