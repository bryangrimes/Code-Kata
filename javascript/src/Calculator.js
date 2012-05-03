function parse_input(input) {
	if (input === "") return 0;

	// get the delimeter out of the input
	var delimeter = new RegExp("//(.*)\n(.*)");
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
	var negatives = [];

	for (var i = nums.length - 1; i >= 0; i--){
		if(nums[i] < 0)
			negatives.push(nums[i]);
		
		if(nums[i] <= 1000)
			sum += parseInt(nums[i], 10);
	}

	if(negatives.length > 0){
		throw new Error("negatives not allowed: " + negatives.reverse().join());
	}

	return sum;
}