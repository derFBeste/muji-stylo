import { Component, JSXElement } from "solid-js";
import styles from "./button.module.css";

type Variant = "primary" | "secondary" | "positive" | "negative" | "neutral";

interface Button {
  // TODO: sx or style?
  children: JSXElement;
  onClick: () => void;
  class?: string;
  variant?:
    | "attention"
    | "info"
    | "negative"
    | "neutral"
    | "positive"
    | "primary"
    | "secondary";
  // type defaults to outline
  type?: "outline" | "tonal" | "elevated" | "plain" | "alt";
  disabled?: boolean;

  // other possible types: floating action button, icon button, toggle button
  // these would probably be better as separate components
}

export const Button: Component<Button> = (props) => {
  let classes = styles.plain;

  if (props.class) {
    classes += " " + props.class;
  }

  const buttonType = props.type || "outline";
  const buttonVariant = props.variant;

  return (
    <button
      disabled={props.disabled}
      class={classes}
      classList={{
        [styles[buttonType]]: Boolean(buttonType),
        // [styles.tonal]: props.type === "tonal",
        // [styles.solid]: props.type === "solid" || !props.type,
        [styles[buttonVariant]]: Boolean(buttonVariant),
        // [styles.primaryBorder]: props.variant === "primary",
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

// Do color pairs like GH? https://primer.style/design/foundations/color
// They use a background and foreground color that compliment each other.
// GH: colors: https://primer.style/primitives/colors

// fonts: Segoe, SF Mono, Roboto

// requirements:
// TODO: tonal as a boolean prop
// TODO: hover states
// TODO: tonal, elevated
// TODO: allow user to set their type of default button?

// questions:
// TODO: need alt and secondary? Let user set their own?
// TODO: secondary inversion of primary? Darker version?
// TODO: plain or outline as default?
// TODO: switch variant and type?
// TODO: how to enumerate props on hover in vscode?
// TODO: what should focus styles be: nothing? outline? ring?
// TODO: are splitProps helpful at all?

// solid has white font, tonal has complementary color font
// or should tonal be a variant?
// types are for desing of button variant for color

// TODO: change outline border type and font color depending on variant

export const TWButton: Component<Button> = (props) => {
  let classes =
    "py-2 px-4 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500";
  // let classes =
  // "py-2 px-4 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75";

  if (props.class) {
    classes += " " + props.class;
  }

  return <button class={classes}>{props.children}</button>;
};
