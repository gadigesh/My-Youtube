import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(30),
        })
      );
      console.log("api polling");
    }, 3000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="flex w-full h-[500px] ml-2 p-2 border border-black overflow-y-scroll flex-col-reverse">
        <div>
          {
            //don't use index as key
            chatMessages.map((c, index) => (
              <ChatMessage key={index} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          dispatch(
            addMessage({
              name: "Gadigesh",
              message: liveMessage,
            })
          );
          e.preventDefault();
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 border p-1 m-1 border-black"
          type="tex"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-400">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
