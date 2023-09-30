const square = require("./square");

describe("square", () => {
  let mockValue;
  beforeEach(() => {}); // вызовет коллбек перед каждым тестом
  beforeAll(() => {}); // один раз перед всеми тестами

  // test("Один тест с несколькими проверками", () => {
  //   expect(square(2)).toBe(4);
  //   expect(square(2)).toBeLessThan(5);
  //   expect(square(2)).toBeGreaterThan(3);
  //   expect(square(2)).not.toBeUndefined();
  // });

  test("Передано значение больше 1 - вызовет функцию 1 раз", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test("Передано значение 1 - не вызовет функцию", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);

    expect(spyMathPow).toBeCalledTimes(0);
  });

  afterEach(() => {
    jest.clearAllMocks(); // что бы не накапливались вызовы очищает моки после каждого теста
  });
  afterAll(() => {});
});
