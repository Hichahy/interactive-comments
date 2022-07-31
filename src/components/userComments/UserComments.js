import React, { useState } from "react";
import styled from "styled-components";
import DeleteCommentModal from "../deleteCommentModal/DeleteCommentModal";

const CommentDiv = styled.div`
  background-color: hsl(228, 33%, 97%);
  width: 100%;
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

export const ParagraphContent = styled.p`
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
    margin-top: 8px;
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
`;

const CurrentUserPill = styled.label`
  background: hsl(238, 40%, 52%);
  color: white;
  /* padding: 2px 10px; */
  font-size: 13px;
  height: 20px;
  border-radius: 3px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeleteButton = styled.button`
  border: none;
  background: transparent;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  color: hsl(358, 79%, 66%);
  fill: hsl(358, 79%, 66%);
  cursor: pointer;
  svg {
    margin-right: 10px;
  }

  &:hover {
    color: hsl(357, 100%, 86%);
    fill: hsl(357, 100%, 86%);
  }

  @media (min-width: 515px) {
    margin-top: 8px;
    align-items: center;
    height: max-content;
  }
`;

const UserComments = ({ dataUsers, setDataUsers }) => {
  const [openModal, setOpenModal] = useState(false);
  const [delItemId, setDelItemId] = useState(null);
  const [delItemType, setDelItemType] = useState(null);
  const [delReplieIndex, setDelReplieIndex] = useState(null);

  const handleDeleteModal = (id, type, index) => {
    setDelItemId(id);
    setOpenModal(true);
    setDelItemType(type);
    setDelReplieIndex(index);
  };
  console.log(`id`, delItemId);
  console.log(`type`, delItemType, typeof(delItemType));
  console.log(`index`, delReplieIndex);

  if (!dataUsers) {
    return <p>loading...</p>;
  }

  return (
    <>
      {dataUsers.comments.map((i, index) => (
        <div style={{ maxWidth: "48rem", width: "100%" }} key={i.id}>
          <CommentDiv>
            <div style={{ width: "100%" }}>
              <HeaderComment>
                <HeaderUser>
                  <Avatar src={i.user.image.png}></Avatar>
                  <UserName>{i.user.username}</UserName>
                  {i.user.username !== dataUsers.currentUser.username ? null : (
                    <CurrentUserPill>you</CurrentUserPill>
                  )}
                  <DateComment>{i.createdAt}</DateComment>
                </HeaderUser>
              </HeaderComment>
              <div>
                <ParagraphContent>{i.content}</ParagraphContent>
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
            {i.user.username !== dataUsers.currentUser.username ? (
              <ButtonReply>
                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" />
                </svg>
                Reply
              </ButtonReply>
            ) : (
              <DeleteButton
                onClick={() => handleDeleteModal(i.id, "comment", index)}
              >
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" />
                </svg>
                Delete
              </DeleteButton>
            )}
          </CommentDiv>
          {i.replies.length > 0
            ? i.replies.map((r, index) => (
                <ReplyBox key={r.id}>
                  <div style={{ display: "flex", width: "100%" }}>
                    <LineReply />
                    <CommentDiv reply={true}>
                      <div style={{ width: "100%" }}>
                        <HeaderComment>
                          <HeaderUser>
                            <Avatar src={r.user.image.png}></Avatar>
                            <UserName>{r.user.username}</UserName>
                            {r.user.username !==
                            dataUsers.currentUser.username ? null : (
                              <CurrentUserPill>you</CurrentUserPill>
                            )}
                            <DateComment>{r.createdAt}</DateComment>
                          </HeaderUser>
                        </HeaderComment>
                        <div>
                          <ParagraphContent>
                            <span>@{r.replyingTo} </span>
                            {r.content}
                          </ParagraphContent>
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
                      {r.user.username !== dataUsers.currentUser.username ? (
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
                      ) : (
                        <DeleteButton
                          onClick={() =>
                            handleDeleteModal(r.id, "reply", index)
                          }
                        >
                          <svg
                            width="12"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" />
                          </svg>
                          Delete
                        </DeleteButton>
                      )}
                    </CommentDiv>
                  </div>
                </ReplyBox>
              ))
            : null}
        </div>
      ))}
      <DeleteCommentModal
        setOpenModal={setOpenModal}
        openModal={openModal}
        dataUsers={dataUsers}
        setDataUsers={setDataUsers}
        delItemId={delItemId}
        delReplieIndex={delReplieIndex}
        delItemType={delItemType}
      />
    </>
  );
};

export default UserComments;
