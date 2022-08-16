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

  const handleButtonSend = () => {
    setDataUsers({
      ...dataUsers,
      comments: dataUsers.comments.map((c) =>
        c.id === +id
          ? {
              ...c,
              replies: [
                ...c.replies.map((r) =>
                  r.id === +replyId
                    ? {
                        ...r,
                        reply: false,
                      }
                    : r
                ),
                {
                  id: Math.floor(Math.random() * (1000000 - 10)) + 10,
                  content: valueReply,
                  replyingTo: !replyId
                    ? c.user.username
                    : c.replies.map((r) => r.id === replyId && r.user.username),
                  createdAt: Date.now(),
                  edit: false,
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
              reply: false,
            }
          : c
      ),
    });
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
          <SendButton onClick={() => handleButtonSend()}>Reply</SendButton>
        </NewCommentDiv>
      </NewCommentContainer>
    </div>
  );
};

export default NewComment;
