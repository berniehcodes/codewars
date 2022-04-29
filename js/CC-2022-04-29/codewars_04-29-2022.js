//Get middle character (7kyu)

function getMiddle(s)
{
  //return the total number of characters divided by 2
  //if even, return the middle 2 characters
  //if odd, return the middle 1 character
  
  if(s.length%2 ==0){
    return s[(s.length-2)/2]+s[s.length/2]
  }else{
    return s[(s.length-1)/2]
  }
}