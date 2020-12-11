function jouer(idCell){
let Cellule= document.getElementById(idCell)
let CouleurCell="blue"
if(Cellule.classList.contains("")||Cellule.classList.contains("blue")){
    Cellule.classList.add("rose")
}
else
Cellule.classList.add("blue")

}