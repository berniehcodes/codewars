//Find the stray number (7kyu)
function stray(numbers) {
    let sorted= numbers.sort((a,b)=>(a-b))
    
    if (sorted[0]!==sorted[1]){
      return sorted[0]
    } else{
      return sorted.pop()
    }
  }