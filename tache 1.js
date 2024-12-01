//tache 1
async function iterateWithAsyncAwait(values) {
    for (let i = 0; i < values.length; i++) {
        console.log(values[i]);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

iterateWithAsyncAwait([1, 2, 3, 4, 5, 6, 7, 8, 9 ,10 ,11 ,12 ,13 ,14 ,15]);