//Break camelCase (6kyu)

//Complete the solution so that the function will break up camel casing, using a space between words.

// complete the function

//P: string in camelCase format, no spaces
//R: string with spaces before every uppercase letter
//E: "camelCasing" -> "camel Case"; "identifier" -> identifier; "camelCasingTest" -> camel Casing Test
//P: create a duplicate of 'string' and convert to uppercase. Compare each character in string and the duplicate to determine if the character is an uppercase. 
// if uppercase letter is true, add in a space and the character. otherwise push the character 

function solution(string) {
    let caps = string.toUpperCase()
    let stringSpaced =[]

    for(let i=0; i<string.length; i++){
        if(string[i] === caps[i]){
            stringSpaced.push(' '+string[i])
        } else{
            stringSpaced.push(string[i]) 
        }
    }

    return stringSpaced.join('')
}

console.log(solution("camelCaseTest"))