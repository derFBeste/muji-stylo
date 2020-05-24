import React from "react";

import "./index.css";
import { MujiButton, MujiSectionHeader } from "./MujiStylo";

function App() {
  return (
    <React.Fragment>
      <MujiSectionHeader className="jc">
        <h1>muji stylo</h1>
      </MujiSectionHeader>
      <MujiSectionHeader>
        <h2>buttons</h2>
      </MujiSectionHeader>
      <MujiButton>Push Me</MujiButton>
    </React.Fragment>
  );
}

export default App;
