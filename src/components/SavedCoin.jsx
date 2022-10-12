import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
// react icons
import { AiOutlineClose } from "react-icons/ai";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { UserAuth } from "../context/auth/AuthContext";

export const SavedCoin = () => {
  const [favoriteCoins, setFavoriteCoins] = useState([]);
  const { user } = UserAuth();

  useLayoutEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setFavoriteCoins(doc.data()?.FavoriteCoins);
    });
  }, [user?.email]);

  // coinpath
  const coinPath = doc(db, "users", `${user?.email}`);
  // delte favorite coin
  const handleDeleteItem = async (defaultId) => {
    console.log(defaultId);
    try {
      const result = favoriteCoins.filter((items) => items.id !== defaultId);
      await updateDoc(coinPath, {
        FavoriteCoins: result,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="rounded-div hover:scale-125 duration-1000">
      {favoriteCoins?.length === 0 ? (
        <p>
          You don't have any coins saved. Please save a coin to add it to your
          watch list. <Link to="/">Click here to Search Coins.</Link>
        </p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th className="px-4">Rank #</th>
              <th className="text-left">Coin</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {favoriteCoins?.map((coin) => (
              <tr key={coin.id} className="h-[60px] overflow-hidden">
                <td>{coin?.rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div className="flex items-center">
                      <img src={coin?.image} className="w-8 mr-4" alt="/" />
                      <div>
                        <p className="hidden sm:table-cell">{coin?.name}</p>
                        <p className="text-gray-500 text-left text-sm">
                          {coin?.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="pl-8">
                  <AiOutlineClose
                    className="cursor-pointer"
                    onClick={() => handleDeleteItem(coin.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
