import React, { useState } from "react";
import { CoinItems } from "./CoinItems";

export const SearchCoin = ({ coins }) => {
  const [searchCointxt, setSearchCointxt] = useState("");

  console.log(coins);
  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right  ">
        <h1 className="text-2xl font-bold my-3 ml-10  ">Search Coin</h1>
        <form>
          <input
            onChange={(e) => setSearchCointxt(e.target.value)}
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl   "
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </div>
      <table className=" text-center border-collapse w-full  ">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className=" hidden md:table-cell ">24h Volume</th>
            <th className=" hidden sm:table-cell ">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins &&
            coins
              .filter((items) => {
                if (searchCointxt === "") {
                  return items;
                } else if (
                  items.name.toLowerCase().includes(searchCointxt.toLowerCase())
                ) {
                  return items;
                }
                return null;
              })
              .map((items, index) => {
                return <CoinItems key={index} items={items} />;
              })}
        </tbody>
      </table>
    </div>
  );
};
