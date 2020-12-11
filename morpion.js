let CouleurCell="rose"

function jouer(idCell){
let Cellule= document.getElementById(idCell)
Cellule.classList.add("blue")

if (CouleurCell=="blue"){
    Cellule.classList.add("rose")
    Cellule.innerText="o"                
    CouleurCell="rose"}
else{
    
Cellule.classList.add("blue")
CouleurCell="blue"
Cellule.innerText="x"
}

}


function Rejouer(){
    let Cellule = document.getElementById("case1")
    Cellule.classList.remove("blue")
    Cellule.classList.remove("rose")
    Cellule = document.getElementById("case2")
    Cellule.classList.remove("blue")
    Cellule.classList.remove("rose")
    Cellule = document.getElementById("case3")
    Cellule.classList.remove("blue")
    Cellule.classList.remove("rose")
    Cellule = document.getElementById("case4")
    Cellule.classList.remove("blue")
    Cellule.classList.remove("rose")
    Cellule = document.getElementById("case5")
    Cellule.classList.remove("blue")
    Cellule.classList.remove("rose")
    Cellule = document.getElementById("case6")
    Cellule.classList.remove("blue")
    Cellule.classList.remove("rose")
    Cellule = document.getElementById("case7")
    Cellule.classList.remove("blue")
    Cellule.classList.remove("rose")
    Cellule = document.getElementById("case8")
    Cellule.classList.remove("blue")
    Cellule.classList.remove("rose")
    Cellule = document.getElementById("case9")
    Cellule.classList.remove("blue")
    Cellule.classList.remove("rose")
}