let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
        
    if (valeurs[i]) {
            
        console.log(`${String(valeurs[i])} -> Truthy`);

    } else {
            
        if (valeurs[i] === "") {
                
            console.log(`(Empty string) -> Falsy`);

        } else {
                
            console.log(`${String(valeurs[i])} -> Falsy`);

        }

    }

}

