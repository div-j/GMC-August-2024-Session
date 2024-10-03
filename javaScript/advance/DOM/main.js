let h =  document.createElement("html")
let hd =  document.createElement('head')
let bd =  document.createElement('body')
let dv =  document.createElement('div')

let h1 =  document.createElement('h1')
let txt =  document.createTextNode("I am Divine and ye are the branches")

h1.append(txt);

dv.appendChild(h1)
bd.appendChild(dv)
h.append(bd)
h.appendChild(hd)



