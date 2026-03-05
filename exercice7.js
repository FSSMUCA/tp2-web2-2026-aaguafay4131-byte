let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantité = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;
let reduction = 0;
let état;

let sousTotal = prix * quantité;
console.log(`Sous-Total = ${sousTotal.toFixed(2)} MAD`);

codePromo = codePromo ?? "Aucun code promo appliqué";

if (codePromo !== "Aucun code promo appliqué" && estMembre == true) {
    reduction = (sousTotal * reductionPourcentage) / 100;
    console.log(`Réduction = ${reduction.toFixed(2)} MAD`);
}

let total = sousTotal - reduction;

let soldeVerif = soldeCompte - total;

if (soldeVerif >= 0) {
    état = "Paiement Accepté";
} else {
    état = "Solde Insuffisant";
}

console.log (état);

if ( état === "Paiement Accepté") {
    soldeCompte -= total;
    console.log(`Solde Compte = ${soldeCompte.toFixed(2)} MAD`);
}

console.log (
    `    =====RÉCAPITULATIF=====
    Produit    : ${nomProduit}
    Quantité   : ${quantité} 
    Prix unit  : ${prix} MAD
    Sous-total : ${sousTotal.toFixed(2)} MAD
    Réduction  : ${reduction.toFixed(2)} MAD
    Total      : ${total.toFixed(2)} MAD
    Statut     : ${état}
    Solde      : ${soldeCompte.toFixed(2)} MAD
    ========================`
)