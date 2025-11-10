import React from "react";
import Comment from "./Comment";

const commentsAll = [
  {
    name: "Gadigesh",
    text: "these are all comments",
    replies: [
      {
        name: "Gadigesh",
        text: "these are all comments",
        replies: [],
      },
      {
        name: "Gadigesh",
        text: "these are all comments",
        replies: [],
      },
      {
        name: "Gadigesh",
        text: "these are all comments",
        replies: [
          {
            name: "Gadigesh",
            text: "these are all comments",
            replies: [],
          },
          {
            name: "Gadigesh",
            text: "these are all comments",
            replies: [],
          },
          {
            name: "Gadigesh",
            text: "these are all comments",
            replies: [
              {
                name: "Gadigesh",
                text: "these are all comments",
                replies: [
                  {
                    name: "Gadigesh",
                    text: "these are all comments",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Gadigesh",
    text: "these are all comments",
    replies: [],
  },
  {
    name: "Gadigesh",
    text: "these are all comments",
    replies: [],
  },

  {
    name: "Gadigesh",
    text: "these are all comments",
    replies: [],
  },
  {
    name: "Gadigesh",
    text: "these are all comments",
    replies: [],
  },
  {
    name: "Gadigesh",
    text: "these are all comments",
    replies: [],
  },
  {
    name: "Gadigesh",
    text: "these are all comments",
    replies: [],
  },
];

const CommentsList = ({ comment }) => {
  return comment.map((comnt, index) => (
    <div key={index}>
      <Comment key={index} data={comnt} />
      <div className="pl-5 border-l-2 ml-5">
        <CommentsList comment={comnt.replies} />
      </div>
    </div>
  ));
};

const Comments = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comment={commentsAll} />
    </div>
  );
};

export default Comments;
