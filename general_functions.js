// 1. Write a function that takes in one parameter and logs that parameter 3 times into the console.

function tripleRepeat(string) {
    return string.repeat(3);
}

console.log(tripleRepeat("<<This is a triple phrase test>> "));

// ANSWER: it prints
// <<This is a triple phrase test>> <<This is a triple phrase test>> <<This is a triple phrase test>> 


// 2. Write a function that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"

function quintupleRepeat(string) {
    return string.repeat(5);
}

console.log(quintupleRepeat("CAT "));

// ANSWER: it prints CAT CAT CAT CAT CAT 

// OR THIS:
// const quintupleRepeat = (word) => {
//     let words = "";
//     for (let counter = 0; counter < 5; counter++) {
//         words = words + word;
//         return words;
//       }
// };

// console.log(quintupleRepeat("CAT"));

// 3. Write a function that takes in two parameters, the first one should be a number and the 2nd one should be a string. The functions returns the 2nd argument repeated as many times as the 1st argument defins. For the inputs `3` and "Woah" it should return `WoahWoahWoah`

function timesRepetition(number, string) {
    return string.repeat(number);
}
console.log(timesRepetition(3, "Woah"));

// ANSWER: it prints WoahWoahWoah

// 4. Write a function that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input `[1,6,83,91,0,-4,1337,5]` it should return `1337`

function largestNumber(array) {
    return Math.max.apply(Math, array);
};

console.log(largestNumber([1,6,83,91,0,-4,1337,5]));

// ANSWER: it prints 1337


// 5. This question has 2 parts
//     Part a) write a function that takes in a number and does a `console.log("Even 10!")` if the number is evenly divisable by 10. Examples:

//     -  printIfDivisibleByTen(1) --> no output
//     -  printIfDivisibleByTen(2) --> no output
//     -  printIfDivisibleByTen(32) --> no output
//     -  printIfDivisibleByTen(10) --> "Even 10!" into the console
//     -  printIfDivisibleByTen(30) --> "Even 10!" into the console
//     -  printIfDivisibleByTen(90000) --> "Even 10!" into the console

function printIfDivisibleByTen(number) {
    if (number % 10 == 0) {
      return "Even 10!";
    } else {
        return "";
    }
    
}

console.log(printIfDivisibleByTen(1));
console.log(printIfDivisibleByTen(2));
console.log(printIfDivisibleByTen(32));
console.log(printIfDivisibleByTen(10));
console.log(printIfDivisibleByTen(30));
console.log(printIfDivisibleByTen(90000));

// ANSWER: it prints


// Even 10!
// Even 10!function hundredTwentyFiveTimes(number)
// Even 10!

//     Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.
// function hundredTwentyFiveTimes(number)



// 6. Write an arrow function that takes in 5 numbers as its parameters and returns the largest one
const printLargest = (number1, number2, number3, number4, number5) => {
    return Math.max(number1, number2, number3, number4, number5);
}

console.log(printLargest(3, 7, 29, 45, 1999));

// ANSWER: it prints 1999


// 7. Write an arrow function that takes in one parameter and returns true if that parameter is a string.

const IsAString = string => {
    if (typeof string === "string") {
        return true;
    } else 
    {return false;}
}
console.log(IsAString(576));
console.log(IsAString("Hola!"));
console.log(IsAString(([75, 43, "banana"])));
console.log(IsAString("Haciendo pruebas con Javascript"));

// ANSWER: it prints 
// false
// true
// false
// true

// 8. Write an arrow function that takes in two parameters and returns true if both of them are strings.

const areBothStrings = (string1, string2) => {
  if (typeof string1 === "string" && typeof string2 === "string") {
          return true;
      } else 
      {return false;}
}
   


console.log(areBothStrings(576, "Hola!"));
console.log(areBothStrings("Hola!", "Hello"));
console.log(areBothStrings(([75, 43, "banana"], "Bye")));
console.log(areBothStrings("Haciendo pruebas con Javascript", "testing functions"));

// ANSWER: It prints
// false
// true
// false
// true
// 9. Write an arrow function that takes in one string. The function should return the first word in the string that was given to it. Examples:
//     - getFirstWord("Internetting is hard") --> "Internetting"
//     - getFirstWord("Hello World") --> "Hello"
//     - getFirstWord("Hello") --> "Hello"

const getFirstWord = (string) => {
    return string.split(" ")[0];
}
console.log(getFirstWord("Hola! this is a test"));
console.log(getFirstWord("Morning! hope you are doing well"));
console.log(getFirstWord("Achtung! You have entered a danvargerous place!"));

// ANSWER: it printLargest
// Hola!
// Morning!
// Achtung!

