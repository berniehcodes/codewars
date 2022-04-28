//Beginner Series #2 clock (8kyu)
function past(h, m, s){
    let milli = (h *60*60000 + m*60000 +s*1000)
    return milli
  }