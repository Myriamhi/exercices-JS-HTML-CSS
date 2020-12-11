function BoutonSuivant() {
    let AfficheImage1 = document.getElementById("image1")
    let AfficheImage2 = document.getElementById("image2")
    let AfficheImage3 = document.getElementById("image3")
    
    if (AfficheImage1.classList.contains("display")) {
        AfficheImage1.classList.remove("display")
        AfficheImage1.classList.add("nodisplay")
        AfficheImage2.classList.remove("nodisplay")
        AfficheImage2.classList.add("display")
    }
    else if (AfficheImage2.classList.contains("display"))  {
        AfficheImage2.classList.remove("display")
        AfficheImage2.classList.add("nodisplay")
        AfficheImage3.classList.remove("nodisplay")
        AfficheImage3.classList.add("display")
    }
    else {
        AfficheImage3.classList.remove("display")
        AfficheImage3.classList.add("nodisplay")
        AfficheImage1.classList.remove("nodisplay")
        AfficheImage1.classList.add("display")
    }
}
