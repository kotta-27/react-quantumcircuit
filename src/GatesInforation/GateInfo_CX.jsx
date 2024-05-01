import React from 'react';
import { useEffect } from 'react';
import katex from 'katex';
import { Tex } from 'react-tex';

const GateInfo_CX = () => {
    const toCenter = {
        textAlign: "center",
    };
  return (
    <div style={{position:"relative", margin: "0 auto"}}>
    <h1 style={{fontWeight:"bold", textAlign: "center",borderBottom:"2px solid", borderColor:"blue"}}><Tex texContent="CX"/>ゲート</h1>
    <div style={{fontSize: "25px"}}>
    </div>
    </div>
  )
}

export default GateInfo_CX