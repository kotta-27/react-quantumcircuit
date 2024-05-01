import React from 'react'
import { Tex } from 'react-tex' 

const GateInfo_X = () => {
    const texString1 = "X = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}"
    const texString2 = "X \\ket{0} = \\ket{1}";
    const texString3 = "X \\ket{1} = \\ket{0}";
    const texString4 = "\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}"
    + "\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}=";
    const texString5 = "\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}"
    + "\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}=";

    const X_mat = "\\begin{matrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}"

    const toCenter = {
        textAlign: "center",
    };

    const underLine_blue = {
        textDecoration: "underline",
        backgroundColor:"rgba(100,100,255,0.5)",
        borderRadius: "10px",
    };

    const underLine_red = {
        textDecoration: "underline",
        backgroundColor:"rgba(255,100,100,0.5)",
        borderRadius: "10px",
    };
    
  return (
    <div style={{position:"relative", margin: "0 auto"}}>
    <h1 style={{fontWeight:"bold", textAlign: "center",borderBottom:"2px solid", borderColor:"blue"}}><Tex texContent="X"/>ゲート</h1>
    <div style={{fontSize: "25px"}}>
    Xゲートは，量子ビット（計算基底）の反転を行うゲートで，古典の論理ゲートに対応させてNOTゲートともいわれています．
    行列表現は次の通りです．
    <p style={toCenter}><Tex texContent={texString1}/></p>
    NOTゲートといわれている通り，計算基底<Tex texContent="\ket{0}"/>,<Tex texContent="\ket{1}"/>に作用させると，ビットが反転します．
    <p style={toCenter}>
        <Tex texContent="X"/><span style={underLine_blue}><Tex texContent="\ket{0}"/></span><Tex texContent={texString4}/><span style={underLine_red}><Tex texContent="\ket{1}"/></span>，
        <Tex texContent="X"/><span style={underLine_red}><Tex texContent="\ket{1}"/></span><Tex texContent={texString5}/><span style={underLine_blue}><Tex texContent="\ket{0}"/></span>
        </p>
    </div>
    </div>
  )
}

export default GateInfo_X