function parse_string(numbers) {

	if (numbers === "") return 0;

	// get the delimeter
	var delimeter = new RegExp("//(.)\n(.*)");
		//NOTE: assuming the new line is after the delimeter

	// match array
	var match = numbers.match(delimeter);
	var customSplitter = new RegExp(/[,|\n]/);

	if(match){
		var delim = match[1];
		numbers = match[2];
		customSplitter = new RegExp("[,|\n|" + delim + "]");
	}
	return numbers.split(customSplitter);
}

function Add(numbers){
	var nums = parse_string(numbers);
	var sum = 0;
	for (var i = nums.length - 1; i >= 0; i--){
		sum += parseInt(nums[i], 10);
	}
	return sum;
}
