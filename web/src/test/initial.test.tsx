import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

function HelloTest({ name }: { name: string }) {
  return <div>Hello {name}</div>;
}

describe("Frontend Test Harness", () => {
  it("renders a component correctly", () => {
    render(<HelloTest name="Product Engineer" />);
    expect(screen.getByText("Hello Product Engineer")).toBeInTheDocument();
  });
});
