
// EX 1
// var nom = prompt("quel est votre nom");
// var affichageNom = alert("Bienvenue " + nom);


// EX 2
// const p = document.querySelector("#p1")


// function superieurA () {
//     var x = prompt("Choisis un nombre");
//     var y = prompt("Choisis un autre nombre");
//     if (x > y) {
//        p.innerHTML = "X est plus grand que Y";
//     } else {
//          p.innerHTML = "X est plus petit que Y";
        
//     } 
// }

// superieurA()

// EX 3
function appuie() {
    var para = document.querySelector("#puissance");
    var array = []
    
    var exposant = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    for (index = 0; index < exposant.length; index++) {
        const finale = console.log(Math.pow(2, index))
        

        para.innerHTML = 'voici ' + (finale);
    }
        
}
    
    
    
