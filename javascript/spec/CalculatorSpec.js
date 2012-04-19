describe("Add", function() {
  it("should return 0 for an empty string input", function() {
    expect("0").toReturnSum(0);
    });

  it("should return a number for an empty string", function() {
  	expect("").toReturnSum(0);
  });

  it("should add two numbers together", function() {
  	expect("2,3").toReturnSum(5);
  });

  it("should add more than two numbers together", function() {
  	expect("2,3,1").toReturnSum(6);
  });

  it("should return sum with commas and new lines", function(){
  	expect("1\n2,3").toReturnSum(6);
  });

});
