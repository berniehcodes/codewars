//Beginner Series #4 Cockroach

//The cockroach is one of the fastest insects. 
//Write a function which takes its speed in km per hour and 
//returns it in cm per second, rounded down to the integer (= floored).

//P: input speed in km/hr, assume no negatives or undefinted values, accept floats and decimals. 
//R: return the speed in km/hr rounded down to the nearest integer using floor
//E: 1.08km/hr >> 30 cm/s
//P: take in variable 's', multiply by 1000m/km*100cm/1m*1hr/60mins*min/60s, then round using Math.floor(s)

function cockroachSpeed(s) {
    return Math.floor(s*1000*100/(60*60))
  }


//Keep Hydrated! 
//Nathan loves cycling.
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

//P: time is given in hours and it can be a float value, assume no negative
//R: rounded to the smalled value >> Math.floor() to round to the nearest integer,
//E: 3h >> 1 L; 6.7h >> 3L; 11.8h>> 5L
//P: take in variable, multiply by rate of 0.5L/h, math.floor the result

function litres(time) {
    let hydrateRate = 0.5
    return Math.floor(time*hydrateRate);
}