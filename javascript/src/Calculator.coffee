@Add = (input) ->
  return 0 if input is ""

  # see if there's a custom delimeter
  delimeter = input.split /(.*)\n(.*)/
  match = input.match(delimeter)
  
  nums = input.split /[,|\n]/
  return parseInt(nums[0],10) if nums.length == 1

  sum = nums.reduce (t,s) -> parseInt(t,10) + parseInt(s,10)
