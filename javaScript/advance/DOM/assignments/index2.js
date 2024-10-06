// function appendToResult(value) {
//     document.getElementById('res').value+=value

// }

// function clearResult() {
//     document.getElementById('res').value = ''
// }

// function calculateResult() {
//     const resultField = document.getElementById('res')
//     resultField.value = eval(resultField.value) 
// }

//append value function
function appendValue(value) {
    document.getElementById('output').value += value  
}
//clear function
function clear() {
    document.getElementById('output').value = ''
}
//backspace function
function backSpace() {
    let outputElem = document.getElementById('output')
   let newValue=  outputElem.value.slice(0,-1)
   outputElem.value = newValue
}

//second way of adding evnt
document.getElementById('clear').onclick = clear;


// third way of adding event
document.getElementById('backspace').addEventListener('click', backSpace)

function calculate(params) {
    let outputElem = document.getElementById('output')
  let result=  eval(outputElem.value)
  outputElem.value = result 
} 