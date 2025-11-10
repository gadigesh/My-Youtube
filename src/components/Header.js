import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constant";
import { chacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggetions] = useState([]);
  const [showSugg, SetSugg] = useState(false);
  const dispatch = useDispatch();
  const taggoleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const searchChache = useSelector((store) => store.search);
  useEffect(() => {
    // make an Api call after every key pressed
    // but if the diff btwn 2 Api call is <200
    // decline Api call
    //console.log(searchQuery);
    const searchTime = setTimeout(() => {
      if (searchChache[searchQuery]) {
        setSuggetions(searchChache[searchQuery]);
      } else {
        getSearchSuggetions();
      }
    }, 200);
    return () => {
      clearTimeout(searchTime);
    };
  }, [searchQuery]);

  const getSearchSuggetions = async () => {
    //console.group("kajhd", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggetions(json[1]);
    //const getLength = Object.keys(searchChache).length;
    //console.log(getLength, searchChache);
    dispatch(chacheResults({ [searchQuery]: json[1] }));
  };
  const handleClick = (value) => {
    setSearchQuery(value);
    SetSugg(false);
  };
  return (
    <div className="flex flex-row justify-between items-center shadow m-5 p-2">
      <div className="flex">
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
      <div className="w-1/2">
        <div className="w-screen flex flex-row">
          <input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => SetSugg(true)}
            onBlur={() => setTimeout(() => SetSugg(false), 1000)}
            className="w-[40%] pl-4 border rounded-l-full relative z-10 p-2 border-black"
            type="text"
          />
          <button className="border border-gray relative rounded-r-full py-2 px-5 bg-gray-100">
            🔍
          </button>
        </div>
        {showSugg && (
          <div className="w-[40%] pl-4 border rounded-lg p-2 border-blac absolute z-50  bg-white">
            <ul>
              {suggestions.map((sugg) => (
                <li
                  className="px-2 py-2 hover:bg-gray-100 rounded-md"
                  key={sugg}
                  onMouseDown={() => handleClick(sugg)}
                  //suggValuse={sugg}
                >
                  {sugg}
                </li>
              ))}
            </ul>
          </div>
        )}
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
