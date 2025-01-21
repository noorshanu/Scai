import React from "react";
import MarketAnalysis from "./MarketAynal";
import ChatScreen from "./ChatScreen";

function Hero() {
  return (
    <div className=" px-10 pt-10 pb-2 ">
      <div className="flex justify-between flex-col sm:flex-row sm:gap-1 gap-4">
     <div className="hidden sm:block">
        <ChatScreen/>
     </div>
     <div className="sm:hidden">
       <img src="images/chatmob.png" alt="" className=" mx-auto" />
     </div>
        <div>
          <MarketAnalysis />
        </div>
      </div>
    </div>
  );
}

export default Hero;
