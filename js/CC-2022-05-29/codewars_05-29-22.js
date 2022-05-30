// Complementary DNA (7kyu)
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); 
// you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

//P: dna is a string, no null or undefined strings, assume that the values are always groupings of ATCG, assume all uppercase 
//R: return a string with the paired values 
//E: AATGC -> TTACG; GTAT -> CATA
//P: convert dna to string, use for loop and if statements

function DNAStrand(dna){
    let pair = dna.split('')
    for(let i=0; i < dna.length; i++){
        if(pair[i] =="A"){
            pair[i] = "T"
        }else if(pair[i] =="T"){
            pair[i] = "A"
        }else if(pair[i] =="G"){
            pair[i] = "C"
        }else if(pair[i] =="C"){
            pair[i] = "G"
        }
    }

    return pair.join('')
  }


  console.log(DNAStrand('AATCG'))