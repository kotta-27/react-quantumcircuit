import React, { useState } from "react";
import App from "./App";
import GateInfoList from "./GatesInforation/GateInfoList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Button } from "@mui/material";

const SetTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const switchToTab = (tabIndex) => {
    setSelectedTab(tabIndex);
  };
  return (
    <Tabs
      selectedIndex={selectedTab}
      onSelect={(index) => setSelectedTab(index)}
    >
      <TabList>
        <Tab style={{ backgroundColor: "rgba(200, 200, 200, 0.6)" }}>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>Circuit</span>
        </Tab>
        <Tab style={{ backgroundColor: "rgba(200, 200, 200, 0.6)" }}>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>
            QuantumGate
          </span>
        </Tab>
        <Tab style={{ backgroundColor: "rgba(200, 200, 200, 0.6)" }}>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>TextBook</span>
        </Tab>
      </TabList>

      <TabPanel>
        <App />
      </TabPanel>
      <TabPanel>
        <GateInfoList
          button={
            <Button
              onClick={() => {
                switchToTab(0);
              }}
              color="success"
              style={{
                position: "absolute",
                top: "20px",
                left: "30px",
                fontSize: "20px",
                fontWeight: "bold",
                border: "2px solid",
              }}
            >
              回路で確認する
            </Button>
          }
        />
      </TabPanel>
      <TabPanel>
        <h1>　・理研の国産量子コンピュータの実機，チップなど．．．</h1>
        <h1>　・量子技術者を増やすための取り組み/勉強会/セミナー</h1>
        <h1>　・量子コンピュータの応用先 etc... </h1>
      </TabPanel>
    </Tabs>
  );
};

export default SetTabs;
