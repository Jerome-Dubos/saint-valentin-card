import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

// 🎵 Importation des fichiers MP3
import song1 from "../assets/music/At Last - Etta James  Cello & Piano (WEDDING VERSION).mp3";
import song2 from "../assets/music/Cant Help Falling In Love - Cello & Piano Cover (Brooklyn Duo).mp3";
import song3 from "../assets/music/Ed Sheeran - Perfect (Wedding Version)  VIOLIN & PIANO Cover feat. Pachelbels CANON.mp3";
import song4 from "../assets/music/John Legend - All of Me (PianoCello Cover) - Brooklyn Duo.mp3";
import song5 from "../assets/music/Young and Beautiful - Lana Del Rey (PianoCello Cover) - Brooklyn Duo.mp3";

const playlist = [song1, song2, song3, song4, song5];
const getRandomSong = () => playlist[Math.floor(Math.random() * playlist.length)];

const MusicPlayer = ({ play }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (play) {
      if (!audioRef.current) {
        audioRef.current = new Audio(getRandomSong());
      }

      const audio = audioRef.current;
      audio.volume = 0.5;
      audio.play().catch(err => console.log("Autoplay bloqué :", err));

      return () => {
        audio.pause();
        audio.removeAttribute("src");
        audio.load();
      };
    }
  }, [play]);

  return null;
};

MusicPlayer.propTypes = {
  play: PropTypes.bool.isRequired,
};

export default MusicPlayer;
