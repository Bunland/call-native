import { m } from "../src/cpp/numbers/numbers";
import { describe, expect, test } from "bun:test";

describe("Testing m.sum function", () => {
  test("Adding 2 and 2 should return 4", () => {
    expect(m.sum(2, 2)).toBe(4);
  });

  test("Adding 0 and 0 should return 0", () => {
    expect(m.sum(0, 0)).toBe(0);
  });

  test("Adding a positive and a negative number should work", () => {
    expect(m.sum(5, -3)).toBe(2);
  });
});

describe("Testing m.subtract function", () => {
  test("Subtracting 2 from 5 should return 3", () => {
    expect(m.sub(5, 2)).toBe(3);
  });

  test("Subtracting a negative number from a positive number should work", () => {
    expect(m.sub(5, -3)).toBe(8);
  });

  test("Subtracting a larger number from a smaller number should return a negative result", () => {
    expect(m.sub(2, 5)).toBe(-3);
  });
});

describe("Testing m.multiply function", () => {
  test("Multiplying 2 by 3 should return 6", () => {
    expect(m.mul(2, 3)).toBe(6);
  });

  test("Multiplying by 0 should always return 0", () => {
    expect(m.mul(5, 0)).toBe(0);
  });

  test("Multiplying negative numbers should work correctly", () => {
    expect(m.mul(-4, 7)).toBe(-28);
  });
});

describe("Testing m.divide function", () => {
  test("Dividing 6 by 2 should return 3", () => {
    expect(m.divide(6, 2)).toBe(3);
  });

  test("Dividing 0 by any number should always return 0", () => {
    expect(m.divide(0, 5)).toBe(0);
  });

  test("Dividing a negative number by a positive number should work correctly", () => {
    expect(m.divide(-10, 2)).toBe(-5);
  });
});
