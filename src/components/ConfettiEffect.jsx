import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ConfettiEffect = ({ active }) => {
  const { width, height } = useWindowSize();
  const [confettiPieces, setConfettiPieces] = useState(0);

  useEffect(() => {
    if (active) {
      setConfettiPieces(300);

      setTimeout(() => {
        let decreaseConfetti = setInterval(() => {
          setConfettiPieces(prev => {
            if (prev <= 10) {
              clearInterval(decreaseConfetti);
              return 0;
            }
            return prev - 10;
          });
        }, 100);
      }, 3000);
    }
  }, [active]);

  return active ? <Confetti width={width} height={height} numberOfPieces={confettiPieces} /> : null;
};

ConfettiEffect.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default ConfettiEffect;
