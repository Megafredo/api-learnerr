const status200 = { description: 'Requête réussie.' }
const status201 = { description: 'Requête réussie et donnée créé.' }
const status204 = { description: 'Requête réussie, utilisateur déconnecté' }

const error400 = { description: `Mauvaise requête.` }
const error401 = { description: `Requête non autorisée` }
const error403 = { description: 'Accès refusé' }
const error404 = { description: 'Donnée non trouvée.' }

export { status200, status201, status204, error400, error401, error404, error403 };