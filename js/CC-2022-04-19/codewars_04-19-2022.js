function XO(str) {
    //loop through string and count number of x and o 
    //if no x's or o's return true
    
    let xCount = 0
    let oCount = 0
    
    for(let i=0; i<str.length; i++){
      if(str[i].toUpperCase() ==='X'){
        xCount +=1
      }else if(str[i].toUpperCase() === 'O'){
        oCount +=1
      }
     }
  
    if(xCount === oCount){
      return true
    }else if(xCount ===0 && oCount===0){
      return true
    } else{
      return false
    }
  }
  