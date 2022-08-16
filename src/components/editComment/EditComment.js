import React, {useState} from "react";
import styled from "styled-components";

const EditBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  -webkit-animation: fadein 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fadein 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const TextAreaEdit = styled.textarea`
  width: 100%;
  border: 1px solid #80808038;
  border-radius: 10px;
  height: 80px;
  padding: 10px 20px;
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
  resize: none;
  outline: 1px solid #80808038;
  font-size: 16px;
  color: hsl(211deg, 10%, 45%);
  margin-bottom: 20px;

  ::placeholder {
    font-family: "Nunito Sans", sans-serif;
    font-size: 16px;
  }

  :focus {
    border: 1px solid hsl(238deg, 40%, 52%);
  }
`;

const UpdateButton = styled.button`
  min-width: 100px;
  height: 40px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  outline-color: transparent;
  color: white;
  cursor: pointer;
  background: hsl(238deg, 40%, 52%);

  &:hover {
    background: hsl(239deg, 57%, 85%);
  }

  @media (max-width: 615px) {
    margin-bottom: 15px;
  }
`;

const EditComment = ({dataUsers, setDataUsers, id, content}) => {
const [editValue, setEditValue] = useState(content)

  const handleUpadateComment = (id) => {
    setDataUsers({
      ...dataUsers,
      comments: dataUsers.comments.map((c) =>
        c.id === +id
          ? {
              ...c,
              content: editValue,
              edit: false,
            }
          : {
              ...c,
              replies: c.replies.map((r) =>
                r.id === id
                  ? {
                      ...r,
                      content: editValue,
                      edit: false,
                    }
                  : r
              ),
            }
      ),
    });
  };


  const handleEditValue = (e) => {
    setEditValue(e.target.value);
  };


  return (
    <EditBox>
      <TextAreaEdit onChange={handleEditValue} value={editValue}></TextAreaEdit>
      <UpdateButton onClick={() => handleUpadateComment(id)}>
        Update
      </UpdateButton>
    </EditBox>
  );
};

export default EditComment;
