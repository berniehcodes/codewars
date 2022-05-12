//Shortest Word (7kyu)

function findShort(s){
    //return the length of each element
    //find the min and return that element
  
    let wordLengths = s.split(' ').map((x,i) => x.length).sort((a,b)=> a-b)
  
    return wordLengths[0]
  
  }