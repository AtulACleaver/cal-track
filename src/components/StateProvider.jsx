import React, { createContext, useState, useEffect } from "react";
export const StateContext = createContext();

const StateProvider = ({ children }) => {

    const [focusTime, setFocusTime] = useState(25 * 60);
    const [shortBreakTime, setShortBreakTime] = useState(5 * 60);
    const [longBreakTime, setLongBreakTime] = useState(30 * 60);
    const [initTime, setInitTime] = useState(0);
    const [focusTip, setFocusTip] = useState("Don't keep your phone near you");
    const [shortBreakTip, setShortBreakTip] = useState("Take a walk or stretch");
    const [longBreakTip, setLongBreakTip] = useState("Get some coffee or a snack");

  const [activeTag, setActiveTag] = useState(0);
  const [time, setTime] = useState(100);
  const [isActive, setIsActive] = useState(false);
  const [getTip, setGetTip] = useState(0);

  useEffect(() => {
    switch(activeTag){
        case 0:
            setTime(focusTime);
            setInitTime(focusTime);
            setGetTip(focusTip);
            break
        case 1:
            setTime(shortBreakTime);
            setInitTime(shortBreakTime);
            setGetTip(shortBreakTip);
            break
        case 2:
            setTime(longBreakTime);
            setInitTime(longBreakTime);
            setGetTip(longBreakTip);
            break
        default:
            break;
    }
  }, [activeTag, focusTime, shortBreakTime, longBreakTime, focusTip, shortBreakTip, longBreakTip]);

  return (
    <StateContext.Provider
      value={{ activeTag, setActiveTag, isActive, setIsActive, time, setTime, getTip, setGetTip }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
