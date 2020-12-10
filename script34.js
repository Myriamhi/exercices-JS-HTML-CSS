function AfficherTitre(){
    let titre = document.getElementById("mon_titre")
    alert(titre.innerText)
}


    
function ModifierTitre(){
    let titre= document.getElementById("mon_titre")
    titre.innerText= "Nouveau Titre"
    alert(titre.innerText)
}

let titre= document.getElementById("mon_titre")
document.write(titre.innerText)
titre.innerText= "Nouveau Titre"
document.write(titre.innerText)
