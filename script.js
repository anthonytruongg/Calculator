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
var finalArray = 0
var secondArray = 0
var operator = ""
var updateDisplay = 0

function selectZero(num1) {
    num1 = 0
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))
    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectOne(num1) {
    num1 = 1
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectTwo(num1) {
    num1 = 2
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectThree(num1) {
    num1 = 3
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectFour(num1) {
    num1 = 4
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectFive(num1) {
    num1 = 5
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectSix(num1) {
    num1 = 6
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectSeven(num1) {
    num1 = 7
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectEight(num1) {
    num1 = 8
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectNine(num1) {
    num1 = 9
    userArray.push(num1)
    updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectClear() {
    userArray.splice(0,userArray.length)
    displayNum.textContent = 0
}
// -------------------------------------------------------------------
// Converting array into one big int function along with calling operations
function selectPlus() {
    tempArray.push(updateDisplay)
    console.log(tempArray)
    var sum = 0
    for (let i = 0; i < tempArray.length; i++) {
        sum += tempArray[i];
    }

    finalArray = parseInt(userArray.join(''))
    userArray.splice(0,userArray.length)
    
    operator = "plus"
    displayNum.textContent = sum


}
function selectSubtract() {
    // left off here, work on this function
    tempArray.push(updateDisplay)
    console.log(tempArray)
    var sum = 0
    for (let i = 0; i < tempArray.length; i++) {
        sum -= tempArray[i];
    }

    finalArray = parseInt(userArray.join(''))
    userArray.splice(0,userArray.length)
    
    operator = "subtract"
    displayNum.textContent = sum
}
function selectDivide() {
    finalArray = parseInt(userArray.join(''))
    userArray.splice(0,userArray.length)
  
    tempArray.push(updateDisplay)
    console.log(tempArray)
    var sum = 0
    for (let i = 0; i < tempArray.length; i++) {
        sum /= tempArray[i];
    }

    operator = "divide"
    displayNum.textContent = sum

}
function selectMultiply() {
    finalArray = parseInt(userArray.join(''))
    userArray.splice(0,userArray.length)
    
    tempArray.push(updateDisplay)
    console.log(tempArray)
    var sum = 0
    for (let i = 0; i < tempArray.length; i++) {
        sum *= tempArray[i];
    }

    operator = "multiply"
    displayNum.textContent = sum

}
function selectEquals() {
    console.log("equals ?")
    secondArray = parseInt(userArray.join(''))
    userArray.splice(0,userArray.length)

    operate(finalArray, secondArray)
}
// -------------------------------------------------------------------
// Simple Functions

function addition() {
    let result = finalArray + secondArray
    let rounded = Math.round(result * 100) / 100
    return displayNum.textContent = rounded
}

function subtraction() {
    let result = finalArray - secondArray
    let rounded = Math.round(result * 100) / 100
    return displayNum.textContent = rounded
}

function division() {
    let result = (finalArray / secondArray)
    let rounded = Math.round(result * 100) / 100
    return displayNum.textContent = rounded
}

function multiplication() { 
    let result = (finalArray * secondArray)
    let rounded = Math.round(result * 100) / 100
    return displayNum.textContent = rounded
}
// -------------------------------------------------------------------
// Operator Function
function operate () {
    if(operator == "plus") {
        addition(finalArray, secondArray)
    }
    if(operator == "subtract") {
        subtraction(finalArray, secondArray)
    }
    if(operator == "divide") {
        division(finalArray, secondArray)
    }
    if(operator == "multiply") {
        multiplication(finalArray, secondArray)
    } else {
        return 0
    }
}




