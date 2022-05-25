// Your order, please (6kyu))
// Your task is to sort a given string. Each word in the string will contain a single number. 
//This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. 
//The words in the input String will only contain valid consecutive numbers.

//P: if empty string, return empty string. Input will be a string of letters and numbers with valid numbers, assume no repeated integers or floats. only integers. Assume no zeros
    //index = number contained in the 'words-1'
//R: sort the string of words by the order of the numbers that in the words are listed in 
//E: "" -> '', "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"; "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
//P: if words.length ==0, return "". 
    //1. Convert string of words to array using split
    //2. Create a new empty array
    //3. add word from 'words array' to the end of a new array if the number contained is greater than the last 
    //4. rejoin to create a string



function order(words){
    let arrOfWords = words.split(' ')
    let sortedArray = []
    for(i=0; i <= arrOfWords.length; i++){ //new array will contain the same number of words and therefore the same number of indices
        for (j=0; j < arrOfWords.length; j++){ 
            if(arrOfWords[j].indexOf(i) >= 0){ //checks if the number i occurs in the 'word' 
                sortedArray.push(arrOfWords[j]) //add word if it contains the number i and matches the position of the index in the new array
            }
        }
    }
    return sortedArray.join(' ')
  }

  console.log(order("is2 Thi1s T4est 3a"))
  //console.log(order("4of Fo1r pe6ople g3ood th5e the2"))