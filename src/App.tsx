import React from "react";

import "./App.css";
import BoxA from "./components/box/BoxA";
import BoxB from "./components/box/BoxB";

import RootStoreContext, { rootStore } from "./store/rootStore";

const App = () => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      <div className="main">
        <BoxA />
        <BoxB />
      </div>
    </RootStoreContext.Provider>
  );
};

export default App;
