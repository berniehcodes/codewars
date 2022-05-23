// 7 kyu Vowel Count
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.


//P: input string will only consist of lower case letters and/or spaces, no empty strings, do not need to convert?, what if multiple words?
//R: return the total number of vowels, or the number of characters which are a,e,i,o, or u.
//E: 'abracadabra' => 5
//P: convert to array using split, filter for vowels, return array length
function getCount(str) {
    let vowelsCount = 0;
    let arr = str.split('')
    let filteredArr = arr.filter(letter=> (letter=='a'|| letter=='e'|| letter=='i'||letter== 'o'||letter=='u'))
    vowelsCount = filteredArr.length
    console.log(filteredArr)
    
    return vowelsCount;
  }

  console.log(getCount("abracadabraeeeiiiooouuuu"))