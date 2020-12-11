let divParent = document.getElementById("ma_div")
let enfanth1 = document.createElement("h1")
enfanth1.innerText = "Nouveau titre créé en JS"
divParent.appendChild(enfanth1);

let enfantp = document.createElement("p")
enfantp.innerText = "Nouveau texte"
divParent.appendChild(enfantp)

function Supprime(idP) {
    let BodyParent = document.getElementById("monbody")
    let pRemove = document.getElementById(idP)
    BodyParent.removeChild(pRemove)
}

let BodyParent = document.getElementById("mon_titre")
let h2Nouveau = document.createElement("h2")
h2Nouveau.innerText="Titre de remplacement"
BodyParent.replaceChild(h2Nouveau,BodyParent.firstChild)
185.55.15 allopneu