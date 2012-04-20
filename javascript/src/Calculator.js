function parse_input(input) {
	if (input === "") return 0;

	// get the delimeter out of the input
	var delimeter = new RegExp("//(.)\n(.*)");
	var splitter = new RegExp(/[,|\n]/);

	// see if anything matches the delimeter created
	var match = input.match(delimeter);

	if(match){
		// ok, so there's a custom delimeter, split on it and return the sum
		delimeter = match[1];
		// reset the inpur sans custom splitter
		input = match[2];
		// reset the splitter
		splitter = new RegExp("[,|\n|" + delimeter + "]");
	}
	return input.split(splitter);
}

function Add(input) {
	var nums = parse_input(input);
	var sum = 0;
	for (var i = nums.length - 1; i >= 0; i--){
		sum += parseInt(nums[i], 10);
	}
	return sum;
}
