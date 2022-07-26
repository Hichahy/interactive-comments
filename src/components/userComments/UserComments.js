import React from "react";
import styled from "styled-components";

const CommentDiv = styled.div`
  background-color: hsl(228, 33%, 97%);
  max-width: 48rem;
  border-radius: 15px;
  display: flex;
  margin: 10px 0;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;
  @media (min-width: 515px) {
    flex-direcion: row;
    flex-wrap: nowrap;
    padding: 20px;
  }
  ${(props) => props.reply && "width: 100%"}
`;

const HeaderComment = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HeaderUser = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  margin-bottom: 18px;
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
`;

const UserName = styled.h1`
  font-size: 16px;
  font-weight: 700;
`;

const DateComment = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: hsl(211, 10%, 45%);
`;

const CommentContent = styled.p`
  color: hsl(211, 10%, 45%);
  line-height: 25px;
  margin-bottom: 25px;
  span {
    color: hsl(238, 40%, 52%);
    font-weight: 700;
  }
  @media (min-width: 515px) {
    margin-bottom: 0;
  }
`;

const ButtonRateDiv = styled.div`
  display: flex;
  @media (min-width: 515px) {
    flex-direction: column;
    order: -1;
    margin-right: 20px;
  }
`;

const ButtonRate = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: hsl(223, 19%, 93%);
  fill: hsl(239, 57%, 85%);
  &:hover {
    fill: hsl(238, 40%, 52%);
  }
  @media (min-width: 515px) {
    ${(props) =>
      props.radiusLeft
        ? "border-radius: 10px 10px 0 0"
        : "border-radius: 0 0 10px 10px"}
  }
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
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  color: hsl(238, 40%, 52%);
  fill: hsl(238, 40%, 52%);
  cursor: pointer;
  svg {
    margin-right: 10px;
  }

  &:hover {
    color: hsl(239, 57%, 85%);
    fill: hsl(239, 57%, 85%);
  }

  @media (min-width: 515px) {
    margin-top: 13px;
    align-items: center;
    height: max-content;
  }
`;

const LineReply = styled.div`
  width: 2px;
  background-color: hsl(0deg 0% 0% / 6%);
  margin: 0 17px 0 0;
  @media (min-width: 1000px) {
    margin: 0 35px 0 35px;
  }
`;

const ReplyBox = styled.div`
  display: flex;
  alignitems: center;
  flexdirection: column;
  max-width: 48rem;
`;

const UserComments = ({ dataUsers }) => {
  if (!dataUsers) {
    return <p>loading...</p>;
  }

  return dataUsers.comments.map((i) => (
    <div key={i.id}>
      <CommentDiv>
        <div>
          <HeaderComment>
            <HeaderUser>
              <Avatar src={i.user.image.png}></Avatar>
              <UserName>{i.user.username}</UserName>
              <DateComment>{i.createdAt}</DateComment>
            </HeaderUser>
          </HeaderComment>
          <div>
            <CommentContent>{i.content}</CommentContent>
          </div>
        </div>

        <ButtonRateDiv>
          <ButtonRate radiusLeft={true}>
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
            </svg>
          </ButtonRate>
          <ScoreInButton>{i.score}</ScoreInButton>
          <ButtonRate radiusLeft={false}>
            <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
            </svg>
          </ButtonRate>
        </ButtonRateDiv>
        <ButtonReply>
          <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
            <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" />
          </svg>
          Reply
        </ButtonReply>
      </CommentDiv>
      {i.replies.length > 0
        ? i.replies.map((r) => (
            <ReplyBox key={r.id}>
              <div style={{ display: "flex" }}>
                <LineReply />
                <CommentDiv reply={true}>
                  <div>
                    <HeaderComment>
                      <HeaderUser>
                        <Avatar src={r.user.image.png}></Avatar>
                        <UserName>{r.user.username}</UserName>
                        <DateComment>{r.createdAt}</DateComment>
                      </HeaderUser>
                    </HeaderComment>
                    <div>
                      <CommentContent>
                        <span>@{r.replyingTo} </span>
                        {r.content}
                      </CommentContent>
                    </div>
                  </div>

                  <ButtonRateDiv>
                    <ButtonRate radiusLeft={true}>
                      <svg
                        width="11"
                        height="11"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
                      </svg>
                    </ButtonRate>
                    <ScoreInButton>{r.score}</ScoreInButton>
                    <ButtonRate radiusLeft={false}>
                      <svg
                        width="11"
                        height="3"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
                      </svg>
                    </ButtonRate>
                  </ButtonRateDiv>
                  <ButtonReply>
                    <svg
                      width="14"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" />
                    </svg>
                    Reply
                  </ButtonReply>
                </CommentDiv>
              </div>
            </ReplyBox>
          ))
        : null}
    </div>
  ));
};

export default UserComments;
