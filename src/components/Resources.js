import React from "react";
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import DevMag from "./resources/DevMag";
import Inspiration from "./resources/Inspiration";
import FreeAssets from "./resources/FreeAssets";
import Typography from "./resources/Typography";
import Colors from "./resources/Colors";
import ProcessingTools from "./resources/ProcessingTools";
import DevTools from "./resources/DevTools";
import Hosting from "./resources/Hosting";
import Javascript from "./resources/Javascript";
import ComputerScience from "./resources/ComputerScience";

const Tab = ({ children }) => {
  const { onClick, isActive } = useTabState();

  return (
    <button
      className={isActive ? "resource-btn is-active" : "resource-btn"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Panel = ({ children }) => {
  const isActive = usePanelState();

  return isActive ? <>{children}</> : null;
};

const Resources = () => (
  <>
    <h2 className="resources-title">Resources</h2>
    <div className="resources-container">
      <Tabs>
        <div className="tab-container">
          <Tab>Dev Magazines</Tab>
          <Tab>Inspiration</Tab>
          <Tab>Free Assets</Tab>
          <Tab>Typography</Tab>
          <Tab>Colors</Tab>
          <Tab>Processing Tools</Tab>
          <Tab>Dev Tools</Tab>
          <Tab>Hosting</Tab>
          <Tab>Javascript</Tab>
          <Tab>Computer Science</Tab>
        </div>

        <Panel>
          <DevMag />
        </Panel>
        <Panel>
          <Inspiration />
        </Panel>
        <Panel>
          <FreeAssets />
        </Panel>
        <Panel>
          <Typography />
        </Panel>
        <Panel>
          <Colors />
        </Panel>
        <Panel>
          <ProcessingTools />
        </Panel>
        <Panel>
          <DevTools />
        </Panel>
        <Panel>
          <Hosting />
        </Panel>
        <Panel>
          <Javascript />
        </Panel>
        <Panel>
          <ComputerScience />
        </Panel>
      </Tabs>
    </div>
  </>
);

export default Resources;
