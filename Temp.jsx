[
   { id: "ITC01", question: "Total bits used by the IPv6 address is ____", opt1: "64 bits", opt2: "256 bits", opt3: "128 bits", opt4: "32 bits", ans: "128 bits" },
   { id: "ITC02", question: "Identify the language which is mainly used for Artificial Intelligence", opt1: "Java", opt2: "J2EE", opt3: "Prolog", opt4: "C", ans: "Prolog" },
   { id: "ITC03", question: "Why is a firewall used in a computer?", opt1: "Monitoring", opt2: "Data Transmission", opt3: "Authentication", opt4: "Security", ans: "Security" },
];

import React, { useEffect, useState } from "react";

const Timer = ({ setShowControl }) => {
   const end = new Date("5 November 2023 9:50 PM");
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
         <p className="font-bold text-3xl px-4 sm:text-4xl pt-5 text-center">{`${dd} Day ${hh} Hour ${mm} Minute ${ss} Second`}</p>
      </div>
   );
};

export default Timer;
