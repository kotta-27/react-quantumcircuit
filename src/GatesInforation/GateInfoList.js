import React from "react";
import GateInfo from "./GateInfo";

const GateInfoList = ({ button }) => {
  const GateInfoList = ["X", "H", "CX", "Z", "CCX"];

  return GateInfoList.map((label) => (
    <GateInfo label={label} button={button} />
  ));
};

export default GateInfoList;
