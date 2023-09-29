const mapArrToString = require("./mapArrToString");

describe("mapArrToString", () => {
  test("Корректное значенеи", () => {
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("Разные типы данных в массиве", () => {
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("Пустой массив", () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test("Отрицание", () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
