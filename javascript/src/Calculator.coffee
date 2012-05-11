@Add = (input) ->
  nums = parse_input(input)
  sum = 0
  negatives = []
  i = nums.length - 1

  while i >= 0
    negatives.push nums[i]  if nums[i] < 0
    sum += parseInt(nums[i], 10)  if nums[i] <= 1000
    i--

  throw new Error("negatives not allowed: " + negatives.reverse().join())  if negatives.length > 0
  
  sum # implicit return

# return splitted array
parse_input = (input) ->
  return 0  if input is ""

  delimeter = new RegExp("//(.*)\n(.*)")
  splitter = new RegExp(/[,|\n]/)
  
  match = input.match(delimeter)

  if match
    delimeter = match[1]
    input = match[2]
    splitter = new RegExp("[,|\n|" + delimeter + "]")

  input.split splitter # implicit return
