import React, { useState } from "react";
import {
  NewCommentContainer,
  NewCommentDiv,
  TextAreaComment,
  Avatar,
  SendButton,
} from "../newComment/NewComment";
import data from "../../data.json";

const NewComment = ({ dataUsers, setDataUsers, id, replyId }) => {
  const [valueReply, setValueReply] = useState("");

  const handleTextArea = (e) => {
    setValueReply(e.target.value);
  };

  const handleButtonSend = (id, replyId) => {
    const time = new Date().toDateString().split(" ");
    setDataUsers({
      ...dataUsers,
      comments: dataUsers.comments.map((c) =>
        c.id === +id
          ? {
              ...c,
              replies: [
                ...c.replies,
                {
                  id: Math.floor(Math.random() * (1000000 - 10)) + 10,
                  content: valueReply,
                  replyingTo: !replyId
                    ? c.user.username
                    : c.replies.map((r) => r.id === replyId && r.user.username),
                  createdAt: `${time[1]} ${time[2]}`,
                  score: 0,
                  user: {
                    image: {
                      png: data.currentUser.image.png,
                      webp: data.currentUser.image.webp,
                    },
                    username: data.currentUser.username,
                  },
                },
              ],
            }
          : c
      ),
    });
    console.log(id);
    setValueReply("");
  };

  return (
    <div style={{ maxWidth: "48rem", width: "100%" }}>
      <NewCommentContainer>
        <NewCommentDiv>
          <TextAreaComment
            onChange={handleTextArea}
            value={valueReply}
            placeholder="Add a comment..."
          ></TextAreaComment>
          <Avatar src={data.currentUser.image.png} />
          <SendButton onClick={() => handleButtonSend(id, replyId)}>
            Reply
          </SendButton>
        </NewCommentDiv>
      </NewCommentContainer>
    </div>
  );
};

export default NewComment;
