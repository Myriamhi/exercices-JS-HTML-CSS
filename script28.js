nombre = prompt("Choisisez un nombre entre 10 et 20")
while (10 > nombre || 20 < nombre) {
    if (nombre > 20) {
        alert("plus petit!")
    }
    else if (nombre < 10) {
        alert("plus grand!")
    }
    nombre = prompt("Choisisez un nombre entre 10 et 20")

}
alert("Merci d'avoir respecté la consigne!")