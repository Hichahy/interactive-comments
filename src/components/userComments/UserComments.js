import React from "react";
import styled from "styled-components";
import data from "../../data.json";

const CommentDiv = styled.div`
  background-color: hsl(228, 33%, 97%);
  width: 100%;
  border-radius: 15px;
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  padding: 15px;
  box-sizing: border-box;
`;

const HeaderComment = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 18px;
`;

const Avatar = styled.img`
  width: 45px;
  height: 45px;
`;

const UserName = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;

const DateComment = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: hsl(211, 10%, 45%);
`;

const CommentContent = styled.p`
  color: hsl(211, 10%, 45%);
  line-height: 25px;
  margin-bottom: 25px;
`;

const ControlDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonRateDiv = styled.div`
  display: flex;
`;

const ButtonRate = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: hsl(223, 19%, 93%);
  cursor: pointer;
  ${(props) =>
    props.radiusLeft
      ? "border-radius: 10px 0 0 10px"
      : "border-radius: 0 10px 10px 0"}
`;

const ScoreInButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: hsl(238, 40%, 52%);
  height: 40px;
  width: 40px;
  font-size: 18px;
  background-color: hsl(223, 19%, 93%);
`;

const ButtonReply = styled.button`
  border: none;
  background: transparent;
  width: 71px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  color: hsl(238, 40%, 52%);
`;

const UserComments = () => {
  return data.comments.map((i) => (
    <CommentDiv key={i.id}>
      <HeaderComment>
        <Avatar src={i.user.image.png}></Avatar>
        <UserName>{i.user.username}</UserName>
        <DateComment>{i.createdAt}</DateComment>
      </HeaderComment>
      <div>
        <CommentContent>{i.content}</CommentContent>
      </div>
      <ControlDiv>
        <ButtonRateDiv>
          <ButtonRate radiusLeft={true}>
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                fill="#C5C6EF"
              />
            </svg>
          </ButtonRate>
          <ScoreInButton>{i.score}</ScoreInButton>
          <ButtonRate radiusLeft={false}>
            <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                fill="#C5C6EF"
              />
            </svg>
          </ButtonRate>
        </ButtonRateDiv>
        <ButtonReply>
          <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
              fill="#5357B6"
            />
          </svg>
          Reply
        </ButtonReply>
      </ControlDiv>
    </CommentDiv>
  ));
};

export default UserComments;
