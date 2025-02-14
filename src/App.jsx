import LoveMessage from "./components/LoveMessage";
import HeartsAnimation from "./components/HeartsAnimation";
import MagicButton from "./components/MagicButton";

const App = () => {
  return (
    <div className="container">
      <HeartsAnimation />
      <LoveMessage /> 
      <MagicButton /> 
    </div>
  );
};

export default App;
