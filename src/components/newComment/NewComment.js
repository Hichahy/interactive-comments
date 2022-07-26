import React from "react";
import styled from "styled-components";
import data from "../../data.json";

const NewCommentDiv = styled.div`
  background-color: hsl(228, 33%, 97%);
  width: 48rem;
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
  }
  @media (min-width: 515px) {
    align-items: start;
  }
`;

const NewCommentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SendButton = styled.button`
  min-width: 100px;
  height: 40px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  color: white;
  background: hsl(238, 40%, 52%);
`;

const TextAreaComment = styled.textarea`
  width: 100%;
  border: 1px solid #80808038;
  border-radius: 10px;
  height: 80px;
  margin-bottom: 20px;
  padding: 10px 20px;
  font-family: "Nunito Sans", sans-serif;
  resize: none;
  outline: none;
  font-size: 16px;
  color: hsl(211, 10%, 45%);
  ::placeholder {
    font-family: "Nunito Sans", sans-serif;
    font-size: 16px;
  }
  @media (min-width: 515px) {
    margin-right: 20px;
  }
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  @media (min-width: 515px) {
    order: -1;
    margin-right: 20px;
  }
`;

const NewComment = () => {
  return (
    <NewCommentContainer>
      <NewCommentDiv>
        <TextAreaComment placeholder="Add a comment..."></TextAreaComment>
        <Avatar src={data.currentUser.image.png} />
        <SendButton>SEND</SendButton>
      </NewCommentDiv>
    </NewCommentContainer>
  );
};

export default NewComment;
