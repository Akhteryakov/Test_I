const validateValue = require("./validateValue");

describe("validateValue", () => {
  test("Корректное значение", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("Верхнее граничное значение", () => {
    expect(validateValue(100)).toBe(true);
  });
  test("Нижнее граничное значение", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Меньше граничного", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("Больше граничного", () => {
    expect(validateValue(101)).toBe(false);
  });
});
