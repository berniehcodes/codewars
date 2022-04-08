function findNeedle(haystack) {
    //array name is haystack
      
    //haystack.foreach((x) => x =='needle'? return 'found the needle at position '+i : '' )
      let i=0;
      
      while (haystack[i]!=='needle'){
        i++
      }return 'found the needle at position '+i
    }