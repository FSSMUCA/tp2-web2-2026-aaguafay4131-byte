let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log ("=====RAPPORT UTILISATEUR=====")

let nomCorrige = nom.trim();

if ( nomCorrige === "") {
    nomCorrige = "Inconnu";
}

console.log(`nom    : ${JSON.stringify(nomCorrige)}`);

let ageCorrige = Number(age);

if ( Number.isNaN(ageCorrige) || ageCorrige <= 0) {
    ageCorrige = "Valeur Invalide";
}

console.log (`Age   : ${ageCorrige}`);

if ( email.indexOf("@") <= 0 || email.indexOf(".",email.indexOf("@")) <= 0 ) {
    email = "E-Mail Invalide";
}

console.log(`email  : ${JSON.stringify(email)}`);

let scoreCorrige = parseInt(scoreJeu);

if ( Number.isNaN(scoreCorrige) ) {
    scoreCorrige = 0;
}

console.log(`scoreJeu   : ${scoreCorrige}`);

let boolvalue = ( estAdmin === "true");

console.log (`estAdmin  : ${boolvalue}`);

derniereConnexion = derniereConnexion ?? "Jamais connecté";

console.log(`derniereConnection : ${JSON.stringify(derniereConnexion)}`);

nombreConnexions = Number(nombreConnexions);

if ( nombreConnexions === 0 ) {
    nombreConnexions = "Aucune Connexion";
}

console.log (`nombreConnexion   : ${JSON.stringify(nombreConnexions)}`);