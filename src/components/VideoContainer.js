import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ({ suggValuse }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  //   if (!suggValuse) {
  //     return null;
  //   }
  // console.log("suggValuse", suggValuse);
  // setVideos(suggValuse);
  return (
    <>
      <div className="flex flex-wrap">
        {videos.map((videos, index) => (
          <Link key={videos.id} to={"/Watch?v=" + videos.id}>
            <VideoCard key={videos.id} info={videos} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
