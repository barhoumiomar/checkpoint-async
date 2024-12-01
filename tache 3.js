async function awaitCall() {
    console.log("Attente de la réponse de l'API...");
    
    try {
        // Simuler un appel API qui peut échouer
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                // Pour simuler une erreur, on utilise reject
                reject(new Error("Erreur lors de l'appel API"));
            }, 2000);
        });
        
        console.log("Réponse de l'API reçue : ", data);
    } catch (error) {
        console.error("Erreur : ", error.message);
    }
}

// Exemple d'appel de la fonction
awaitCall();
