import React, { useState } from "react";
import styled from "styled-components";
import data from "../../data.json";

export const NewCommentDiv = styled.div`
  background-color: hsl(228, 33%, 97%);
  width: 100%;
  border-radius: 15px;
  display: flex;
  margin: 10px 0;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;
  @media (min-width: 515px) {
    flex-direcion: row;
    flex-wrap: nowrap;
    padding: 20px;
    align-items: start;
  }
  @media (min-width: 515px) {
  }
  -webkit-animation: fadein 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fadein 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const NewCommentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SendButton = styled.button`
  min-width: 100px;
  height: 40px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  outline-color: transparent;
  color: white;
  cursor: pointer;
  background: hsl(238, 40%, 52%);
  &:hover {
    background: hsl(239, 57%, 85%);
  }
`;

export const TextAreaComment = styled.textarea`
  width: 100%;
  border: 1px solid #80808038;
  border-radius: 10px;
  height: 80px;
  margin-bottom: 20px;
  padding: 10px 20px;
  font-family: "Nunito Sans", sans-serif;
  resize: none;
  outline: 1px solid #80808038;
  font-size: 16px;
  color: hsl(211, 10%, 45%);
  ::placeholder {
    font-family: "Nunito Sans", sans-serif;
    font-size: 16px;
  }
  :focus {
    border: 1px solid hsl(238, 40%, 52%);
  }
  @media (min-width: 515px) {
    margin-right: 20px;
  }
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  @media (min-width: 515px) {
    order: -1;
    margin-right: 20px;
  }
`;

const NewComment = ({ dataUsers, setDataUsers }) => {
  const [valueComment, setValueComment] = useState("");

  const handleTextArea = (e) => {
    setValueComment(e.target.value);
  };

  const handleButtonSend = () => {
    const time = new Date().toDateString().split(" ");
    setDataUsers({
      ...dataUsers,
      comments: [
        ...dataUsers.comments,
        {
          id: Math.floor(Math.random() * (1000000 - 10)) + 10,
          content: valueComment,
          createdAt: `${time[1]} ${time[2]}`,
          edit: false,
          score: 0,
          user: {
            image: {
              png: data.currentUser.image.png,
              webp: data.currentUser.image.webp,
            },
            username: data.currentUser.username,
          },
          replies: [],
        },
      ],
    });
    setValueComment("");
  };

  return (
    <div style={{ maxWidth: "48rem", width: "100%" }}>
      <NewCommentContainer>
        <NewCommentDiv>
          <TextAreaComment
            onChange={handleTextArea}
            value={valueComment}
            placeholder="Add a comment..."
          ></TextAreaComment>
          <Avatar src={data.currentUser.image.png} />
          <SendButton onClick={handleButtonSend}>Send</SendButton>
        </NewCommentDiv>
      </NewCommentContainer>
    </div>
  );
};

export default NewComment;
