var titre = document.querySelectorAll(".titre");
console.log(titre);

function bouton() {
    alert("Attention les titres vont changer")
    var titre = document.querySelectorAll(".titre");
    titre.forEach(e => e.innerHTML += "super intéressant !")
}
