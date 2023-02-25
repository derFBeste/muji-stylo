import type { Component } from "solid-js";
import { ButtonDemo } from "./components/Button/ButtonDemo";

// TODO: add prettier setup, tailwinds and solid-js plugin
// TODO: update readme, solid blazing primitives

const App: Component = () => {
  return (
    <>
      <h1 class="m-2">muji-ui prototypes</h1>
      <ButtonDemo />
    </>
  );
};

export default App;
