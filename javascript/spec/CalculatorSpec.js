describe("Add", function() {
	it("should return blank for an empty input", function(){
		expect("").toReturnSum(0);
	});
	it("should return input for no blank input", function(){
		expect("1").toReturnSum(1);
	});
});
