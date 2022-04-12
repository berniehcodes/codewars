function doubleChar(str) {
    //create new variable string called 'word'
      
      
      let word =''
      
      for(let i=0; i<str.length; i++){
        word += str[i] + str[i]
      }
      
      return word
      console.log(word)
    
    }