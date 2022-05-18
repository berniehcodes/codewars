//Abbreviate a two word name (8kyu)
function abbrevName(name){
    //convert string to uppercase
    //convert to array
    // return first letter of each element
    //join with . between
  
   let initials = name.toUpperCase().split(' ')
   return (initials[0][0]+'.'+initials[1][0])
}