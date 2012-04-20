describe("Add", function() {
  it("should return 0 for an empty string input", function() {
    expect("").toReturnSum(0);
  });

  it("should return a single input back", function(){
    expect("1").toReturnSum(1);
  });

  it("should return sum of two numbers",function() {
    expect("1,2").toReturnSum(3);
  });

  it("should return sum of N amount of numbers", function() {
    expect("2,4,6,8,10").toReturnSum(30);
  });

  it("should return sum with new lines and as delimeter as well", function(){
    expect("2\n4,5").toReturnSum(11);
  });

});
