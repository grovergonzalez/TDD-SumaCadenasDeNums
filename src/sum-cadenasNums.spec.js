describe("Sumar", () => {
  it("deberia devolver el valor 0", () => {
    expect(sumarCadenas("")).toEqual(0);
  });
  xit("deberia devolver la suma de 1", () => {
    expect(sumarCadenas("1")).toEqual(1);
  });
  xit("deberia devolver la suma de 1 y 2", () => {
    expect(sumarCadenas("1,2")).toEqual(3);
  });
  xit("deberia devolver la suma de 2 o mas valores", () => {
    expect(sumarCadenas("1,2,3,4,5")).toEqual(15);
  });
  xit("deberia devolver sumar 2 valores separados por guion", () => {
    expect(sumarCadenas("1-2")).toEqual(3);
  });
  xit("deberia devolver sumar mas de 2 valores por guion", () => {
    expect(sumarCadenas("1-2-3-4-5")).toEqual(15);
  });
  xit("deberia devolver sumar mas de 2 valores separado por guion o coma", () => {
    expect(sumarCadenas("1,2,3-4-5")).toEqual(15);
  });
  xit("deberia devolver suma de 2 valores separados por guion o coma o un delimitardor especial ", () => {
    expect(sumarCadenas("//[;] 6,3-2;1")).toEqual(12);
  });
});
