//Remove the minimum (7kyu)
function removeSmallest(numbers) {
    //math min to determine the smallest value
    //return the index of the smallest value
    //filter the lowest value out
   
    let lowest = Math.min(...numbers)
    let iLowest = numbers.indexOf(lowest)
    return numbers.filter((num,i) => i !== iLowest)
    
}