import React from "react";
import { SearchCoin } from "../components/SearchCoin";
import { useLayoutEffect, useState } from "react";
//axios
import axios from "axios";
//lading spinner
import { RingLoader } from "react-spinners";
import { TrendingCoin } from "../components/TrendingCoin";

export const Home = () => {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=true";
  useLayoutEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log(" The Api Call Is Working ");
      });
  }, [setCoins, url]);
  return (
    <div>
      {coins?.length === 0 ? (
        <div>
          <h2 className="flex items-center justify-center mt-[17%]">
            <RingLoader color="#05edb3" />
          </h2>
        </div>
      ) : (
        <SearchCoin coins={coins} />
      )}
      <TrendingCoin />
    </div>
  );
};
