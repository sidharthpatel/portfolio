import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Education from "./Education";
import { education } from "../constants";

describe("Education", () => {
	it("renders school, degree, specialization and dates for every entry", () => {
		const { container } = render(<Education />);

		education.forEach((item) => {
			expect(screen.getByText(item.school)).toBeInTheDocument();
			expect(screen.getByText(item.degree)).toBeInTheDocument();
			expect(
				screen.getByText(`Specialization: ${item.specialization}`)
			).toBeInTheDocument();
			expect(screen.getByText(item.date)).toBeInTheDocument();
			item.coursework.forEach((course) => {
				expect(screen.getByText(course.name)).toBeInTheDocument();
				expect(screen.getByText(course.code)).toBeInTheDocument();
			});
		});

		expect(container.querySelector("#education")).toBeInTheDocument();
	});
});
