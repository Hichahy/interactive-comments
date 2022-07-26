import React, { useState } from "react";
import styled from "styled-components";
import DeleteCommentModal from "../deleteCommentModal/DeleteCommentModal";
import EditComment from "../editComment/EditComment";
import NewReply from "../newReply/NewReply";
import { timeSince } from "../../utils/time";

const CommentDiv = styled.div`
  background-color: hsl(228deg, 33%, 97%);
  width: 100%;
  border-radius: 15px;
  display: flex;
  margin: 10px 0;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  position: relative;
  box-sizing: border-box;

  @media (min-width: 615px) {
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
  width: 280px;
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
  color: hsl(211deg, 10%, 45%);
`;

export const ParagraphContent = styled.p`
  color: hsl(211deg, 10%, 45%);
  line-height: 25px;
  margin-bottom: 25px;

  span {
    color: hsl(238deg, 40%, 52%);
    font-weight: 700;
  }
  @media (min-width: 615px) {
    margin-bottom: 0;
  }
`;

const ButtonRateDiv = styled.div`
  display: flex;

  @media (min-width: 615px) {
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
  background-color: hsl(223deg, 19%, 93%);
  ${(props) =>
    props.blocked ? "fill: hsl(239, 57%, 85%);" : "fill:  hsl(238, 40%, 52%);"};

  &:hover {
    fill: hsl(238deg, 40%, 52%);
  }

  @media (min-width: 615px) {
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
  color: hsl(238deg, 40%, 52%);
  height: 40px;
  width: 40px;
  font-size: 18px;
  background-color: hsl(223deg, 19%, 93%);
`;

const ButtonReply = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  color: hsl(238deg, 40%, 52%);
  fill: hsl(238deg, 40%, 52%);
  cursor: pointer;
  position: absolute;
  right: 20px;

  svg {
    margin-right: 10px;
  }

  &:hover {
    color: hsl(239deg, 57%, 85%);
    fill: hsl(239deg, 57%, 85%);
  }

  @media (min-width: 615px) {
    margin-top: 8px;
    align-items: center;
    height: max-content;
  }

  @media (max-width: 614px) {
    bottom: 25px;
  }
`;

const LineReply = styled.div`
  width: 1px;
  background-color: hsl(0deg 0% 0% / 8%);
  margin: 0 17px 0 0;

  @media (min-width: 1000px) {
    margin: 0 35px;
  }
`;

const ReplyBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserBoxButtons = styled.div`
  display: flex;
  height: fit-content;
  position: absolute;
  right: 20px;

  @media (max-width: 614px) {
    bottom: 25px;
  }
`;

const CurrentUserPill = styled.label`
  background: hsl(238deg, 40%, 52%);
  color: white;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  color: hsl(358deg, 79%, 66%);
  fill: hsl(358deg, 79%, 66%);
  margin-right: 10px;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }

  &:hover {
    color: hsl(357deg, 100%, 86%);
    fill: hsl(357deg, 100%, 86%);
  }

  @media (min-width: 615px) {
    margin-top: 8px;
    align-items: center;
    height: max-content;
    margin-right: 20px;
  }
`;

const EditButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  color: hsl(238deg, 40%, 52%);
  fill: hsl(238deg, 40%, 52%);
  cursor: pointer;

  svg {
    margin-right: 10px;
  }

  &:hover {
    color: hsl(239deg, 57%, 85%);
    fill: hsl(239deg, 57%, 85%);
  }

  @media (min-width: 615px) {
    margin-top: 8px;
    align-items: center;
    height: max-content;
  }
`;

