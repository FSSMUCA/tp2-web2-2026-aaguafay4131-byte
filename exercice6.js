let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let resultNom = nom ?? "Valeur par défaut";
console.log (`nom ?? "Valeur par défaut" -> ${resultNom}`);
let resultAge = age ?? "Valeur par défaut";
console.log (`nom ?? "Valeur par défaut" -> ${resultAge}`);
let resultVille = ville ?? "Valeur par défaut";
console.log (`nom ?? "Valeur par défaut" -> ${resultVille}`);
let resultScore = score ?? "Valeur par défaut";
console.log (`nom ?? "Valeur par défaut" -> ${resultScore}`);
let resultActif = actif ?? "Valeur par défaut";
console.log (`nom ?? "Valeur par défaut" -> ${resultActif}`);

let resultNom2 = nom || "Valeur par défaut";
console.log (`nom || "Valeur par défaut" -> ${resultNom2}`);
let resultAge2 = age || "Valeur par défaut";
console.log (`nom || "Valeur par défaut" -> ${resultAge2}`);
let resultVille2 = ville || "Valeur par défaut";
console.log (`nom || "Valeur par défaut" -> ${resultVille2}`);
let resultScore2 = score || "Valeur par défaut";
console.log (`nom || "Valeur par défaut" -> ${resultScore2}`);
let resultActif2 = actif || "Valeur par défaut";
console.log (`nom || "Valeur par défaut" -> ${resultActif2}`);

if (resultNom == resultNom2) {
    console.log("nom : ??et|| -> meme résultat");
} else {
    console.log("nom : ??et|| -> résultat different");
}

if (resultAge == resultAge2) {
    console.log("age : ??et|| -> meme résultat");
} else {
    console.log("age : ??et|| -> résultat different");
}

if (resultVille == resultVille2) {
    console.log("Ville : ??et|| -> meme résultat");
} else {
    console.log("Ville : ??et|| -> résultat different");
}

if (resultScore == resultScore2) {
    console.log("Score : ??et|| -> meme résultat");
} else {
    console.log("Score : ??et|| -> résultat different");
}

if (resultActif == resultActif2) {
    console.log("Actif : ??et|| -> meme résultat");
} else {
    console.log("Actif : ??et|| -> résultat different");
}