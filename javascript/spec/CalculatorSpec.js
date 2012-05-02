describe("Add", function() {
  it("empty input retusrns 0", function() {
    expect("").toReturnSum(0);
  });

  it("return single input back", function(){
    expect("1").toReturnSum(1);
  });

  it("sum of two numbers",function() {
    expect("1,2").toReturnSum(3);
  });

  it("sum any amount of numbers", function() {
    expect("2,4,6,8").toReturnSum(20);
    expect("1,2,3,4,5,6,7,8,9,10").toReturnSum(55);
  });

  it("sum, comma and new lines", function(){
    expect("1\n2,3").toReturnSum(6);
    expect("1\n2\n3").toReturnSum(6);
  });

  it("sum with custom delimeter", function() {
    expect("//@\n1@2@3").toReturnSum(6);
    expect("//X\n1X2X3").toReturnSum(6);
  });

  it("negative number error", function(){
    var num = "-1";
    expect(function() {Add(num);}).toThrow(new Error("negatives not allowed: -1"));
  });

  it("negative numbers are returned in error", function(){
    var num = "-1,-3";
    expect(function() {Add(num);}).toThrow(new Error("negatives not allowed: " + num));
  });

});