const UserComments = ({ dataUsers, setDataUsers }) => {
  const [openModal, setOpenModal] = useState(false);
  const [delItemId, setDelItemId] = useState(null);

  const handleDeleteModal = (id) => {
    setDelItemId(id);
    setOpenModal(true);
  };

  const handleAddRateComment = (id) => {
    setDataUsers({
      ...dataUsers,
      comments: dataUsers.comments.map((comment) =>
        comment.id === +id && comment.rateIsAdd === false
          ? {
              ...comment,
              score: comment.score + 1,
              rateIsAdd: true, //add rate, but only once time
            }
          : {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === +id && reply.rateIsAdd === false
                  ? {
                      ...reply,
                      score: reply.score + 1,
                      rateIsAdd: true,
                    }
                  : reply
              ),
            }
      ),
    });
  };

  const handleSubstractRateComment = (id) => {
    setDataUsers({
      ...dataUsers,
      comments: dataUsers.comments.map((comment) =>
        comment.id === +id && comment.rateIsAdd === true
          ? {
              ...comment,
              score: comment.score - 1,
              rateIsAdd: false, //substract rate, but only once time when is after rate
            }
          : {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === +id && reply.rateIsAdd === true
                  ? {
                      ...reply,
                      score: reply.score - 1,
                      rateIsAdd: false,
                    }
                  : reply
              ),
            }
      ),
    });
  };

  const handleOpenReply = (id, reply) => {
    setDataUsers({
      ...dataUsers,
      comments: dataUsers.comments.map((c) =>
        c.id === +id
          ? {
              ...c,
              reply: reply ? false : true,
            }
          : {
              ...c,
              replies: c.replies.map((r) =>
                r.id === id
                  ? {
                      ...r,
                      reply: reply ? false : true,
                    }
                  : r
              ),
            }
      ),
    });
  };

  const handleOpenEdit = (id, edit, content) => {
    setDataUsers({
      ...dataUsers,
      comments: dataUsers.comments.map((c) =>
        c.id === +id
          ? {
              ...c,
              edit: edit ? false : true,
            }
          : {
              ...c,
              replies: c.replies.map((r) =>
                r.id === id
                  ? {
                      ...r,
                      edit: edit ? false : true,
                    }
                  : r
              ),
            }
      ),
    });
  };

  if (!dataUsers) {
    return <p>loading...</p>;
  }

  return (
    <>
      {dataUsers.comments.map((i) => (
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
                  <DateComment>{`${timeSince(i.createdAt)} ago`}</DateComment>
                </HeaderUser>
              </HeaderComment>
              <div>
                {!i.edit ? (
                  <ParagraphContent>{i.content}</ParagraphContent>
                ) : (
                  <EditComment
                    dataUsers={dataUsers}
                    id={i.id}
                    content={i.content}
                    setDataUsers={setDataUsers}
                  />
                )}
              </div>
            </div>

            <ButtonRateDiv>
              <ButtonRate
                onClick={() => handleAddRateComment(i.id)}
                radiusLeft={true}
                blocked={!i.rateIsAdd}
              >
                <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
                </svg>
              </ButtonRate>
              <ScoreInButton>{i.score}</ScoreInButton>
              <ButtonRate
                onClick={() => handleSubstractRateComment(i.id)}
                radiusLeft={false}
                blocked={i.rateIsAdd}
              >
                <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
                </svg>
              </ButtonRate>
            </ButtonRateDiv>
            {i.user.username !== dataUsers.currentUser.username ? (
              <ButtonReply
                onClick={() => {
                  handleOpenReply(i.id, i.reply);
                }}
              >
                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" />
                </svg>
                Reply
              </ButtonReply>
            ) : (
              <UserBoxButtons>
                <DeleteButton onClick={() => handleDeleteModal(i.id)}>
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" />
                  </svg>
                  Delete
                </DeleteButton>
                <EditButton
                  onClick={() => handleOpenEdit(i.id, i.edit, i.content)}
                >
                  <svg
                    width="14"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" />
                  </svg>
                  Edit
                </EditButton>
              </UserBoxButtons>
            )}
          </CommentDiv>
          {i.reply ? (
            <NewReply
              dataUsers={dataUsers}
              setDataUsers={setDataUsers}
              id={i.id}
            />
          ) : null}
          {i.replies.length > 0
            ? i.replies.map((r) => (
                <ReplyBox key={r.id}>
                  <div style={{ display: "flex", width: "100%" }}>
                    <LineReply />
                    <div style={{ width: "100%" }}>
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
                              <DateComment>{`${timeSince(
                                r.createdAt
                              )} ago`}</DateComment>
                            </HeaderUser>
                          </HeaderComment>
                          <div>
                            {!r.edit ? (
                              <ParagraphContent>
                                <span>@{r.replyingTo} </span>
                                {r.content}
                              </ParagraphContent>
                            ) : (
                              <EditComment
                                dataUsers={dataUsers}
                                id={r.id}
                                content={r.content}
                                setDataUsers={setDataUsers}
                              />
                            )}
                          </div>
                        </div>

                        <ButtonRateDiv>
                          <ButtonRate
                            onClick={() => handleAddRateComment(r.id)}
                            radiusLeft={true}
                            blocked={!r.rateIsAdd}
                          >
                            <svg
                              width="11"
                              height="11"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
                            </svg>
                          </ButtonRate>
                          <ScoreInButton>{r.score}</ScoreInButton>
                          <ButtonRate
                            onClick={() => handleSubstractRateComment(r.id)}
                            radiusLeft={false}
                            blocked={r.rateIsAdd}
                          >
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
                          <ButtonReply
                            onClick={() => handleOpenReply(r.id, r.reply)}
                          >
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
                          <UserBoxButtons>
                            <DeleteButton
                              onClick={() => handleDeleteModal(r.id)}
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
                            <EditButton
                              onClick={() =>
                                handleOpenEdit(r.id, r.edit, r.content)
                              }
                            >
                              <svg
                                width="14"
                                height="14"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" />
                              </svg>
                              Edit
                            </EditButton>
                          </UserBoxButtons>
                        )}
                      </CommentDiv>
                      {r.reply ? (
                        <NewReply
                          dataUsers={dataUsers}
                          setDataUsers={setDataUsers}
                          id={i.id}
                          replyId={r.id}
                        />
                      ) : null}
                    </div>
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
      />
    </>
  );
};

export default UserComments;
