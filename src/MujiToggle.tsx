import React, { useState } from "react";
import remove from "../../../assets/icons/remove-24px.svg";
import add from "../../../assets/icons/add-24px.svg";

interface Props {
  /** Handles toggle event */
  onToggle: (input: boolean) => void;
  /**
   * Sets default expanded state
   * @default false
   * */
  isExpanded?: boolean;
}

/**
 * Toggles an icon and fires an event on click.
 * @param {Props} props
 * @returns JSX.Element
 */

export default function MujiToggle(props: Props): JSX.Element {
  const [expand, setExpand] = useState(props.isExpanded);

  function handleToggle(input: boolean) {
    props.onToggle(input);
  }

  if (expand) {
    return (
      <img
        className="pointer"
        src={add}
        alt="open"
        onClick={() => {
          setExpand(false);
          handleToggle(false);
        }}
      />
    );
  }

  return (
    <img
      className="pointer"
      src={remove}
      alt="close"
      onClick={() => {
        setExpand(true);
        handleToggle(true);
      }}
    />
  );
}

MujiToggle.defaultProps = { isExpanded: false };
