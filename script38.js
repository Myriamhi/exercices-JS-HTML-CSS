function BoutonSuivant() {
    let AfficheImage1=document.getElementsById("image1")
    let AfficheImage2 = document.getElementsById("image2")
    let AfficheImage3 = document.getElementsById("image3")
    if (AfficheImage1.ClassName=="display"){
        AfficheImage1.ClassList.remove("display")
        AfficheImage1.ClassList.toggle("nodisplay")
        AfficheImage1.ClassName="display"
    }
}