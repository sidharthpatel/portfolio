import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Works from "./Works";
import { projects } from "../constants";

describe("Works", () => {
  it("renders a card for every project with its name and github link", () => {
    render(<Works />);
    projects.forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    });

    const githubIcons = screen.getAllByAltText("source code");
    expect(githubIcons.length).toBe(projects.length);
  });

  it("BUG: copy promises 'live demos' but no project entry has a demo link/button", () => {
    // The intro paragraph says projects link to "code repositories and live
    // demos", but `constants/index.js` only defines `source_code_link` for
    // every project, and ProjectCard only ever renders the github icon.
    render(<Works />);
    expect(
      screen.getByText(/links to code repositories and live demos/i)
    ).toBeInTheDocument();

    projects.forEach((project) => {
      expect(project.live_demo_link ?? project.demo_link).toBeUndefined();
    });
    expect(screen.queryAllByText(/live demo/i).length).toBe(1); // only the intro sentence
  });
});
