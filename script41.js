let mesDivs= document.getElementsByTagName("div")
console.log("il y a "+mesDivs.length +" divs dans mon script qui contiennent : ")

for (let i=0; i<mesDivs.length; i++){
    let Cellule= mesDivs[i];
    console.log(Cellule.innerText)
    
}

let mesDivsJaunes= document.getElementsByClassName("b_yellow")
console.log("il y a "+mesDivsJaunes.length +" divs jaunes dans mon script qui contiennent : ")
for (let i=0; i<mesDivsJaunes.length; i++){
    let Cellule= mesDivs[i];
    console.log(Cellule.innerText)
    
}

selecteur = document.querySelector("#container .b_yellow")
console.log("voici le contenu de l'element identifié par le selecteur #container .b_yellow : "+ selecteur.innerText)
selecteurAll = document.querySelectorAll("#container .b_yellow")
console.log ("voici les contenus des élements identifiés par le selecteur #container .b_yellow : ")
for (let i=0; i<selecteurAll.length; i++){
    let resultatSelecteurAll= selecteurAll[i];
    console.log( resultatSelecteurAll.innerText)
}
