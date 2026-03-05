let tab1 = [0, 0, 0, "", null, null, NaN, 1, "\t\n"];
let tab2 = ["", "0", false, false, undefined, false, NaN, "1", 0];

let conflict = 0;

for (let i = 0; i < tab1.length; i++) {

    if (tab1[i] == tab2[i] && tab1[i] === tab2[i]) {
        
        console.log(JSON.stringify(tab1[i]) + " == " + JSON.stringify(tab2[i]) + "".padEnd(10) + " -> true | " + JSON.stringify(tab1[i]) + " === " + JSON.stringify(tab2[i]) + "".padEnd(10) + " -> true");

    } else if (tab1[i] == tab2[i] && tab1[i] !== tab2[i]) {
        
        console.log(JSON.stringify(tab1[i]) + " == " + JSON.stringify(tab2[i]) + "".padEnd(10) + " -> true | " + JSON.stringify(tab1[i]) + " === " + JSON.stringify(tab2[i]) + "".padEnd(10) + " -> false");

        conflict++;

    } else if (tab1[i] != tab2[i] && tab1[i] === tab2[i]) {
        
        console.log(JSON.stringify(tab1[i]) + " == " + JSON.stringify(tab2[i]) + "".padEnd(10) + " -> false | " + JSON.stringify(tab1[i]) + " === " + JSON.stringify(tab2[i]) + "".padEnd(10) + " -> true");

        conflict++;

    } else {
        
        console.log(JSON.stringify(tab1[i]) + " == " + JSON.stringify(tab2[i]) + "".padEnd(10) + " -> false | " + JSON.stringify(tab1[i]) + " === " + JSON.stringify(tab2[i]) + "".padEnd(10) + " -> false");

    }

}

console.log(conflict + "paire(s) où == et === donnent des résultats différents\n");