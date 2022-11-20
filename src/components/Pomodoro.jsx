import "../css/Navbar.css";
import "../css/main.css";
import Tags from "./Tags.jsx";
import { useContext, useEffect } from "react";
import { StateContext } from "./StateProvider";
import Tips from "./Tips.jsx";

function Pomodoro() {
  const {time, setTime, isActive, setIsActive} = useContext(StateContext);
  useEffect(() => {
    
    if(isActive && time > 0){
        const interval = setInterval(() => {
            setTime((time) => time - 1);
          }, 1000);
          return () => clearInterval(interval);
    }
  }, [time, isActive]);

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  }

  const toggleClock = () => {
    setIsActive(!isActive);
  }

  return (
    <div className="pomo-container">
      <h1 className="pomo-timer">{getTime(time)}</h1>
      <div className="pomo-buttons">
        <button className="pomo-button" onClick={toggleClock}>{isActive ? "Stop" : "Start"}</button>
      </div>
      <div className="pomo-status">
        <Tags />
      </div>
      <div className="pomo-tip">
          <Tips />
      </div>
    </div>
  );
}

export default Pomodoro;