// 10. *HARD* Write an arrow function that takes in one string.
// The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. Examples:
//     - wordRepeater("bunny") --> "bunny"
//     - wordRepeater("Cat food") --> "Cat Cat food food"
//     - wordRepeater("I am groot") --> "I I I am am am groot groot groot"
//     - wordRepeater("O M G ?") --> "O O O O M M M M G G G ? ? ? ?"


const wordRepeater = (string) => {
   let words = string.split(" ");
   const result = [];
   for ( i= 0; i < words.length; i++) {
    const word = words[i];
     for (j =0; j < words.length; j++) {
       result.push(word);
     } 
   }
return result.join(" ")

}

  
console.log(wordRepeater("bunny"));
console.log(wordRepeater("Cat food"));
console.log(wordRepeater("I am groot"));
console.log(wordRepeater("O M G ?"));


// 11. Write a short (single line) arrow function that takes in one string and returns the first character of that string. Examples:
//     - firstLetter("cat") --> "c"
//     - firstLetter("quylthulg") --> "q"

const firstLetter = string => string.substring(0, 1);

console.log(firstLetter("cat"));
console.log(firstLetter("quylthulg"));

// ANSWER: it prints 
// c
// q

// 12. Write an arrow function that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. Examples:
//     - firstLetters("cat") --> "c"
//     - firstLetters("What the fruit") --> "Wtf"
//     - firstLetters("MongoDB Express Node React") --> "MERN"
//     - firstLetters("What You See Is What You Get") --> "WYSIWYG"


const firstLetters = (string) => {
 const words = string.split(" ");
 let result = " ";
    for (i = 0; i < words.length; i++) {
        result += words[i][0];
    }
    return result;
}

console.log(firstLetters("cat"));
console.log(firstLetters("What the fruit"));
console.log(firstLetters("MongoDB Express Node React"));
console.log(firstLetters("What You See Is What You Get"));

// 13. Write an arrow function that takes in one variable. If that variables is a string, it will return the length of the string. If that variable is an array, it returns the length of the array. If it is something else, it will return null. You might need to search Google to find out how can you identify if the parameter is an array - but there are other ways to solve this too!

const variableCount = variable => {
    if (typeof variable === "string") {
        return variable.length; 

        } else if (typeof variable === "array"){
            return variable.length; 
    } else { return null}
}

console.log(variableCount("What the fruit"));
console.log(variableCount(["MongoDB", "Express", "Node", "React"]));
console.log(variableCount("What You See Is What You Get"));

// ANSWER: it prints
// 14
// null
// 28

// 14. Write an arrow function that takes in one variable. If the variable is not a string, return null. If it is a string, return an array where each of the characters of that string is in individual array entry. Examples:
//     - explode("Cat") --> ["C", "a", "t"]
//     - explode(41) --> null
//     - explode("") --> []
//     - explode("R & D") --> ["R", " ", "&", " ", "D"]

const explode = string => {
    if (typeof string === "string") {
         return string.split("");
    } else {return null;}
}
// const wordRepeater = (string) => {
//     let words = string.split(" ");
//     const result = [];
//     for ( i= 0; i < words.length; i++) {
//      const word = words[i];
console.log(explode("cat"));
console.log(explode("41"));
console.log(explode(""));
console.log(explode("R & D"));

// 15. Reverse engineering challenge 1. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
//     - foo("") -> false
//     - foo("a") -> false
//     - foo("o") -> true
//     - foo("Cat") -> false
//     - foo("Tomato") -> true
//     - foo("Potato") -> true
//     - foo("Blanket") -> false
//     - foo("1") -> false

const reverseEngineering = string => string.indexOf("o") >= 0;

console.log(reverseEngineering(""));
console.log(reverseEngineering("a"));
console.log(reverseEngineering("o"));
console.log(reverseEngineering("Cat"));
console.log(reverseEngineering("Tomato"));
console.log(reverseEngineering("Potato"));
console.log(reverseEngineering("Blanket"));
console.log(reverseEngineering("1"));

// ANSWER: it prints
// false
// false
// true
// false
// true
// true
// false
// false

// 16. Reverse engineering challenge 2. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
//     - bar("") --> "Cat"
//     - bar("x") --> "Cat"
//     - bar("Cat") --> "Catt"
//     - bar("Foobar") --> "Catobar"
//     - bar("Potato") --> "Cattato"
//     - bar("Tomato") --> "Catmato"
//     - bar("International Space Station") --> "Catternational Space Station"

const reverseEngineering2 = string => "Cat" + (string.slice(2));

console.log(reverseEngineering2(""));
console.log(reverseEngineering2("x"));
console.log(reverseEngineering2("Cat"));
console.log(reverseEngineering2("Foobar"));
console.log(reverseEngineering2("Potato"));
console.log(reverseEngineering2("Tomato"));
console.log(reverseEngineering2("International Space Station"));

// ANSWER: it prints
// Cat
// Cat
// Catt
// Catobar
// Cattato
// Catmato
// Catternational Space Station