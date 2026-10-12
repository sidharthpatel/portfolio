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

  it("renders a live demo link only for projects that define one", () => {
    render(<Works />);

    const withDemo = projects.filter((project) => project.live_demo_link);
    expect(withDemo.length).toBeGreaterThan(0);

    const demoLinks = screen.getAllByRole("link", { name: /live demo/i });
    expect(demoLinks.length).toBe(withDemo.length);

    withDemo.forEach((project) => {
      const link = screen.getByRole("link", {
        name: `${project.name} live demo`,
      });
      expect(link).toHaveAttribute("href", project.live_demo_link);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    });
  });

  it("every project has an image, description, and at least one tag", () => {
    projects.forEach((project) => {
      expect(project.image).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
    });
  });
});
