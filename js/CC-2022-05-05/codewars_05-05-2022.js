
//Friend or Foe? (7kyu)
function friend(friends){
    //friends is an array of strings
    //friends only have names with str.length == 4
    
    return friends.filter((name)=> name.length == 4)
  }