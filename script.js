// -------------------------------------------------------------------
// Event Listeners
const numZero = document.querySelector(".zero")
numZero.addEventListener("click", selectZero)

const numOne = document.querySelector(".one")
numOne.addEventListener("click", selectOne)

const numTwo = document.querySelector(".two")
numTwo.addEventListener("click", selectTwo)

const numThree = document.querySelector(".three")
numThree.addEventListener("click", selectThree)

const numFour = document.querySelector(".four")
numFour.addEventListener("click", selectFour)

const numFive = document.querySelector(".five")
numFive.addEventListener("click", selectFive)

const numSix = document.querySelector(".six")
numSix.addEventListener("click", selectSix)

const numSeven = document.querySelector(".seven")
numSeven.addEventListener("click", selectSeven)

const numEight = document.querySelector(".eight")
numEight.addEventListener("click", selectEight)

const numNine = document.querySelector(".nine")
numNine.addEventListener("click", selectNine)
// -------------------------------------------------------------------
// Operator Buttons
const plusButton = document.querySelector(".plus")
plusButton.addEventListener("click", selectPlus)

const subtractButton = document.querySelector(".subtract")
subtractButton.addEventListener("click", selectSubtract)

const equalsButton = document.querySelector(".equals")
equalsButton.addEventListener("click", selectEquals)

const divideButton = document.querySelector(".divide")
divideButton.addEventListener("click", selectDivide)

const multiplyButton = document.querySelector(".multiple")
multiplyButton.addEventListener("click", selectMultiply)

const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", selectClear)

const displayNum = document.querySelector(".display")

// -------------------------------------------------------------------
const userArray = []
const tempArray = []
const operator = []

var finalArray = 0
var secondArray = 0

var updateDisplay = 0




function selectZero(num1) {
    num1 = 0
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))
    displayNum.textContent = updateDisplay
}
function selectOne(num1) {
    num1 = 1
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))
    displayNum.textContent = updateDisplay
}
function selectTwo(num1) {
    num1 = 2
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))
    displayNum.textContent = updateDisplay
}
function selectThree(num1) {
    num1 = 3
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))
    displayNum.textContent = updateDisplay
}
function selectFour(num1) {
    num1 = 4
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))
    displayNum.textContent = updateDisplay
}
function selectFive(num1) {
    num1 = 5
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))
    displayNum.textContent = updateDisplay
}
function selectSix(num1) {
    num1 = 6
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))
    displayNum.textContent = updateDisplay
}
function selectSeven(num1) {
    num1 = 7
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))
    displayNum.textContent = updateDisplay
}
function selectEight(num1) {
    num1 = 8
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))
    displayNum.textContent = updateDisplay
}
function selectNine(num1) {
    num1 = 9
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))
    displayNum.textContent = updateDisplay
}
function selectClear() {
    userArray.splice(0,userArray.length)
    tempArray.splice(0,tempArray.length)
    operator.splice(0,operator.length)
    displayNum.textContent = 0
}
// -------------------------------------------------------------------
// Converting array into one big int function along with calling operations
function selectPlus() {
    // pushing number into the temp array
    tempArray.push(updateDisplay)
    operator.push("+")
    console.log("TEMP ARRAY",tempArray)
    // clearing input 
    finalArray = parseInt(userArray.join(''))
    userArray.splice(0,userArray.length)
   


    operate(tempArray, operator)
    // operator = "plus"
    // operate()
}
function selectSubtract() {
    // left off here, work on this function
    tempArray.push(updateDisplay)
    operator.push("-")
    console.log(tempArray)
    
    finalArray = parseInt(userArray.join(''))
    userArray.splice(0,userArray.length)
    operate(tempArray, operator)

    
}
function selectDivide() {
    tempArray.push(updateDisplay)
    operator.push("/")
    console.log(tempArray)
    
    finalArray = parseInt(userArray.join(''))
    userArray.splice(0,userArray.length)
    operate(tempArray, operator)

}
function selectMultiply() {
    tempArray.push(updateDisplay)
    operator.push("*")
    console.log(tempArray)
    
    finalArray = parseInt(userArray.join(''))
    userArray.splice(0,userArray.length)
    operate(tempArray, operator)

    
}
function selectEquals() {
    console.log("equals ?")
    tempArray.push(updateDisplay)
    operate(tempArray)
}
// -------------------------------------------------------------------
// Simple Functions

function addition() {
    if(operator.length > 1) {
        operator.shift()
    }
    var total = 0
    for (let i = 0; i < tempArray.length; i++) {
        total += tempArray[i];
    }
    if(tempArray.length > 1) {
        tempArray.splice(0,tempArray.length)
        tempArray.push(total)
    }
    displayNum.textContent = total

}
function subtraction() 
 {
    var total = tempArray[0]
    for (var i = 1, length = tempArray.length; i < length; i++)
    {
      if (typeof (tempArray[i]) === 'number')
      {
        total -= tempArray[i];
      } 
      else 
      return false;
    }
    if(operator.length > 1) {
        operator.shift()
    }
    if(tempArray.length > 1) {
        tempArray.splice(0,tempArray.length)
        tempArray.push(total)
    }
    displayNum.textContent = total

//     // let result = finalArray - secondArray
//     // let rounded = Math.round(result * 100) / 100
//     // return displayNum.textContent = rounded
}


function division() {
    var total = tempArray[0]
    for (var i = 1, length = tempArray.length; i < length; i++)
    {
      if (typeof (tempArray[i]) === 'number')
      {
        total /= tempArray[i];
      } 
      else 
      return false;
    }
    if(operator.length > 1) {
        operator.shift()
    }
    if(tempArray.length > 1) {
        tempArray.splice(0,tempArray.length)
        tempArray.push(total)
    }
    displayNum.textContent = total
}

function multiplication() { 
    var total = tempArray[0]
    for (var i = 1, length = tempArray.length; i < length; i++)
    {
      if (typeof (tempArray[i]) === 'number')
      {
        total *= tempArray[i];
      } 
      else 
      return false;
    }
    if(operator.length > 1) {
        operator.shift()
    }
    if(tempArray.length > 1) {
        tempArray.splice(0,tempArray.length)
        tempArray.push(total)
    }
    displayNum.textContent = total
    // let result = (finalArray * secondArray)
    // let rounded = Math.round(result * 100) / 100
    // return displayNum.textContent = rounded
}
// -------------------------------------------------------------------
// Operator Function
function operate () {
   if(operator[0] == ("+")) {
    console.log("plus", operator)
    addition(tempArray)
   }
   if(operator[0] == ("-")) {
    console.log("minus", operator)
    subtraction(tempArray)
   }
   if(operator[0] == "*") {
    multiplication(tempArray)
   }
   if(operator[0] == "/") {
    division(tempArray)
   }
    //displayNum.textContent = total


}