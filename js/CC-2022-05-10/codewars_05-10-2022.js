//Remove exclamation marks (8kyu)
function removeExclamationMarks(s) {
    return s.split('').filter(x=> x!== '!').join('');
  }