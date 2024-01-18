
// Date
let myDate = new Date()
console.log(myDate)

// toString
console.log(myDate.toString())

// toDateString
console.log(myDate.toDateString())

// toLocaleString
console.log(myDate.toLocaleString())

// typeof
console.log(typeof myDate) //object --> Date is a OBJECT

// toISOString
console.log(myDate.toISOString())

//to JSON
console.log(myDate.toJSON())

//to UTC
console.log(myDate.toUTCString())

//to Timestring
console.log(myDate.toTimeString())

//---------- Try some other methods ------------

// To create custom dates

let myCustomDate = new Date(2023, 0, 23) // month starts with 0
console.log("=============================")
console.log(myCustomDate)
console.log('Custom Date: '+myCustomDate)
//when we try to concatenate something with string, that also becomes the string --> just like the previous one

let myCustomDate1 = new Date(2023, 0, 23,5, 3)
console.log(myCustomDate1)
console.log('Custom Date: '+myCustomDate1)

let myCustomDate2 = new Date('2023-01-13')
console.log(myCustomDate2)
console.log('Custom Date: '+myCustomDate2)

//getTime() --> for comparing usecase
console.log(myCustomDate2.getTime())

//time stamps
timeStamp = Date.now()
console.log(timeStamp) // comes in milliseconds

//===========EXPLORE OTHER METHODS ASWELL==============