function SeriesSum(n) 
{
//n is like the index number, if the index started at 1
//Series = 1/(1+3*n)
  
  let s= 0
  for(let i=0; i<n; i++){
   s += (1/(1+i*3)) 
  }
  
  return s.toFixed(2) //2 decimal places
}