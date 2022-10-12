import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/auth/AuthContext";

export const Signup = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //useNaviget
  const NavigateTo = useNavigate();

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await SignUp(email, password);
      NavigateTo("/signin");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  const { SignUp } = UserAuth();
  return (
    <div className="rounded-div my-8 ">
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20   ">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        {/* form */}
        {error ? <p className="bg-red-500 p-3 my-3">{error}</p> : null}
        <form onSubmit={handleSubmitSignUp}>
          {/* email */}
          <div className="my-4">
            <label>Email</label>
            <div className="my-3 w-full relative rounded-2xl shadow-2xl  ">
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full p-2 bg-primary border border-input rounded-2xl  "
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          {/* email */}
          {/* password */}
          <div className="my-4">
            <label>Password</label>
            <div className="my-3 w-full relative rounded-2xl shadow-2xl  ">
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full p-2 bg-primary border border-input rounded-2xl  "
                type="password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          {/* password */}
          {/* sign in btn */}
          <button className="w-full my-2 bg-button text-btnText rounded-2xl p-3 hover:shadow-xl shadow-2xl  ">
            Sign Up
          </button>
          {/* sign in btn */}
        </form>
        {/* form */}

        <p className="my-3">
          Already have an account ?{" "}
          <Link to="/signin" className="text-accent">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};
