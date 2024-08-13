import { render, screen } from "@testing-library/react";
import IncreaseDecreaseInput from "./IncreaseDecreaseInput";
import { describe, it, expect } from "vitest";
import { useState } from "react";

const TestComponent = () => {
  const [qty, setQty] = useState(1);
  return <IncreaseDecreaseInput number={qty} setNumber={setQty} />;
};

describe("IncreaseDecreaseInput", () => {
  it("renders two buttons", () => {
    render(<TestComponent />);
    expect(screen.getAllByRole("button").length).toBe(2);
  });

  it("renders input correctly", () => {
    render(<TestComponent />);
    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("1");
  });
});