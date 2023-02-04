import type { Component } from "solid-js";
import { ProtoButtons } from "./components/Button/Button";

// TODO: add prettier setup, tailwinds and solid-js plugin
// TODO: update readme, solid blazing primitives

const App: Component = () => {
  return (
    <>
      <h1 class="m-2">muji prototypes</h1>
      <ProtoButtons />
    </>
  );
};

export default App;
