async function parallelCalls(urls) {
    const promises = urls.map(url => {
        return fetch(url)  
            .then(response => response.json())
            .catch(error => `Erreur lors de l'appel à ${url}: ${error.message}`);
    });

    
    const results = await Promise.all(promises);
    
    console.log("Réponses des appels parallèles : ", results);
}


parallelCalls(["https://api.example.com/data1", "https://api.example.com/data2"]);
