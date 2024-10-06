
function solve(val) {
    let display = document.getElementById('res')
    display+=val 
}

function result() {
    let inputValue = document.getElementById('res').value
    let reult = eval(inputValue.replace('x','*'))
    document.getElementById('res').value = result
}

function clear() {
    let inp = document.getElementById('res')
    inp.value = ''
}

function bacck() {
    let ev = document.getElementById('res')
    ev.value  = ev.value.slice(0,-1)    
}

document.addEventListener('keydown', function (event) {
    const key =event.key
    const validKeys = '0123456789+-/.%'
    if (validKeys.includes(key) ) {
        solve(key==='*'? 'x': key)

    }else if (key === 'enter') {
        result()
    }
    else if (key==='backspace') {
        bacck()
    } else if (key.toLowerCase()==='c') {
        clear()
    }
})


