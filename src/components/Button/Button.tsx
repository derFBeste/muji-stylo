import { Component, JSXElement } from "solid-js";
import styles from "./button.module.css";

type Variant = "primary" | "secondary" | "positive" | "negative" | "neutral";

interface ButtonProps {
  // sx or style?
  children: JSXElement;
  class?: string;
  variant?:
    | "primary"
    | "secondary"
    | "positive"
    | "negative"
    | "neutral"
    | "attention";
  type?: "outline" | "solid" | "tonal" | "elevated" | "plain" | "alt"; // defaults to solid
  others?: any;
  // ["primary"]?: boolean;

  // other possible types: floating action button, icon button, toggle button
  // these would probably be better as separate components
}

const TWButton: Component<ButtonProps> = (props) => {
  let classes =
    "py-2 px-4 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500";
  // let classes =
  // "py-2 px-4 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75";

  if (props.class) {
    classes += " " + props.class;
  }

  return <button class={classes}>{props.children}</button>;
};

const Button: Component<ButtonProps> = (props) => {
  let classes = styles.plain;

  if (props.class) {
    classes += " " + props.class;
  }

  // TODO: default to outlined? -yes, I think so
  // TODO: hover states
  // TODO: tonal, elevated
  // TODO: how to enumerate props on hover in vscode?
  // TODO: what should focus styles be: nothing? outline? ring?
  // TODO: are splitProps helpful at all?
  // TODO: change outline border type depending on variant?

  const buttonType = props.type || "outline";

  return (
    <button
      class={classes}
      classList={{
        [styles[buttonType]]: Boolean(buttonType),
        // [styles.tonal]: props.type === "tonal",
        // [styles.solid]: props.type === "solid" || !props.type,
        [styles.primary]: props.variant === "primary",
        // [styles.primaryBorder]: props.variant === "primary",
      }}
    >
      {props.children}
    </button>
  );
};

export const ProtoButtons: Component = () => {
  return (
    <div class="m-2">
      <h2>muij-ui:</h2>
      <div class="m-2 flex flex-row flex-wrap">
        <div class="mr-2 flex flex-col">
          <Button
            class="mb-1"
            type="outline"
          >
            outline
          </Button>
          <Button variant="primary">primary</Button>
        </div>
        <Button type="tonal">tonal</Button>
        <Button type="solid">solid</Button>
        <Button type="plain">plain</Button>
        <Button type="solid">button with long text</Button>
      </div>
      <div>
        <h2>TW prototypes:</h2>
        <div class="m-2 flex flex-row">
          <button>push me</button>
          <TWButton>push me</TWButton>
          <TWButton>button with long text</TWButton>
        </div>
      </div>
    </div>
  );
};

// Do color pairs like GH? https://primer.style/design/foundations/color
// They use a background and foreground color that compliment each other.
// GH: colors: https://primer.style/primitives/colors

// fonts: Segoe, SF Mono, Roboto
