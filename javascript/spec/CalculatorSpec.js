describe("Add", function() {
  it("should return 0 for an empty string input", function() {
    expect("").toReturnSum(0);
  });

  it("should return a single input back", function(){
    expect("1").toReturnSum(1);
  });

  it("",function() {
    expect("1,2").toReturnSum(3);
  });

});
