import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { navLinks } from "../constants";

const renderNavbar = () =>
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

describe("Navbar", () => {
  it("renders every nav link from constants, twice (desktop + mobile menu)", () => {
    renderNavbar();
    navLinks.forEach((nav) => {
      const links = screen.getAllByRole("link", { name: nav.title });
      expect(links.length).toBe(2);
      links.forEach((link) => expect(link).toHaveAttribute("href", `#${nav.id}`));
    });
  });

  it("toggles the mobile menu open/closed when the menu icon is clicked", () => {
    renderNavbar();
    const menuIcon = screen.getByAltText("menu");

    // Menu list is present but hidden before the first click.
    const mobileMenu = menuIcon.parentElement.querySelector("div");
    expect(mobileMenu.className).toMatch(/hidden/);

    fireEvent.click(menuIcon);
    expect(mobileMenu.className).toMatch(/flex/);

    fireEvent.click(menuIcon);
    expect(mobileMenu.className).toMatch(/hidden/);
  });

  it("marks a link active on click", () => {
    renderNavbar();
    const [aboutDesktopLink] = screen.getAllByRole("link", { name: "About" });
    fireEvent.click(aboutDesktopLink);
    expect(aboutDesktopLink.closest("li")).toHaveClass("text-white");
  });

  it("BUG: tracks a `scrolled` state that is never applied to any element", () => {
    // Navbar sets `scrolled` via a scroll listener but nothing in the JSX
    // reads it, so scrolling never visibly changes the navbar (dead state).
    // eslint also flags `scrolled` as an unused variable.
    renderNavbar();
    const nav = document.querySelector("nav");
    const classesBeforeScroll = nav.className;

    Object.defineProperty(window, "scrollY", { value: 500, configurable: true });
    fireEvent.scroll(window);

    expect(nav.className).toBe(classesBeforeScroll);
  });
});
