import React, { useState } from "react";
import {
  NewCommentContainer,
  NewCommentDiv,
  TextAreaComment,
  Avatar,
  SendButton,
} from "../newComment/NewComment";
import data from "../../data.json";

const NewComment = () => {
  const [valueReply, setValueReply] = useState("");

  const handleTextArea = (e) => {
    setValueReply(e.target.value);
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
          <SendButton>Reply</SendButton>
        </NewCommentDiv>
      </NewCommentContainer>
    </div>
  );
};

export default NewComment;
