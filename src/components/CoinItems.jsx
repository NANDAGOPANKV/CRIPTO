import React from "react";
// icons favor
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
// graph spark lines
import { Sparklines, SparklinesLine } from "react-sparklines";

export const CoinItems = ({ items }) => {
  return (
    <tr className="h-[80px] border-b overflow-hidden ">
      <td>
        <AiOutlineStar />
      </td>
      <td>{items.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${items.id}`}>
          <div className="flex items-center ">
            <img
              className="w-6 mr-2 rounded-full  "
              src={items.image}
              alt={items.id}
            />
            <p className="hidden sm:table-cell">{items.name}</p>
          </div>
        </Link>
      </td>
      <td>{items.symbol.toUpperCase()}</td>
      <td>${items.current_price.toLocaleString()}</td>
      <td>
        {items.price_change_percentage_24h > 0 ? (
          <p className="text-green-600">
            {items.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600">
            {items.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="w-[180px] hidden md:table-cell  ">
        ${items.total_volume.toLocaleString()}
      </td>
      <td className="w-[180px] hidden sm:table-cell  ">
        ${items.market_cap.toLocaleString()}
      </td>
      <td>
        <Sparklines data={items.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};
