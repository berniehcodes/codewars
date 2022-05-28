// Convert a Number to a String!
// We need a function that can transform a number into a string.
// What ways of achieving this do you know?

//P: number value, no null values
//R: string 
//E: 123 -> "123", 999-> "999"
//P: toString(), `${}` string literal?

function numberToString(num) {
    return num.toString()
}

console.log(123)

//Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and 
// return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. return as a number and not a string

//P: non-negative integer in number format
//R: re-arranged digits in descending order
//E: 42145 -> 54421; 145263 -> 654321; 0->0
//P: convert number to string, split into array of numbers, sort array in descending order (b-a), rejoin to form new number

function descendingOrder(n){
    let arr = n.tostring().split('')
    let str = arr.sort((a,b) => (b-a)).join('')
    return Number(str)
}