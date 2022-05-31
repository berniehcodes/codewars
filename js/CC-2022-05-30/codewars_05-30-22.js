// Build Tower (6kyu)
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:

//P: input is an integer, assume no null/undefined values or floats
//R: return an array with the same number of elements as nfloors. Each element is (nFloors*2/3-1/3) number asterix 
//E: nFloors = 3[
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
//P: use repeat function to build each floor. The number of stars is 2*nFloors-1 for each floor, the number of spaces is nFloor-1 on either side of the stars. Push to add on to the tower array


function towerBuilder(nFloors) {
    let tower = []
    let star,space = []

    for(i = 1; i <= nFloors; i++){
        star = "*".repeat((2*i)-1)
        space = " ".repeat(nFloors- i)
        tower.push(`${space}${star}${space}`)
    }
    return tower
  }

  console.log(towerBuilder(3))