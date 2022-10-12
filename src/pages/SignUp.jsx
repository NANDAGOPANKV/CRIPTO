import React from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <div className="rounded-div my-8 ">
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20   ">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        {/* form */}
        <form>
          {/* email */}
          <div className="my-4">
            <label>Email</label>
            <div className="my-3 w-full relative rounded-2xl shadow-2xl  ">
              <input
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
                className="w-full p-2 bg-primary border border-input rounded-2xl  "
                type="password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          {/* password */}
          {/* sign in btn */}
          <button className="w-full my-2 bg-button text-btnText rounded-2xl p-3 hover:shadow-xl shadow-2xl  ">Sign Up</button>
          {/* sign in btn */}
        </form>
        {/* form */}

        <p className="my-3">
          Already have an account ? <Link to="/signin" className="text-accent">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
