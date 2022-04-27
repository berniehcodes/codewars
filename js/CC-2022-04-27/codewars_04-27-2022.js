function reverseWords(str) {
 
    //transform string into an array of items where each word is an item
    //create an array of letters for each word
    //then reverse order and re-join to create the word
    //rejoin all the words into 1 string by combining at the space
   
   return str.split(' ').map((x,i) =>x.split('').reverse().join('')).join(' ')  
 }