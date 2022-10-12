import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { SavedCoin } from "../components/SavedCoin";
import { UserAuth } from "../context/auth/AuthContext";

export const Account = () => {
  const { LogOut, user } = UserAuth();
  const NavigateTo = useNavigate();

  const handleLogOut = async () => {
    try {
      await LogOut()
        .then(() => {
          alert("Are You Sure");
        })
        .then(() => {
          NavigateTo("/");
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  if (user) {
    return (
      <div className="max-w-[1140px] mx-auto w-full  ">
        <div className="rounded-div flex justify-between items-center my-12 py-8  ">
          <div>
            <div>
              <h1 className="font-bold text-2xl ">Account</h1>
            </div>
          </div>
          <div className="p-3 ml-3">
            <p>Welcome, {user?.email} </p>
          </div>
          <div>
            <button
              onClick={handleLogOut}
              className=" px-6 py-2 rounded-2xl shadow-lg text-btnText bg-button hover:shadow-xl font-bold "
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center text-center my-12 py-8 rounded-div   ">
          <div>
            <h1 className=" text-2xl font-bold py-4   ">Favorite Coins</h1>
            <SavedCoin />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};
