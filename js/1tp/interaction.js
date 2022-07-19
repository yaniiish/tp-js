function change_couleur() {
    var paragraphe = document.getElementById("important");
    console.log(paragraphe);
    paragraphe.classList.add("rouge");
}

function reset_couleur() {
    var paragraphe = document.getElementById("important");
    console.log(paragraphe);
    paragraphe.classList.remove("rouge");
    paragraphe.classList.remove("exercice");
}

function exercer() {
    var paragraphe = document.getElementById("important");
    paragraphe.classList.add("exercice");
}