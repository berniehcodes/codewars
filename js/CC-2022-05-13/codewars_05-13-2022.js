//opposites attract (8kyu)

function lovefunc(flower1, flower2){
    // assume that the inputs are integers
    if((flower1 % 2 == 0 && flower2 % 2 !== 0)|| (flower1 % 2 !== 0 && flower2 % 2 == 0)){
      return true
    }else{
      return false
    }
  }