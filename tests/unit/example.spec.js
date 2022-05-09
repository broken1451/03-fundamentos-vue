describe("Example Component", () => {
  test("debe ser mayor a 10 ", () => {
    // arreglar
    let value = 10;

    // estimulo
    value = value + 2;

    // observar el resultado
    // if (value > 10) {
    // } else {
    //   throw `${value} no es mayor a 10`;
    // }
    expect(value).toBeGreaterThan(10);
  });
});
