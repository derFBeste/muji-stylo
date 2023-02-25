import { render, screen } from "@solidjs/testing-library";
import { Button } from "./Button";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

describe("Button", () => {
  describe("Default", () => {
    beforeEach(() => {
      render(() => <Button onClick={() => {}}>Solid is rad!</Button>);
    });

    it("should have a role of button", () => {
      //expect(getByText("Solid is rad!")).toBeInstanceOf(HTMLButtonElement);
      expect(screen.getByRole("button")).toBeTruthy();
    });

    it("should have text", () => {
      expect(screen.getByText("Solid is rad!")).toBeInTheDocument();
    });

    it("should be enabled", () => {
      expect(screen.getByRole("button")).toBeEnabled();
    });
  });

  describe("Disabled", () => {
    it("should be disabled", () => {
      render(() => (
        <Button
          disabled
          onClick={() => {}}
        >
          press me
        </Button>
      ));
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });

  describe("Plain", () => {
    it("should be plain", () => {
      render(() => (
        <Button
          plain
          onClick={() => {}}
        >
          press me
        </Button>
      ));
      expect(screen.getByRole("button")).toHaveClass("plain");
    });

    // TODO: test variants?
  });

  describe("Tonal", () => {
    it("should be tonal and outlined", () => {
      render(() => (
        <Button
          tonal
          onClick={() => {}}
        >
          press me
        </Button>
      ));
      expect(screen.getByRole("button")).toHaveClass("tonal");
    });

    it("should be tonal and plain", () => {
      expect(true).toBeFalsy();
    });

    it("should be tonal, plain, and elevated", () => {
      expect(true).toBeFalsy();
    });

    it("should be tonal, plain, elevated, neutral", () => {
      expect(true).toBeFalsy();
    });
  });

  describe("Elevated", () => {
    it("should be elevated", () => {
      render(() => (
        <Button
          tonal
          onClick={() => {}}
        >
          press me
        </Button>
      ));
      expect(screen.getByRole("button")).toHaveClass("tonal");
    });
  });
});
