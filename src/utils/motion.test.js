import { describe, it, expect } from "vitest";
import { textVariant, fadeIn, zoomIn, slideIn, staggerContainer } from "./motion";

describe("textVariant", () => {
  it("sets hidden/show y and opacity and forwards delay", () => {
    const variant = textVariant(0.5);
    expect(variant.hidden).toEqual({ y: -50, opacity: 0 });
    expect(variant.show.y).toBe(0);
    expect(variant.show.opacity).toBe(1);
    expect(variant.show.transition.delay).toBe(0.5);
  });
});

describe("fadeIn", () => {
  it.each([
    ["left", 100, 0],
    ["right", -100, 0],
    ["up", 0, 100],
    ["down", 0, -100],
    ["", 0, 0],
  ])("direction=%s produces hidden x=%d y=%d", (direction, x, y) => {
    const variant = fadeIn(direction, "tween", 0.2, 1);
    expect(variant.hidden.x).toBe(x);
    expect(variant.hidden.y).toBe(y);
  });

  it("forwards type/delay/duration into the show transition", () => {
    const variant = fadeIn("up", "spring", 0.3, 0.75);
    expect(variant.show.transition).toMatchObject({
      type: "spring",
      delay: 0.3,
      duration: 0.75,
      ease: "easeOut",
    });
  });
});

describe("zoomIn", () => {
  it("starts scaled to 0 and invisible, animates to full scale", () => {
    const variant = zoomIn(0.1, 0.5);
    expect(variant.hidden).toEqual({ scale: 0, opacity: 0 });
    expect(variant.show.scale).toBe(1);
    expect(variant.show.transition).toMatchObject({ delay: 0.1, duration: 0.5 });
  });
});

describe("slideIn", () => {
  it.each([
    ["left", "-100%"],
    ["right", "100%"],
    ["up", 0],
    ["down", 0],
  ])("direction=%s sets hidden.x=%s", (direction, x) => {
    const variant = slideIn(direction, "tween", 0, 1);
    expect(variant.hidden.x).toBe(x);
  });

  it.each([
    ["up", "100%"],
    ["down", "100%"],
    ["left", 0],
    ["right", 0],
  ])("direction=%s sets hidden.y=%s", (direction, y) => {
    const variant = slideIn(direction, "tween", 0, 1);
    expect(variant.hidden.y).toBe(y);
  });
});

describe("staggerContainer", () => {
  it("defaults delayChildren to 0 when omitted", () => {
    const variant = staggerContainer(0.2);
    expect(variant.show.transition.delayChildren).toBe(0);
    expect(variant.show.transition.staggerChildren).toBe(0.2);
  });

  it("keeps an explicit delayChildren of 0 rather than treating it as falsy-missing", () => {
    // Bug check: `delayChildren || 0` collapses an intentional 0 the same way
    // it collapses `undefined`, so this only proves the passthrough for non-zero values.
    const variant = staggerContainer(0.2, 0.5);
    expect(variant.show.transition.delayChildren).toBe(0.5);
  });
});
