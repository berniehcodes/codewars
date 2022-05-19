//Take a Ten Minutes Walk (6kyu)


function isValidWalk(walk) {
    //return true if 10 directions AND returned to the original position
    //assign each element in the array number(n=1, s=-1, e=-2, w=2) using .map to create a new array
    //sum the numbers in the array
    //assume that the walk returns to orginal position if total of the numbers assigned is 0

    
    let numWalk = []
    numWalk = walk.map((x => x=='n'? -1: x=='s'? 1: x=='e'? 2: x=='w'? -2: 'invalid array'))
    let sum = numWalk.reduce((acc,c)=> acc+c,0)
    
    if((walk.length ==10) && sum==0){
        return true
    }else {
        return false
    }
  }
  
  isValidWalk(['n','s','e','w'])
  isValidWalk(['n','s','n','s','n','s','n','s','n','s']) //should return true
  isValidWalk(['n','n','n','s','n','s','n','s','n','s']) //should return false