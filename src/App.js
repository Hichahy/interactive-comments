import "./app.scss";
import styled from "styled-components";
import UserComments from "./components/userComments/UserComments";

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
  return (
    <AppContainer>
      <UserComments />
    </AppContainer>
  );
};

export default App;
