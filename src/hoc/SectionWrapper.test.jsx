import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import SectionWrapper from "./SectionWrapper";

describe("SectionWrapper", () => {
  it("renders the wrapped component and an anchor span with the given id", () => {
    const Inner = () => <p>Inner content</p>;
    const Wrapped = SectionWrapper(Inner, "some-section");

    const { container } = render(<Wrapped />);

    expect(container.querySelector("#some-section")).toBeInTheDocument();
    expect(container.textContent).toContain("Inner content");
  });

  it("still renders when idName is an empty string (Feedbacks passes '')", () => {
    const Inner = () => <p>Feedback content</p>;
    const Wrapped = SectionWrapper(Inner, "");

    const { container } = render(<Wrapped />);
    const span = container.querySelector("span.hash-span");
    expect(span).toBeInTheDocument();
    expect(span.id).toBe("");
  });
});
