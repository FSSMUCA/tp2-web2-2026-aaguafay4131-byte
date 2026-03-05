let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let i = 0; i < nombres.length; i++) {
    if (Number.isNaN(nombres[i])) {
        console.log(`${nombres[i]} -> INVALIDE`);
        continue;
    } else if ( nombres[i] === Infinity || nombres[i] === -Infinity ) {
        console.log(`${nombres[i]} -> INFINI`);
        continue;
    } else if ( 1 / nombres [i] === -Infinity ) {
        console.log(`${nombres[i]} -> ZERO NEGATIF`);
        continue;
    } else if ( Number.isInteger(nombres[i]) && Math.abs(nombres[i]) < Number.MAX_SAFE_INTEGER ) {
        console.log (`${nombres[i]} -> ENTIER SUR`);
        continue;
    } else if ( Number.isInteger(nombres[i]) && Math.abs(nombres[i]) > Number.MAX_SAFE_INTEGER ) {
        console.log (`${nombres[i]} -> ENTIER HORS LIMITE`);
        continue;
    } else {
        console.log (`${nombres[i]} -> DECIMAL`);
    }
}