import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { ParagraphContent } from "../userComments/UserComments";

const ButtonModal = styled.button`
  border: none;
  color: white;
  height: 40px;
  width: 145px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    ${(props) =>
      props.danger
        ? "background: hsl(357, 100%, 86%)"
        : "background: hsl(211deg 10% 45% / 56%)"}
  }

  ${(props) =>
    props.danger
      ? "background: hsl(358, 79%, 66%)"
      : "background: hsl(211, 10%, 45%)"};

  @media (max-width: 515px) {
    width: 120px;
    font-size: 14px;
  }
`;

const OverlayModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #0000005a;
  border: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  -webkit-animation: fadein 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fadein 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const ModalTitle = styled.h1`
  width: 100%;
  font-size: 23px;
  color: hsl(211, 10%, 45%);
`;
const Modal = styled.div`
  position: fixed;
  z-index: 101;
  border: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  height: 200px;
  max-width: 330px;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  text-align: inherit;

  @media (max-width: 515px) {
    width: 80%;
  }
`;

const DeleteCommentModal = ({ openModal, setOpenModal }) => {
  if (!openModal) return null;
  return ReactDOM.createPortal(
    <>
      <OverlayModal onClick={() => setOpenModal(false)} />
      <Modal>
        <ModalTitle>Delete comment</ModalTitle>
        <ParagraphContent>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </ParagraphContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <ButtonModal
            onClick={() => setOpenModal(false)}
            style={{ marginRight: "11px" }}
          >
            NO, CANCEL
          </ButtonModal>
          <ButtonModal danger={true}>YES, DELETE</ButtonModal>
        </div>
      </Modal>
    </>,
    document.getElementById("portal")
  );
};

export default DeleteCommentModal;
