function BoutonSuivant() {
    let AfficheImage1 = document.getElementById("image1")
    let AfficheImage2 = document.getElementById("image2")
    let AfficheImage3 = document.getElementById("image3")
    
    if (AfficheImage1.ClassList.contains("display")) {
        AfficheImage1.ClassList.remove("display")
        AfficheImage1.ClassList.add("nodisplay")
        AfficheImage2.ClassList.remove("nodisplay")
        AfficheImage2.ClassList.add("display")
    }
    else if (AfficheImage2.ClassList.contains("display"))  {
        AfficheImage2.ClassList.remove("display")
        AfficheImage2.ClassList.add("nodisplay")
        AfficheImage3.ClassList.remove("nodisplay")
        AfficheImage3.ClassList.add("display")
    }
    else {
        AfficheImage3.ClassList.remove("display")
        AfficheImage3.ClassList.add("nodisplay")
        AfficheImage1.ClassList.remove("nodisplay")
        AfficheImage1.ClassList.add("display")
    }
}
