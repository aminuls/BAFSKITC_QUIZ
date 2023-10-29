import React, { useEffect, useState } from "react";

const Timer = ({ setShowControl }) => {
   const end = new Date("29 October 2023 09:00 PM");
   const now = new Date();
   const diff = Math.round((end - now) / 1000);
   const [timer, setTimer] = useState(diff);
   const dd = Math.floor(diff / 3600 / 24);
   const hh = Math.floor(diff / 3600) % 24;
   const mm = Math.floor(diff / 60) % 60;
   const ss = Math.floor(diff) % 60;

   useEffect(() => {
      //Implementing the setInterval method
      const interval = setInterval(() => {
         setTimer(timer - 1);
      }, 1000);
      if (timer < 1) {
         setShowControl(true);
         clearInterval(interval);
      }

      //Clearing the interval
      return () => clearInterval(interval);
   }, [timer, setShowControl]);
   return (
      <div>
         <p className="font-bold text-4xl pt-5">{`${dd} Day ${hh} Hour ${mm} Minute ${ss} Second`}</p>
      </div>
   );
};

export default Timer;
