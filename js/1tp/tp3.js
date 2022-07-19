var query = document.querySelector("nav ul li");
console.log("affichage de query");
console.log(query)

var queryAll_1 = document.querySelectorAll(".menu li");
console.log("Affichage de queryAll_1");
console.log(queryAll_1);
console.log("Affichage de chaque éléments de queryAll_1 par appels successifs");
console.log(queryAll_1[0]);
console.log(queryAll_1[1]);
console.log(queryAll_1[2]);

var queryAll_2 = document.querySelectorAll("nav ul li");
console.log("Affichage de queryAll_2");
console.log(queryAll_2);

console.log("Affichage de chaque éléments de queryAll_2 avec une boucle pour : ");
for (let index = 0; index < queryAll_2.length; index++) {
const element = queryAll_2[index];
console.log(element);
}


console.log("Avec FOREACH");

queryAll_2.forEach(index2 => console.log(index2))