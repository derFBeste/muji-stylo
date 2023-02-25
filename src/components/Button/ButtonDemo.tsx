import { Component } from "solid-js";
import { Button, TWButton } from "./Button";

export const ButtonDemo: Component = () => {
  function handleClick() {
    console.log("yo!");
  }

  return (
    <div class="m-2">
      <h2>buttons:</h2>
      <div class="m-2 flex flex-row flex-wrap gap-y-1">
        <div class="mr-2 flex flex-col gap-y-1">
          <Button onClick={handleClick}>outline</Button>
          <Button
            onClick={handleClick}
            variant="neutral"
          >
            neutral
          </Button>
          <Button
            onClick={handleClick}
            variant="primary"
          >
            primary
          </Button>
          <Button
            onClick={handleClick}
            variant="positive"
          >
            positive
          </Button>
          <Button
            onClick={handleClick}
            variant="attention"
          >
            attention
          </Button>
          <Button
            onClick={handleClick}
            variant="negative"
          >
            negative
          </Button>
        </div>
        <div class="mr-2 flex flex-col gap-y-1">
          <Button
            onClick={handleClick}
            plain
          >
            plain
          </Button>
          <Button
            plain
            variant="neutral"
            onClick={handleClick}
          >
            neutral
          </Button>
          <Button
            plain
            variant="primary"
            onClick={handleClick}
          >
            primary
          </Button>
          <Button
            plain
            variant="positive"
            onClick={handleClick}
          >
            positive
          </Button>
          <Button
            plain
            variant="attention"
            onClick={handleClick}
          >
            attention
          </Button>
          <Button
            plain
            variant="negative"
            onClick={handleClick}
          >
            negative
          </Button>
        </div>
        <div class="mr-2 flex flex-col gap-y-1">
          <Button
            onClick={handleClick}
            plain
          >
            tonal
          </Button>
        </div>
      </div>
      <h2>misc:</h2>
      <div>
        <Button onClick={handleClick}>button with long text</Button>
      </div>
      <h2>TW prototypes:</h2>
      <div>
        <div class="m-2 flex flex-row">
          <button>push me</button>
          <TWButton>push me</TWButton>
          <TWButton>button with long text</TWButton>
        </div>
      </div>
    </div>
  );
};
