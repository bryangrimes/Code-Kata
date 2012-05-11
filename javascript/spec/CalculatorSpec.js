describe("Add", function() {
  it("should return 0 for blank string", function(){
    expect(Add("")).toEqual(0);
  });
  it("should return number for single number", function(){
    expect(Add("1")).toEqual(1);
  });
  it("should sum two numbers", function(){
    expect(Add("1,2")).toEqual(3);
  });
  it("should sum any amount of numbers", function(){
    expect(Add("1,2,3")).toEqual(6);
  });
  it("should split on new line and commas", function(){
    expect(Add("1\n2,3")).toEqual(6);
  });
  it("should split with custom delimeter", function(){
    expect(Add(";\n1;2;3")).toEqual(6);
  });
});
