import React from "react";

const MarketAnalysis = () => {
  return (
    <div className=" text-white min-h-screen flex flex-col sm:flex-row items-center p-4">
      {/* Market Analysis Section */}
      <div className="w-full max-w-md  rounded-lg shadow-md px-2">
        <h2 className="text-lg font-semibold text-white mb-4">
          Market Analysis
        </h2>
        <div className="flex justify-between items-center fram1 border border-[#37408B] rounded-xl px-4 pt-2 pb-6 mb-4">
          <div className="text-center">
            <p className="text-2xl font-light text-green-400">$48,250</p>
            <p className="text-sm text-gray-200">BTC/USD</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-light text-green-400">+2.3%</p>
            <p className="text-sm text-gray-200">24h Change</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-light text-green-400">94%</p>
            <p className="text-sm text-gray-200">Signal Strength</p>
          </div>
        </div>

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
        <div className="  p-4   ">
          <h4 className="text-md font-semibold text-gray-400 mb-2">
            Other Analysis: BTC
          </h4>
          <ul className="list-disc list-inside text-gray-300">
            <li>
              <strong>Price Milestone:</strong> In December 2024, Bitcoin
              surpassed the $100,000 mark, reaching an all-time high of
              $103,332.30 on December 4, 2024.{" "}
              <a
                href="https://en.wikipedia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Wikipedia
              </a>
            </li>
            <li>
              <strong>ETF Approvals:</strong> The U.S. Securities and Exchange
              Commission (SEC) approved multiple spot Bitcoin exchange-traded
              funds (ETF-s) in January 2024.{" "}
              <a
                href="https://en.wikipedia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Wikipedia
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
