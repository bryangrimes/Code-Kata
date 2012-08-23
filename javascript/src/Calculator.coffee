@Add = (input) ->
  return 0  if input is ""
  
  # get the delimeter out of the input
  delimeter = new RegExp("//(.*)\n(.*)")
  splitter = new RegExp(/[,|\n]/)
  match = input.match(delimeter) # is there a custom delim in the string?
  if match
    delimeter = match[1]
    input = match[2]
    
    # set splitter back
    splitter = new RegExp("[,|\n|" + delimeter + "]")
  nums = input.split(splitter)
  sum = 0
  negatives = []
  i = nums.length - 1

  while i >= 0
    negatives.push nums[i]  if nums[i] < 0
    sum += parseInt(nums[i], 10)  if nums[i] <= 1000
    i--
  
  #sum = nums.reduce (t,s) -> parseInt(t,10) + parseInt(s,10)
  
  # error check
  throw new Error("negatives not allowed: " + negatives.reverse().join())  if negatives.length > 0

  sum #return