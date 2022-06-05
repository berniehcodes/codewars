// Function 1 - hello world (8kyu)

// Description:
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the 
// most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

//P: no parameters input, function name is 'greet'
//R: "hello world!" string
//E: "hello world!"
//P: create a function name 'greet', return string

function greet(){
    return "hello world!"
}


// Two Sum (6kyu)
// Write a function that takes an array of numbers (integers for the tests) and a target number. 
// It should find two different items in the array that, when added together, give the target value. 
// The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; 
// target will always be the sum of two different items from that array).


//P: numbers are integers, target number is an integer. Target can be a combination of multiple pairings, only need to return 1. target will always be a sum of two different arrays
//R: array containing the indices of the two integers which sum up to the target number
//E: ([1,2,3],4) returns [0,2]; ([1234,5678,9012],14690) returns [1,2]
//P: declare a new array for the returned indices. create a for loop which tests each element with (target - element) == another element in the array 
// if yes, return the index to the new array, otherwise go to the next element and repeat the loop
// cannot be the same index doubled, must test where the index i does not equal index j

function twoSum(numbers, target) {
    let indices = [0,1]
    
    for(let i=0; i< numbers.length; i++){  
        for(let j=0; j <numbers.length; j++){
            if(i !==j ){
                if((target - numbers[i]) == numbers[j]){
                    if (indices.length <= 2){
                        indices.splice(0,1,i)
                        indices.splice(1,1,j)
                        console.log(i,j)
                    }
                }
            }

        }
        
    }

    return indices
  }

 console.log(twoSum([1,2,3], 4))
 console.log(twoSum([1234,5678,9012], 14690))

