function rentalCarCost(d) {
    if (d === 2 || d===1){
      return d * 40
    }else if (d >= 7){
      return d * 40 - 50
    }else 
      return d * 40 - 20
  }