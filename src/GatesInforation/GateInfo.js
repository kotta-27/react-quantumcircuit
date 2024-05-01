import React from "react";
import { useState } from "react";
import { Button, Container } from "@mui/material";
import Modal from "react-modal";
import GateInfo_X from "./GateInfo_X";
import GateInfo_H from "./GateInfo_H";
import GateInfo_CX from "./GateInfo_CX";

const customStyles = {
  content: {
    top: "400px",   
    left: "50%",
    right: "auto",
    // bottom: "auto",
    marginRight: "-50%",
    marginTop: "5%",
    transform: "translate(-50%, -50%)",
    height: "90%",
    minWidth: "80%",
    maxWidth: "80%",
    backgroundColor: "white",
    border: "2px solid",
    display: "relative",
  },
};

const GateInfo = ({ label, button }) => {
  const myLabel = label;
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const closeModal = () => {
    setEditModalIsOpen(false);
  };
  const [selectedComponent, setSelectedComponent] = useState(null);
  var rightComponent = null;
  var leftComponent = null;
  switch (selectedComponent) {
    case "X":
      rightComponent = "H";
      leftComponent = null;
      break;
    case "H":
      rightComponent = "CX";
      leftComponent = "X";
      break;
    case "CX":
      rightComponent = null;
      leftComponent = "H";
      break;
    default:
      break;
  }

  const changeComponentToRight = (currentComponent) => {
    switch (currentComponent) {
      case "X":
        setSelectedComponent("H");
        break;
      case "H":
        setSelectedComponent("CX");
        break;
      case "CX":
        // TODO
        break;
      default:
        break;
    }
  };
  const changeComponentToLeft = (currentComponent) => {
    switch (currentComponent) {
      case "X":
        break;
      case "H":
        setSelectedComponent("X");
        break;
      case "CX":
        setSelectedComponent("H");
        break;
      default:
        break;
    }
  };
  return (
    <div
      style={{
        height: "100px",
        width: "50%",
        fontSize: "30px",
        border: "2px solid",
        margin: "10px 10px",
        borderRadius: "8px",
      }}
    >
      {myLabel + "ゲート"}
      <Container maxWidth="sm">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setSelectedComponent(myLabel);
            setEditModalIsOpen(true);
          }}
        >
          詳細
        </Button>
        <Modal isOpen={editModalIsOpen} style={customStyles}>
          {selectedComponent == "X" && <GateInfo_X />}
          {selectedComponent == "H" && <GateInfo_H />}
          {selectedComponent == "CX" && <GateInfo_CX />}
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              setSelectedComponent(null);
              closeModal();
            }}
            style={{
              width: "40px",
              height: "40px",
              position: "absolute",
              top: "25px",
              right: "20px",
              fontSize: "30px",
              border: "2px solid",
            }}
          >
            ×
          </Button>
          {button}
        </Modal>
      </Container>
      <div>
        {editModalIsOpen == true && selectedComponent != "CX" && (
          <Button
            onClick={() => {
              changeComponentToRight(selectedComponent);
            }}
            style={{
              position: "absolute",
              right: "20px",
              top: "40%",
              zIndex: 100,
              fontSize: "70px",
            }}
          >
            <i class="fa-solid fa-angles-right"></i>
          </Button>
        )}
      </div>
      <div>
        {editModalIsOpen == true && selectedComponent != "X" && (
          <Button
            onClick={() => {
              console.log("toLeft");
              changeComponentToLeft(selectedComponent);
            }}
            style={{
              position: "absolute",
              left: "20px",
              top: "40%",
              zIndex: 100,
              fontSize: "70px",
            }}
          >
            <i class="fa-solid fa-angles-left"></i>
          </Button>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          right: "55px",
          top: "36%",
          zIndex: 100,
          fontSize: "30px",
          color: "rgba(0,0,255,0.6)",
        }}
      >
        {editModalIsOpen && rightComponent != null && rightComponent}
      </div>
      <div
        style={{
          position: "absolute",
          left: "55px",
          top: "36%",
          zIndex: 100,
          fontSize: "30px",
          color: "rgba(0,0,255,0.6)",
        }}
      >
        {editModalIsOpen && leftComponent != null && leftComponent}
      </div>
    </div>
  );
};

export default GateInfo;
