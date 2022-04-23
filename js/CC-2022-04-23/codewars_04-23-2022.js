function countSheeps(arrayOfSheep) {
    if(arrayOfSheep.length !==0){
      let count = arrayOfSheep.reduce((acc,x)=> x ==true? acc+1: acc+0)
      return count
    }
  }