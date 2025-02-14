import { useState } from "react";
import { motion } from "framer-motion";
import MusicPlayer from "./MusicPlayer";
import ConfettiEffect from "./ConfettiEffect";
import LoveCats from "./LoveCats";

const MagicButton = () => {
  const [revealed, setRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    if (!revealed) {
      setRevealed(true);
      setShowConfetti(true);
    }
  };

  return (
    <div className="magic-button">
      {!revealed && (
        <motion.button
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="magic-btn"
        >
          Clique ici mon amour ✨
        </motion.button>
      )}

      {revealed && (
        <motion.div
          className="revealed-message"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <h2>Mon Cœur, Mon Étoile</h2>
          <p>
          Chaque battement de mon cœur résonne avec ton amour.
Tu es mon étoile, mon refuge, mon toujours. ✨
Avec toi, chaque seconde est une poésie. Je t’aime à l’infini. ❤️
          </p>
          <LoveCats />
        </motion.div>
      )}

      <ConfettiEffect active={showConfetti} />
      <MusicPlayer play={revealed} />
    </div>
  );
};

export default MagicButton;
