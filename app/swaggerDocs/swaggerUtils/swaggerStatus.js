
const statusCode = {
    // ok
    _200: { description: 'Requête réussie.' },
    _201: { description: 'Requête réussie et donnée créé.' },
    _204: { description: 'Requête réussie, utilisateur déconnecté' },

    // error
    _400:{ description: `Mauvaise requête.` },
    _401:{ description: `Requête non autorisée` },
    _403:{ description: 'Accès refusé' },
    _404:{ description: 'Donnée non trouvée.' }
}

export { statusCode };