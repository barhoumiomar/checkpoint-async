async function concurrentRequests() {
    // Simuler deux appels API simultanés
    const apiCall1 = new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: "Réponse de l'API 1" });
        }, 2000);
    });

    const apiCall2 = new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: "Réponse de l'API 2" });
        }, 2000);
    });

    // Attendre que les deux requêtes soient résolues
    const [result1, result2] = await Promise.all([apiCall1, apiCall2]);
    
    console.log("Résultats combinés : ", { result1, result2 });
}

// Exemple d'appel de la fonction
concurrentRequests();
