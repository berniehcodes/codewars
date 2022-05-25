// Even or Odd (8kyu)
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//P: assume that the parameter inputs are all numbers and not strings, not a value? 
//R: string "Even" if the number is even, "Odd" if the number is odd
//E: 2 => Even, 7=> Odd 
//P: If modulus2 = 0, then return Even, if not, then odd 

function even_or_odd(number) {
  return ((number%2 == 0)? "Even" : "Odd")
}

console.log(even_or_odd(2))
console.log(even_or_odd(7))
