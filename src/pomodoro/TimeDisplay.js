import React from "react";
import SessionTime from "./SessionTime";
import ProgressBar from "./ProgressBar";

function TimeDisplay({typeOfSession, play, pause, sessionTimes, timeInSession}) {
    if (!play) return null;

    const timeLeft = typeOfSession === 'focus' ? sessionTimes[0] : sessionTimes[1];
    const timerPaused = pause ? <h2>PAUSED</h2> : null;

    return (
      <div>
     <SessionTime
            timeLeft={timeLeft}
            timeInSession={timeInSession}
            typeOfSession={typeOfSession}
            />
      <ProgressBar
            timeInSession={timeInSession}
            timeLeft={timeLeft}
              />
        </div>
        
    )
}
        
           
            
        
    


export default TimeDisplay;