//import logo from './logo.svg';
import "./css/App.css";
import Images from "./Gates/image_List";
import Screen from "./Screen/Screen";
import Click from "./Screen/click";
import Reload from "./Screen/reload";
import Images_ctrl from "./Gates/image_ctrl_List";
import Images_ctrl_ctrl from "./Gates/image_ctrl_ctrl_List";

function App() {
  var images = [];
  var ctrl_images = [];
  var ctrl_ctrl_images = [];
  var rortation_images = [];
  const n = 5;

  /* この処理の方がスマートにかける気がする
  他のjsでの処理では，gateの情報をラベルをもとに引っ張ってくる．
  idは各々のgateにおいて個々を識別する値．*/
  const gate_labels = ["X", "Y", "H", "Z", "CX", "CH", "CZ", "CCX", "RX"];

  for (const label of gate_labels) {
    for (let j = 0; j < n; j++) {
      if (!label.indexOf("CC")) {
        ctrl_ctrl_images.push({
          id: j,
          name: label,
          path: "./" + label + ".png",
        });
      } else {
        if (label.includes("C")) {
          ctrl_images.push({ id: j, name: label, path: "./" + label + ".png" });
        } else if (label.includes("R")) {
          rortation_images.push({
            id: j,
            name: label,
            path: "./" + label + ".png",
          });
        } else {
          images.push({ id: j, name: label, path: "./" + label + ".png" });
        }
      }
    }
  }

  return (
    <div>
      <Images images={images} />
      <Images_ctrl images={ctrl_images} />
      <Images_ctrl_ctrl images={ctrl_ctrl_images} />
      <Screen />
      <div style={{ display: "flex" }}>
        <Click />
        <Reload />
      </div>
    </div>
  );
}

export default App;
