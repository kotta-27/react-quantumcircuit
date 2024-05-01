import React from 'react';
import { useEffect } from 'react';
import katex from 'katex';
import { Tex } from 'react-tex';

const GateInfo_H = () => {
    const coef = "\\dfrac{1}{\\sqrt{2}}";
    const H_mat = coef + "\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}";
    const ket_0 = "\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}";
    const ket_1 = "\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}";
    const ket_plus = coef + "\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}";
    const ket_minas = coef + "\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}";

    const texString1 = "H =" + H_mat;
    const texString2 = "H" + ket_0 + "=" + H_mat + ket_0 + "=" + ket_plus + "=" + coef + "\\left( \\ket{0} + \\ket{1} \\right) \\cdots (a)"; 
    const texString3 = "H" + ket_1 + "=" + H_mat + ket_1 + "=" + ket_minas + "=" + coef + "\\left( \\ket{0} - \\ket{1} \\right) \\cdots (b)"; 



    const toCenter = {
        textAlign: "center",
    };
  return (
    <div style={{position:"relative", margin: "0 auto"}}>
    <h1 style={{fontWeight:"bold", textAlign: "center",borderBottom:"2px solid", borderColor:"blue"}}><Tex texContent="H"/>ゲート(Hadamardゲート)</h1>
    <div style={{fontSize: "25px"}}>
    Hadamard（アダマール）ゲートは，「0」と「1」の重ね合わせ状態を生成する操作を行うゲートです．
    <br></br><Tex texContent="H"/>ゲートの行列表現は，
    <p style={{fontSize:"25px",fontWeight:"bold",textAlign:"center"}}><Tex texContent={texString1} /></p>
    試しに，計算基底<Tex texContent="\ket{0}"/>に対して<Tex texContent="H"/>を作用させてみるとこんなかんじ．
    <p style={toCenter}><Tex texContent={texString2}/></p>
    この状態から<Tex texContent="\ket{0}"/>,<Tex texContent="\ket{1}"/>を取る確率は，確率振幅の絶対値の2乗から，それぞれ
    <Tex texContent="\ \left|\dfrac{1}{\sqrt{2}}\right|^2=\dfrac{1}{2}"/>　となります．
    <br></br>つまり，<Tex texContent="H"/>ゲートを用いることで，<span style={{textDecoration:"underline wavy",textDecorationColor:"red"}}>
    「0と1が等しく重なり合った状態」</span>を作り出すことができる！
    <br></br>ちなみに，<Tex texContent="\ket{1}"/>に<Tex texContent="H"/>を作用させてみると，
    <p style={toCenter}><Tex texContent={texString3}/></p>
    となります．これも<Tex texContent="\ket{0}"/>,<Tex texContent="\ket{1}"/>が等しく重なり合っていますが，(a)
    と比べて<span style={{textDecoration:"underline"}}>位相が異なります</span>．<br></br>
    なお，(a),(b)はそれぞれ<Tex texContent="\ket{+}"/>,<Tex texContent="\ket{-}"/>という名前があります．
    </div>
    </div>
  )
}

export default GateInfo_H