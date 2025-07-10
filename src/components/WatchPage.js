import React, { useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams("");
  console.log(searchParams.get("v"), "aljs");
  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div>
      <iframe
        className="ml-16"
        width="900"
        height="500"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?autoplay=1&mute=0"
        }
        title="Bhorgaredu Soul Of Love 360 | Keerthan Holla | Praveen | Rachana Inder | Arjun Janya | Shashank"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
