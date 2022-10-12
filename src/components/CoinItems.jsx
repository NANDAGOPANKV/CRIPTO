import React, { useState } from "react";
// icons favor
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
// graph spark lines
import { Sparklines, SparklinesLine } from "react-sparklines";
// favorite thing adding
import { db } from "../firebase/Firebase";
import { UserAuth } from "../context/auth/AuthContext";
import { arrayUnion, updateDoc, doc, collection, setDoc, getDoc } from "firebase/firestore";

export const CoinItems = ({ items }) => {
  const [favoriteCoins, setFavoriteCoins] = useState(false);
  const { user } = UserAuth();

  const coinPath = doc(db, "users", `${user?.email}`);
  //saving to the db
  const handleCoinSave = async () => {
    if (user?.email) {
      setFavoriteCoins(!favoriteCoins);
      updateDoc(coinPath, {
        FavoriteCoins: arrayUnion({
          id: items.id,
          name: items.name,
          image: items.image,
          rank: items.market_cap_rank,
          symbol: items.symbol,
        }),
      });
      
    } else {
      alert("Please sign in to save a coin to your favorites");
    }
  };
  // const savedRef = collection(db, "users", `${user?.email}`,'FavoriteCoins');
  // const savedCoin = getDoc(savedRef);

  return (
    <tr className="h-[80px] border-b overflow-hidden ">
      <td onClick={handleCoinSave}>
        {favoriteCoins  ? <AiFillStar /> : <AiOutlineStar />}
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
