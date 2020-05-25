import React from "react";
import "tachyons";

import "./index.css";
import { MujiButton, MujiSectionHeader } from "./MujiStylo";

function App() {
  return (
    <React.Fragment>
      <MujiSectionHeader css={{ "justify-content": "center", height: "3rem" }}>
        <h1>muji stylo</h1>
      </MujiSectionHeader>
      <MujiSectionHeader className="h3">
        <h2>buttons:</h2>
        <MujiButton>Push Me</MujiButton>
        <MujiButton>Push Me</MujiButton>
        <MujiButton>Push Me</MujiButton>
        <MujiButton>Push Me</MujiButton>
        <MujiButton>Push Me</MujiButton>
      </MujiSectionHeader>
      <MujiSectionHeader className="h3">
        <h2>tags:</h2>
      </MujiSectionHeader>
    </React.Fragment>
  );
}

export default App;
