//Sum of two lowest positive integers (7kyu)
function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b)=> a-b)
    return (numbers[0] +numbers[1])
  }