// Disemvowel Trolls (7kyu)
function disemvowel(str) {
  
    return str.split('').filter(letter => (letter !=='a' && letter !=='e' && letter !=='i' && letter !=='o' && letter !=='u' &&letter !=='A' && letter !=='E' && letter !=='I' && letter !=='O' && letter !=='U' )).join('');
  }
  