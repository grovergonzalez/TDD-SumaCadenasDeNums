import SumCadenasDeNums from "./sum-cadenasNums";

describe("Sumar", () => {
  it("deberia devolver el valor 0", () => {
    expect(SumCadenasDeNums("")).toEqual(0);
  });
  it("deberia devolver la suma de 1", () => {
    expect(SumCadenasDeNums("1")).toEqual(1);
  });
  it("deberia devolver la suma de 1 y 2", () => {
    expect(SumCadenasDeNums("1,2")).toEqual(3);
  });
  it("deberia devolver la suma de 2 o mas valores", () => {
    expect(SumCadenasDeNums("1,2,3,4,5")).toEqual(15);
  });
  it("deberia devolver sumar 2 valores separados por guion", () => {
    expect(SumCadenasDeNums("1-2")).toEqual(3);
  });
  it("deberia devolver sumar mas de 2 valores por guion", () => {
    expect(SumCadenasDeNums("1-2-3-4-5")).toEqual(15);
  });
  it("deberia devolver sumar mas de 2 valores separado por guion o coma", () => {
    expect(SumCadenasDeNums("1,2,3-4-5")).toEqual(15);
  });
  it("deberia devolver suma de 2 valores separados por guion o coma o un delimitardor especial ", () => {
    expect(SumCadenasDeNums("//[;] 6,3-2;1")).toEqual(12);
  });
});
