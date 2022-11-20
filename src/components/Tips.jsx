import React from 'react'
import { useContext} from "react";
import { StateContext } from "./StateProvider";

function Tips() {
    const {getTip, setGetTip} = useContext(StateContext);
  return (
    <div>
        <b>Tip:</b> {getTip}
    </div>
  )
}

export default Tips