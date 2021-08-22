import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  TextField,
  Button,
} from "@material-ui/core";

import SendIcon from "@material-ui/icons/Send";
import "../style/Post.css";
import Like from "./Like";

function Post2() {
  const [comments, SetComments] = useState([]);
  const [comment, SetComment] = useState("");
  const addComents = () => {
    const updatedComment = [
      ...comments,
      {
        id: comments.length,
        name: comment,
      },
    ];

    SetComments(updatedComment);
    SetComment("");
  };
  return (
    <div className="post">
      <div className="post__header">
        <ListItem>
          <ListItemAvatar>
            <Avatar
              className="post__avatar"
              src="https://toppng.com/free-image/purple-pink-smoke-effect-PNG-free-PNG-Images_8984"
              alt="User"
            />
          </ListItemAvatar>
          <ListItemText
            primary="username2"
            secondary="porur, Chennai"
          />
        </ListItem>
        <img
          className="post__image"
          src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="Post pic"
        />
        <div className="like_button">
          <Like />
        </div>
        {comments.map((c) => (
          <h4 className="post__text">
            <strong>username2: </strong>
            {c.name}
          </h4>
        ))}
       
        <form className="post__form">
          <TextField
            label="add comment"
            size="small"
            variant="outlined"
            className="post__input"
            placeholder="add comment"
            value={comment}
            onChange={(e) => SetComment(e.target.value)}
          />

          <Button
            variant="contained"
            size="small"
            endIcon={<SendIcon />}
            onClick={addComents}
          >
            POST
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Post2;