import React, { useEffect, useState } from "react";

const Timer = ({ timerState, endTime, classes }) => {
   const end = new Date(endTime);
   const now = new Date();
   const [timer, setTimer] = useState(Math.round((end - now) / 1000));
   const dd = Math.floor(timer / 3600 / 24);
   const hh = Math.floor(timer / 3600) % 24;
   const mm = Math.floor(timer / 60) % 60;
   const ss = Math.floor(timer) % 60;
   useEffect(() => {
      //Implementing the setInterval method
      const interval = setInterval(() => {
         setTimer(timer - 1);
      }, 1000);
      if (timer < 1) {
         timerState(true);
         clearInterval(interval);
      }

      //Clearing the interval
      return () => clearInterval(interval);
   }, [timer, timerState]);
   /* function Fucked() {
   }
   // diff > 1 && Fucked(); */
   return (
      <div>
         {timer > 0 && (
            <p className={`${classes && classes + " "}font-bold`}>
               {dd > 0 && (
                  <>
                     <span className="font-bold text-red-600">{timer < 0 ? "0" : dd}</span> Day
                  </>
               )}{" "}
               {(dd > 0 || hh > 0) && (
                  <>
                     <span className="font-bold text-red-600">{timer < 0 ? "0" : hh}</span> Hour
                  </>
               )}{" "}
               {(dd > 0 || hh > 0 || mm > 0) && (
                  <>
                     <span className="font-bold text-red-600">{timer < 0 ? "0" : mm}</span> Minute{" "}
                  </>
               )}
               <span className="font-bold text-red-600">{timer < 0 ? "0" : ss}</span> Second
            </p>
         )}
      </div>
   );
};

export default Timer;
