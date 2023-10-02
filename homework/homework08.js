//Task 1
// Requirement:
// Write a function named hasLowerCase() which takes a string argument and returns true if there is a lowercase letter and false if it there isn’t. 
// Examples:
// hasLowerCase("") 		-> false
// hasLowerCase("JAVASCRIPT") 	-> false
// hasLowerCase("hello") 		-> true
// hasLowerCase("125$") 		-> false
// hasLowerCase("   a   ") 		-> true
const hasLowerCase = (string) => string.split("").some(char => char >= 'a' && char<= 'z');
console.log(hasLowerCase(""));
console.log(hasLowerCase("JAVASCRIPT"));
console.log(hasLowerCase("hello"));
console.log(hasLowerCase("125$"));
console.log(hasLowerCase("   a   "));

//Task 2
// Requirement:
// Write a function named noZero() which takes an array of numbers as argument and returns the array back with all zeros removed.
// Examples:
// noZero([1]) 		-> [1]
// noZero( [1, 1, 10]​) 	-> [1, 1, 10]​
// noZero([0, 1, 10]) 	-> [1, 10]
// noZero([0, 0, 0]) 	-> []
// noZero([10, 100 0]) 	-> [10, 100]
const noZero = (array) => array.filter(x => x !== 0 ? x : "");
console.log(noZero([1, 1, 10]));
console.log(noZero([0, 1, 10]));
console.log(noZero([0, 0, 0]));
console.log(noZero([1]));
console.log(noZero([10, 100, 0]));
// Task 3
// Requirement:
// Write a function named numberAndSquare() which takes an array of numbers as argument and returns a multidimensional array with all numbers squared. 
// Examples:
// numberAndSquare([1, 2, 3]) 	-> [[1, 1], [2, 4], [3, 9]]
// numberAndSquare([0, 3, -6]) 	-> [[0, 0], [3, 9], [-6, 36]]
// numberAndSquare([1, 4]) 	-> [[1,1], [4, 16]]
// numberAndSquare([0, 0, 0]) 	-> [[0, 0], [0, 0], [0, 0]]
// numberAndSquare([0, 1, -10]) 	-> [[0, 0], [1, 1], [-10, 100]]
const numberAndSquare = (array) => array.map(x => [x, x * x]);
console.log(numberAndSquare([1, 2, 3]))
console.log(numberAndSquare([0, 3, -6]))
console.log(numberAndSquare([1, 4]))
console.log(numberAndSquare([0, 1, -10]))
console.log(numberAndSquare([0, 0, 0]))
// Task 4
// Requirement:
// Write a function named containsValue() which takes a string array and a string as arguments
//  and returns a boolean value. Search the string variable inside of the array and return true if 
// it exists in the array. If it doesn’t exist, return false. ​
// NOTE: Assume that array size is at least 1.​
// NOTE: The method is case-sensitive.
// Examples:
// containsValue(["abc", "foo", "javascript"], "hello") 			-> false
// containsValue(["abc", "def", "123"], "Abc") 			-> false
// containsValue(["abc", "def", "123", "Javascript", "Hello"], "123") 	-> true
function containsValue(array, string) {
    return array.includes(string);
}
console.log(containsValue(["abc", "foo", "javascript"], "hello"));
console.log(containsValue(["abc", "def", "123"], "Abc"));
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"));
// Task 5
// Requirement:
// Write a function named reverseSentence() which takes a string as argument and returns
//  the words in reverse order.​ If there is no enough words reverse, return "There is not 
//  enough words!".
// Examples:
// reverseSentence("Hello") 		-> "There is not enough words!"
// reverseSentence("Javascript is fun") 		-> "Fun is javascript"
// reverseSentence("This is a sentence") 	-> "Sentence a is this"

function reverseSentence(str) {
    const words = str.split(" ");
    if (words.length <= 1) return console.log("There is not enough words!")
    let reversWord = words.reverse().join(" ");
    return console.log(reversWord[0].toUpperCase()+ reversWord.slice(1).toLowerCase());
}
reverseSentence("Hello");
reverseSentence("Javascript is fun");
reverseSentence("This is a sentence");

//Task 6
// Requirement:
// Write a function named removeStringSpecialsDigits() which takes a string as argument
//  and return a string without the special characters or digits.
// Examples:
// removeStringSpecialsDigits("123Javascript #$%is fun") 	-> "Javascript is fun" 
// removeStringSpecialsDigits("Cypress") 		-> "Cypress"
// removeStringSpecialsDigits("Automation123#$%") 	-> "Automation"

function removeStringSpecialsDigits (str) {
    let word = "";
    for( const char of str) {
        if(char.toLowerCase() >= "a" && char.toLowerCase() || char === " ") word += char
    }
    return console.log(word);
}
removeStringSpecialsDigits("123Javascript #$%is fun");
removeStringSpecialsDigits("Cypress");
removeStringSpecialsDigits("Automation123#$%");
//Task 7
// Requirement:
// Write a function named removeArraySpecialsDigits() which takes a string array as
//  argument and return back without the special characters or digits.
// Examples:
// removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]) 	-> ["Javascript", "is", "fun"]
// removeArraySpecialsDigits(["Cypress", "123$%", "###"]) 	-> ["Cypress", "", ""]
// removeArraySpecialsDigits(["Automation", "123#$%tool"]) 	-> ["Automation", "tool"]

const removeArraySpecialsDigits = (array) => array.map(str => {
    let word = "";
    for( const char of str) {
        if(char.toLowerCase() >= "a" && char.toLowerCase() || char === " ") word += char
    }
    return word;
});
console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]));
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]));
//Task 8
// Requirement:
// Write a function named getCommons() which takes two string arrays as arguments and 
// returns all the common words.
// Examples:
// getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 		-> []
// getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) 	-> ["Javascript"]
// getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ) 	-> ["C#"]

const getCommons = (array1, array2) => {
    let common = [];
    for(const el of array1){
        if(array2.includes(el) && !(common.includes(el))) common.push(el);
    }
    return console.log(common);
}
getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"]);
getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] );
getCommons( ["Javascript", "C#", "C#", "Python"], ["Python", "C#", "C++", "Python", 4, 6] );
//Task 9 
// Requirement:
// Write a function named noXInVariables() which takes an array as argument and return an 
// array that all the x or X removed from the elements. 
// NOTE: If the element is existing of x or X letters only, then completely remove the element.
// Examples:
// noXInVariables(["abc", 123, "#$%"]) 		-> ["abc", 123, "#$%"]
// noXInVariables(["xyz", 123, "#$%"]) 		-> ["yz", 123, "#$%"]
// noXInVariables(["x", 123, "#$%"]) 		-> [123, "#$%"]
// noXInVariables(["xyXyxy", "Xx", "ABC"]) 	-> ["yyy", "ABC"]

const noXInVariables = (array) => {
    noXArray = array.map(char =>{
    return (char.toString().split("").filter(letter =>(letter.toLowerCase() !== "x"))).join("")
    })
    return noXArray.filter(word => (word.length > 0))
}

console.log(noXInVariables(["abc", 123, "#$%"]))
console.log(noXInVariables(["xyz", 123, "#$%"]))
console.log(noXInVariables(["x", 123, "#$%"]))
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]))