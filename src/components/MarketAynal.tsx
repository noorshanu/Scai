import React from "react";
import Price from "./Price";

const MarketAnalysis = () => {
  return (
    <div className=" text-white min-h-screen flex flex-col sm:flex-row items-center p-4">
      {/* Market Analysis Section */}
      <div className="w-full max-w-md   px-2">
        <h2 className="text-lg font-semibold text-white mb-4">
          Market Analysis
        </h2>
  <Price/>

        {/* Analysis Section */}
        <h3 className="text-lg font-semibold text-[#fff] mb-4">
          Analyzing: BTC
        </h3>
      <div className="fram2 border border-[#D64FEB] rounded-xl">
      <div className="rounded-md px-4 pt-4 mb-4">
          <h4 className="text-md font-semibold text-[#fff] mb-4">
            Technical Analysis: BTC
          </h4>
          <div className="mb-4">
            {/* Placeholder for the graph */}
            <img src="images/chart.png" alt="" className=" mx-auto " />
          </div>
          <h4 className="text-sm font-semibold text-white mb-4">
            Sentiment Analysis: BTC
          </h4>
          <div className="flex justify-between items-center mt-2">
          <img src="images/rate.png" alt=""  />
          </div>
        </div>

        {/* Other Analysis Section */}
        {/* <div className="  p-4   ">
          <h4 className="text-lg font-semibold text-white mb-2">
            Other Analysis: BTC
          </h4>
          <p className="text-sm text-white py-2">As of January 13, 2025, Bitcoin (BTC) has experienced significant 
          developments:</p>
          <ul className="list-disc list-inside text-gray-300">
            <li className="text-sm text-white py-1">
             Price Milestone: In December 2024, Bitcoin
              surpassed the $100,000 mark, reaching an all-time high of
              $103,332.30 on December 4, 2024.{" "}
           
            </li>
         
            <li className="text-sm text-white py-1">
             ETF Approvals: The U.S. Securities and Exchange
              Commission (SEC) approved multiple spot Bitcoin exchange-traded
              funds (ETF-s) in January 2024.{" "}
            
            </li>
      
        
          </ul>
        </div> */}
      </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
