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

  it("should return sum with commas and new lines", function(){
    expect("1\n2,3").toReturnSum(6);
    expect("1\n2\n3").toReturnSum(6);
  });

  it("should return sum with custom delimeter", function() {
    expect("//@\n1@2@3").toReturnSum(6);
    expect("//A\n1A2A3").toReturnSum(6);
  });

  it("should throw error with single negative number", function(){
    expect("-1").toReturnSum(0);
  });

});
