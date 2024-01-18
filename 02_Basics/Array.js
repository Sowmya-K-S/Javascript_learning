const arr = [0, 1, 2, 'A', 'B']
console.log(arr)

//Array methods

arr.push(6) // adds a element at end
console.log(arr)

arr.pop() //removes element at end
console.log(arr)

arr.unshift(9) // adds a element at beginning
console.log(arr)

arr.shift() // removes element at beginning
console.log(arr)

// questioning methods

console.log(arr.includes(9)) // includes function returns boolean value

// finding index

console.log(arr.indexOf(2)) //returns index of the value

//if we give the unexisting element to the indexOf function, the we get -1 as result


// .join => converts array elements to string
console.log("-------------Join----------------------")

const array_to_string = arr.join()

console.log("Before join: ")
console.log(arr+" : "+typeof(arr))
console.log("After join: ")
console.log(array_to_string+" : "+ typeof(array_to_string))

// slice, splice

// slice will not manipulate the original array

console.log("--------------Slicing---------------------")

const sliced_array = arr.slice(1,4) // returns value from 1 to 3 index => it is like [1, 4) -> 4 is not inclusive
console.log(sliced_array," slicing: Value from 1 to 3 index")
console.log(arr,"original Array - doesnot change in slicing")


console.log("--------------Splicing---------------------")

spliced_array = arr.splice(1,4) // returns value from 1 to 4 index => it is like [1,4] -> 4 is inclusive
console.log(spliced_array," splicing: Value from 1 to 4 index")
console.log(arr,"original Array - changes in splicing => removes the spliced part from original array")

console.log("\n----------------PART 2---------------------\n")

console.log("SOME NOTABLE POINTS\n")

hit_movies = ['RRR', 'Janatha Garage', 'Aravinda Sametha','Naanaku Prematho']
upcoming = ['Devara-1','War2','NTR31','Devara-2']

//push array into array
console.log("--------------Push---------------------")
hit_movies.push(upcoming)
console.log(hit_movies)
console.log("Conclusion: Upcoming array goes inside hit_movies array because we can add anything into array - it may be number or array or anything else")

//concat
console.log("--------------Concat---------------------")
concatenated = hit_movies.concat(upcoming)
console.log(concatenated) // gives the elements of two different arrays in a  single array and returns a new array

//Spread
console.log("--------------Spread---------------------")
all_movies = [...hit_movies, ...upcoming]
console.log(all_movies)

//Note: In case of "concat" we can use only two arrays
// in case of "spread" we can use more than two arrays also

//Flat -> Brings all the elements in the depth of array into a single array

console.log("--------------Flat---------------------")

let depth_array = [1,2,[3,4],5,6,[7,[8,9,[10.,11]]]]
let flattened = depth_array.flat(2) //depth should be given as argument -> we can also mention depth as "infinity"
console.log("Flattened Array",flattened)


// to check whether anything is array or not
console.log(Array.isArray("Sowmya")) // returns boolean values

//to convert any datatype to array
let convert_to_Array = Array.from("Sowmya")
console.log("Converted to Array: ",convert_to_Array)

// to make array from different individual values
let score1 =  200
let score2 = 300
let score3 = 400

let built_array = Array.of(score1,score2,score3)
console.log("Array built from different values using Array.of() function : ",built_array)

