let trParent1=document.getElementById("trParent")
let l1c1=document.createElement("td")
l1c1.innerText="BBB"
trParent1.appendChild(l1c1)

let trParent1_2=document.getElementById("trParent")
let l1c2=document.createElement("td")
l1c2.innerText="AAA"
l1c2.style.color="red";
trParent1_2.insertBefore(l1c2,trParent1_2.firstChild)

let trParent2=document.getElementById("trParent2")
let l2c2=document.createElement("td")
l2c2.innerText="DDD"
trParent2.appendChild(l2c2)

let trParent2_2=document.getElementById("trParent2")
let l2c1=document.createElement("td")
l2c1.innerText="CCC"
trParent2_2.insertBefore(l2c1,trParent2_2.firstChild)
