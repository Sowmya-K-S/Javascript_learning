 // one method for string concatenation

 // using '+' operator
 console.log("Hi"+"Naana")
 //This is not a good way

// good method to concatenate 
// This method makes code more readable

// using ` (backtick) operator
 let name = 'Shravani'
 let numberofrepo = 3

 console.log(`My name is ${name} and I have ${numberofrepo} github repos`)

 // Another method of declaring string
 
 const MovieName = new String ("Aravinda_sametha_Veera_Raghava")
 console.log(MovieName)

 // when we execute the above two lines in console in browser we get : refer notes in notion file 'Javascript'

 /* Some commonly used methods of string */

// Access element at particular index
 console.log(MovieName[3]) // v

// To get object
console.log(MovieName.__proto__) // {} -> object (not empty but has values as it was shown in console)

// .length property
console.log(MovieName.length)

// .toUppercase(string)
console.log(MovieName.toUpperCase())

// .charAt(index_value)
console.log(MovieName.charAt(2))

// .indexOf(character)
console.log(MovieName.indexOf('a'))

// .slice(start_number, end_number) -> end_number is excluded
console.log(MovieName.slice(2,4))

// .substring(start, end) -> end will be excluded -> we cannot give megative values to this
console.log(MovieName.substring(0,5))

// .slice(start, end) -> we can give negative values aswell
console.log("slice:",MovieName.slice(-8, 4))

// .trim -> removes starting and ending spaces

// we can also use trimstart and trim end
// but trim is used for both start and end

let str = '    Sowmya    '
console.log(str.trim())

// .replace(which_to_replace, replace_with_what)
// replaces the character encountered first 

console.log(MovieName.replace('_','-'))

// .includes(text_to_search) -> to detect existence of some text
// it is case sensitive

console.log(MovieName.includes('ara'))
console.log(MovieName.includes('Ara'))

// .split(split_on_what) -> split based on some seperator and convert it to array

console.log(MovieName.split('_'))

//Follow-up : cover other methods of String
