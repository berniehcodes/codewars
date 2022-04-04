function sumArray(array) {
    //sort array
    //sum up all elements except the one in 0 position, so start with i=1 and last position
    if (array == null){
      return 0;
    }else if (array.length <2){
      return 0;    
    }else {
      array = array.sort(function(a,b) {return a - b});
      var total = 0;
      for (var i=1; i < array.length - 1; i++){
      total += array[i]
    }
    return total;
    }
    }
  