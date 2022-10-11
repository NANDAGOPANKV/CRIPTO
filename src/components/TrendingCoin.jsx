import React, { useLayoutEffect, useState } from "react";
import axios from "axios";

export const TrendingCoin = () => {
  const [trendingCoin, setTrendingCoin] = useState([]);
  useLayoutEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {
        setTrendingCoin(res.data.coins);
        console.log(res.data.coins);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Task Going On");
      });
  }, [setTrendingCoin]);
  return (
    <div className=" rounded-div py-8 my-12 text-primary   ">
      <h1 className="py-5 text-3xl font-bold  ">Trending Coins</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {trendingCoin &&
          trendingCoin.map((coin, index) => {
            return (
              <div
                key={index}
                className=" rounded-div flex justify-between p-4 hover:scale-125 ease-in-out duration-1000 cursor-pointer  "
              >
                <div className="flex w-full items-center justify-between  ">
                  <div className="flex ">
                    <img className="rounded-full mr-5  "  src={coin.item.small} alt="/" />
                    <div>
                      <p className="font-bold">{coin.item.name}</p>
                      <p>{coin.item.symbol}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-4 h-4 mr-2 rounded "
                      src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                      alt="/"
                    />
                    <p>{coin.item.price_btc.toFixed(7)}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
