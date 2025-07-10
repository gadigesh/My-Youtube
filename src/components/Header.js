import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const taggoleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow m-5 p-2">
      <div className="flex col-span-1">
        <img
          onClick={taggoleMenuHandler}
          className="h-8 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="Hamberger menu"
        />
        {/* <a href=""> */}
        <img
          className="h-8 mx-2"
          src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg"
          alt="youtube Logo"
        />
        {/* </a> */}
      </div>
      <div className="col-span-10">
        <input
          className="w-1/2 pl-20 ml-52 border rounded-l-full p-2 border-black"
          type="text"
        />
        <button className="border border-gray rounded-r-full py-2 px-5 bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="User"
        />
      </div>
    </div>
  );
};

export default Header;
