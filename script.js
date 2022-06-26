// -------------------------------------------------------------------
// Event Listeners
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

const displayNum = document.querySelector(".display")

// -------------------------------------------------------------------
const userArray = []
const tempArray = []
var finalArray = 0
var secondArray = 0
var operator = ""

function selectOne(num1) {
    num1 = 1
    userArray.push(num1)
    var updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectTwo(num1) {
    num1 = 2
    userArray.push(num1)
    var updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectThree(num1) {
    num1 = 3
    userArray.push(num1)
    var updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectFour(num1) {
    num1 = 4
    userArray.push(num1)
    var updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectFive(num1) {
    num1 = 5
    userArray.push(num1)
    var updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectSix(num1) {
    num1 = 6
    userArray.push(num1)
    var updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectSeven(num1) {
    num1 = 7
    userArray.push(num1)
    var updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectEight(num1) {
    num1 = 8
    userArray.push(num1)
    var updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
function selectNine(num1) {
    num1 = 9
    userArray.push(num1)
    var updateDisplay = parseInt(userArray.join(''))

    displayNum.textContent = updateDisplay
    console.log(userArray)
}
// -------------------------------------------------------------------
// Converting array into one big int function along with calling operations
function selectPlus() {
    console.log("adding")
    finalArray = parseInt(userArray.join(''))
    userArray.splice(0,userArray.length)
    console.log("clearing array",userArray)

    operator = "plus"
    displayNum.textContent = finalArray
    console.log(finalArray)
}
function selectSubtract() {
    console.log("subtracting")
    var finalArray = parseInt(userArray.join(''))
    displayNum.textContent = finalArray
    console.log(finalArray)
}
function selectEquals() {
    console.log("equals ?")
    secondArray = parseInt(userArray.join(''))
    userArray.splice(0,userArray.length)

    operate(finalArray, secondArray)
}
function selectDivide() {
    console.log("dividing")
    var finalArray = parseInt(userArray.join(''))
    displayNum.textContent = finalArray
    console.log(finalArray)
}
function selectMultiply() {
    console.log("multiplying..")
    var finalArray = parseInt(userArray.join(''))
    displayNum.textContent = finalArray
    console.log(finalArray)
}
// -------------------------------------------------------------------
// Simple Functions

function addition() {
    let result = finalArray + secondArray
    return displayNum.textContent = result
    console.log(result)
}

function subtraction(num1, num2) {
    

    return num1 - num2
}

function division(num1, num2) {
    return (num1 / num2)
}

function multiplication(num1, num2) { 
   return (num1 * num2)
}
// -------------------------------------------------------------------
// Operator Function
function operate () {
    if(operator == "plus") {
        addition(finalArray, secondArray)
    }
}


