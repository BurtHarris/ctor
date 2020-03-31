import CTOR from "..";

describe("Jest", () => {
  it("should be installed", () => {
    expect(jest).toBeDefined();
  });
});

describe("CTOR", () => {
  it("should be defined", () => {
    expect(CTOR).toBeDefined();
  });

  it("should support stringify", () => {
    expect(typeof CTOR.stringify).toBe("function");
  });
});
