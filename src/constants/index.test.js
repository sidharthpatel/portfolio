import { describe, it, expect } from "vitest";
import { navLinks, projects, experiences, technologies } from "./index";

describe("navLinks", () => {
  it("has unique, non-empty ids and titles", () => {
    const ids = navLinks.map((n) => n.id);
    expect(new Set(ids).size).toBe(ids.length);
    navLinks.forEach((n) => {
      expect(n.id).toBeTruthy();
      expect(n.title).toBeTruthy();
    });
  });
});

describe("projects", () => {
  it("every project has a name, description, image, and a working source_code_link", () => {
    projects.forEach((project) => {
      expect(project.name).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.image).toBeTruthy();
      expect(project.source_code_link).toMatch(/^https?:\/\//);
      expect(Array.isArray(project.tags)).toBe(true);
      expect(project.tags.length).toBeGreaterThan(0);
    });
  });

  it("every tag has a name and a color class", () => {
    projects.forEach((project) => {
      project.tags.forEach((tag) => {
        expect(tag.name).toBeTruthy();
        expect(tag.color).toBeTruthy();
      });
    });
  });
});

describe("experiences", () => {
  it("every entry has title, company_name, date, and at least one point", () => {
    experiences.forEach((exp) => {
      expect(exp.title).toBeTruthy();
      expect(exp.company_name).toBeTruthy();
      expect(exp.date).toBeTruthy();
      expect(Array.isArray(exp.points)).toBe(true);
      expect(exp.points.length).toBeGreaterThan(0);
    });
  });

  it("dates roughly follow 'Mon YYYY - Mon YYYY|Present' so the timeline sorts/reads correctly", () => {
    experiences.forEach((exp) => {
      expect(exp.date).toMatch(
        /^[A-Z][a-z]{2} \d{4} - (Present|[A-Z][a-z]{2} \d{4})$/
      );
    });
  });
});

describe("technologies", () => {
  it("has no duplicate names (they're used as React keys in Tech.jsx)", () => {
    const names = technologies.map((t) => t.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
