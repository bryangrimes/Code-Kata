function Add(numbers) {

	if (numbers == "") return 0;

	var nums = numbers.split(/[,|\n]/);
	var sum = 0;

	for (var i = nums.length - 1; i >= 0; i--){
		sum += parseInt(nums[i], 10);
	}
	
	return sum;
}
