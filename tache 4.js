async function functionOne() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Fonction 1 terminée");
            resolve();
        }, 1000);
    });
}

async function functionTwo() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Fonction 2 terminée");
            resolve();
        }, 1000);
    });
}

async function functionThree() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Fonction 3 terminée");
            resolve();
        }, 1000);
    });
}

async function chainedAsyncFunctions() {
    await functionOne();
    await functionTwo();
    await functionThree();
}

// Exemple d'appel de la fonction
chainedAsyncFunctions();
