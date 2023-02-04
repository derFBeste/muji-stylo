import { Component, JSXElement } from "solid-js";

interface ButtonProps {
  children: JSXElement;
  class?: string;
  // style?: any;
  // variant: any;
  type?: "outline" | "solid" | "tonal" | "elevated";
  // other possible types: floating action button, icon button, toggle button
  // these would probably be better as separate components
}

const TWButton: Component<ButtonProps> = (props) => {
  let classes =
    "py-2 px-4 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500";

  //TODO: what should focus styles be: nothing? outline? ring?

  // let classes =
  // "py-2 px-4 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75";

  if (props.class) {
    classes += " " + props.class;
  }

  return <button class={classes}>{props.children}</button>;
};

const Button: Component<ButtonProps> = (props) => {
  return <button class="">{props.children}</button>;
};

export const ProtoButtons: Component = () => {
  return (
    <div>
      <div class="m-2 flex flex-row">
        <Button>push me</Button>
        <TWButton class="m-2">push me</TWButton>
        <TWButton>push me</TWButton>
      </div>
    </div>
  );
};
