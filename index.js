//----------------- problem-1--------------------------
function mindGame(number) {
    if (number > 0) { //checking condition if number is postive
        let sum = 0;  //declared variable sum and defined it with value 0
        return sum = (((number * 3) + 10) / 2) - 5; //returning the sum
    }
    else {
        return "please insert positive number"
    }
}

console.log(mindGame(5))
console.log(mindGame(50))
console.log(mindGame(33))


// ------------------------problem-2 ------------------------------------


function evenOdd(string) {
    if (typeof string === "string") {         // checking if string is a string type
        if (string.length % 2 === 0) {        // checking if remainder is equal to 0
            return "even"                     // if remainder is equal to 0, then return "even"
        } else {
            return "odd"                      // if remainder is Not equal to 0, then return "odd" 
        }
    } else {
        return "please insert string"
    }
}

console.log(evenOdd('Phero'))
console.log(evenOdd('Batch7'))
console.log(evenOdd('chatgpt'))


// -----------------------problem-3-----------------------


function isLGSeven(number) {
    if (typeof number === "number") {      //checking if parameter is a number type
        let sum = number - 7;              // declaring variable sum and assigning value (parameter -7)
        if (sum < 7) {                     // checking if sum is greater than 7 
            return sum;                    // if so, then returning sum
        } else {
            return number * 2              // if not then returning twice the value of parameter
        }
    }
    else {
        return "please insert number"
    }
}

console.log(isLGSeven(6))
console.log(isLGSeven(-15))
console.log(isLGSeven(15))



// ---------------------problem-4--------------------------------
function findingBadData(myArray) {
    if (typeof myArray === "object") {              // checking if parameter is object
        let badData = [];                           // declaring variable badData and assigning an empty array
        let goodData = [];                          // declaring variable goodData and assigning an empty array
        for (i = 0; i <= myArray.length - 1; i++) { // checking every number of parameter-array
            let number = myArray[i];                // declaring a variable number and assigning each element of the array
            if (number > 0) {                       //if element is greater than 0
                goodData.push(number)               // adding that number to goodData array by push func
            } else {
                badData.push(number)                // if not then adding that number to badData array
            }
        }
        return badData.length                        // returning tha length of badData array
    }
    else {
        return "please insert an object"
    }
}


console.log(findingBadData([1, 2, 5]))
console.log(findingBadData([2, -5, -7, -13]))
console.log(findingBadData([-4, -9, -5, -33, -55]))




// -----------------------------problem-5-------------------------------


function gemsToDiamond(num1, num2, num3) {
    if (typeof num1 === "number" && typeof num2 === "number" && typeof num3 === "number") {
        let power1 = num1 * 21;                //declaring variable power1
        let power2 = num2 * 32;                //declaring variable power2
        let power3 = num3 * 43;                //declaring variable power3
        const sum = power1 + power2 + power3;  // declaring variable sum and assigning the total of three powers
        if (sum > 2000) {                      // if total is greater than 0 
            return sum - 2000;                 // return the value of sum after substracting 2000 
        } else {
            return sum;                        // else just returning the value of sum
        }
    } else {
        return "please insert number"
    }
}

console.log(gemsToDiamond(1, 1, 1))
console.log(gemsToDiamond(20, 200, 50))
console.log(gemsToDiamond(100, 5, 1))

