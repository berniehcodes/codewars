function find_average(arr) {

    if (arr.length === 0){
        return 0
      } else{
        return (arr.reduce((acc,c) => acc + c, 0))/(arr.length)
      }
    }