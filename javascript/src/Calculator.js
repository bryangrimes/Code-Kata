function parse_input(input) {
	if (input === "") return 0;

	// get the delimeter out of the input
	var delimeter = new RegExp("//(.)\n(.*)");
	var splitter = new RegExp(/[,|\n]/);

	var match = input.match(delimeter);  // is there a custom delim in the string?

	if(match){
		delimeter = match[1];
		input = match[2];
		// set splitter back
		splitter = new RegExp("[,|\n|" + delimeter + "]");
	}
	return input.split(splitter);
}

function Add(input) {
	var nums = parse_input(input);
	var sum = 0;
	for (var i = nums.length - 1; i >= 0; i--){
		// negatives can't go on....
		if(nums[i] < 0)
			//throw {name : "NotImplementedError", message : "negatives not allowed"};
			throw new Error("negatives not allowed: " + nums[i]);

		sum += parseInt(nums[i], 10);
	}
	return sum;
}