function min(list){
    let sortedAsc = list.sort((a,b) => (a-b))
    return sortedAsc[0]
  }
  
  function max(list){
    let sortedDesc = list.sort((a,b) => (b-a))
    return sortedDesc[0]
  
  }
  