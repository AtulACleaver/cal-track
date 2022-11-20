import "../css/Navbar.css";
import "../css/main.css";
import Tags from "./Tags.jsx";
import restart from "../img/restart.svg";
// import settings from '../img/settings.svg'
import { useContext, useEffect } from "react";
import { StateContext } from "./StateProvider";

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
      <div className="pomo-settings">
        {/* <img src={settings} alt="Settings" className="pomo-setting-icon" /> */}
      </div>
      <h1 className="pomo-timer">{getTime(time)}</h1>
      <div className="pomo-buttons">
        <button className="pomo-button" onClick={toggleClock}>{isActive ? "Stop" : "Start"}</button>
      </div>
      <div className="pomo-status">
        <Tags />
      </div>
      <div className="pomo-tip">
        <p className="pomo-tip">
          <b>Tip:</b> Take a break every 25 minutes!
        </p>
      </div>
    </div>
  );
}

export default Pomodoro;
