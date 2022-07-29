import React, { useState } from "react";
import "./app.scss";
import styled from "styled-components";
import UserComments from "./components/userComments/UserComments";
import NewComment from "./components/newComment/NewComment";
import DeleteCommentModal from "./components/deleteCommentModal/DeleteCommentModal";
import data from "./data.json";

const AppContainer = styled.div`
  background: hsl(223, 19%, 93%);
  min-height: 100%;
  width: 100%;
  padding: 20px 20px;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [dataUsers, setDataUsers] = useState(
    JSON.parse(localStorage.getItem("data")) || data
  );

  localStorage.setItem("data", JSON.stringify(dataUsers));

  return (
    <AppContainer>
      <UserComments dataUsers={dataUsers} />
      <NewComment dataUsers={dataUsers} setDataUsers={setDataUsers} />
      <DeleteCommentModal />
    </AppContainer>
  );
};

export default App;
