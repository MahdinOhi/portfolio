import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Index from "@/pages/Index";

describe("Portfolio Liquid Glass Theme & Content Preservation", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "";
  });

  it("preserves all original sections in order and renders key portfolio content", () => {
    const { container } = render(<Index />);

    const sections = Array.from(container.querySelectorAll("section")).map(
      (sec) => sec.id
    );
    expect(sections).toEqual([
      "about",
      "skills",
      "projects",
      "publications",
      "contact",
    ]);

    expect(screen.getAllByText("Mahdin Ohi").length).toBeGreaterThan(0);
    expect(screen.getByText("RefMiner")).toBeInTheDocument();
    expect(screen.getByText("EduBase")).toBeInTheDocument();
    expect(screen.getByText("mahdinislamohi@gmail.com")).toBeInTheDocument();
  });

  it("renders replaceable light.svg and dark.svg background assets", () => {
    const { container } = render(<Index />);
    const lightBg = container.querySelector(
      'img.liquid-bg-svg-light[src="/backgrounds/light.svg"]'
    );
    const darkBg = container.querySelector(
      'img.liquid-bg-svg-dark[src="/backgrounds/dark.svg"]'
    );

    expect(lightBg).toBeInTheDocument();
    expect(darkBg).toBeInTheDocument();
  });

  it("switches between light and dark themes and persists preference in localStorage", () => {
    render(<Index />);

    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(window.localStorage.getItem("theme")).toBeNull();

    const toggleButtons = screen.getAllByRole("button", {
      name: /switch to dark mode/i,
    });
    fireEvent.click(toggleButtons[0]);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(window.localStorage.getItem("theme")).toBe("dark");

    const lightToggleButtons = screen.getAllByRole("button", {
      name: /switch to light mode/i,
    });
    fireEvent.click(lightToggleButtons[0]);

    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(window.localStorage.getItem("theme")).toBe("light");
  });
});
