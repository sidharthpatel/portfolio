import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Experience from "./Experience";
import { experiences } from "../constants";

describe("Experience", () => {
  it("renders a timeline card for every experience entry", () => {
    render(<Experience />);
    experiences.forEach((exp) => {
      expect(screen.getByText(exp.title)).toBeInTheDocument();
    });
  });

  it("opens a modal with the experience's bullet points when a card is clicked", () => {
    render(<Experience />);
    const [first] = experiences;

    fireEvent.click(screen.getByText(first.title));

    expect(screen.getByText("Key Responsibilities:")).toBeInTheDocument();
    expect(screen.getByText(first.points[0])).toBeInTheDocument();
  });

  it("closes the modal via the close button", () => {
    render(<Experience />);
    const [first] = experiences;

    fireEvent.click(screen.getByText(first.title));
    expect(screen.getByText("Key Responsibilities:")).toBeInTheDocument();

    fireEvent.click(screen.getByText("×"));
    expect(screen.queryByText("Key Responsibilities:")).not.toBeInTheDocument();
  });

  it("BUG: a 'skills' list on an experience silently fails to render (comma operator discards the JSX)", () => {
    // ExperienceModal has:
    //   selectedExperience.skills && ((<div>...</div>), document.getElementById("modal-root"))
    // The comma operator evaluates to its *last* operand, so the JSX for the
    // "Technologies Used" block is built and thrown away every time — the
    // component actually renders `document.getElementById("modal-root")`,
    // and there is no element with that id anywhere in the app, so this is
    // always `null` and the skills section never appears, no matter what
    // `experience.skills` contains.
    const experienceWithSkills = {
      title: "Test Role",
      company_name: "Test Co",
      icon: experiences[0].icon,
      iconBg: "#000000",
      date: "2020",
      points: ["Did a thing"],
      skills: ["React", "Node.js"],
    };

    // None of the production experiences define `skills`, which means this
    // code path has never actually been exercised in the deployed app.
    experiences.forEach((exp) => {
      expect(exp.skills).toBeUndefined();
    });

    // Directly demonstrate the comma-operator bug in isolation.
    const skills = experienceWithSkills.skills;
    const rendered =
      skills &&
      ((<div>Technologies Used</div>), document.getElementById("modal-root"));

    expect(rendered).toBeNull(); // the intended <div> is discarded
  });
});
