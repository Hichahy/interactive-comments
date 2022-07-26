import React, { useState, useEffect } from "react";
import "./app.scss";
import styled from "styled-components";
import UserComments from "./components/userComments/UserComments";
import NewComment from "./components/newComment/NewComment";
import data from "./data.json";

const AppContainer = styled.div`
  background: hsl(223, 19%, 93%);
  min-height: 100%;
  width: 100%;
  padding: 20px 15px;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [dataUsers, setDataUsers] = useState(data);
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    setDataUsers(dataUsers);
    setLoadData(false);
  }, [loadData, dataUsers]);

  return (
    <AppContainer>
      <UserComments dataUsers={dataUsers} />
      <NewComment
        dataUsers={dataUsers}
        setDataUsers={setDataUsers}
        setLoadData={setLoadData}
      />
    </AppContainer>
  );
};

export default App;
