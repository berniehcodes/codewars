//Square every digit (7kyu)
function squareDigits(num){
    let str= num.toString().split('').map(x=> (Number(x)**2)).join('');
    return Number(str)
    //split, map, join
  }