const validateValue = require("./validateValue");

test("валидация зачения", () => {
  expect(validateValue(49)).toBe(true);
});
