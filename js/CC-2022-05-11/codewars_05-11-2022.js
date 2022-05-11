//Odd or Even (7kyu)

function oddOrEven(array) {
    let sum = array.reduce((acc,num)=> acc+num, 0) 
    
    if ((sum % 2 == 0)||(sum == 0)) {
      return 'even'
    } else{
      return 'odd'
    }
  }