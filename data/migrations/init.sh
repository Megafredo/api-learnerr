#~ INITIALIZATION
# Export variables d'environnements
export PGUSER=postgres

#* 1 - Création d'un utilisateur en BDD (with login)
# createuser [option_connexion...] [option...] [nom_utilisateur]
createuser -l -P learnerr
# Reviens à faire : createuser --login --password --pwprompt learnerr

#* 2 - Création d'une BDD ainsi que le propriétaire
# createdb [option_connexion...] [option...] [nombase] [description]
createdb -O learnerr learnerr
# Reviens à faire : createdb --owner=learnerr learnerr

#* 3 - Initialiser Sqitch
sqitch init learnerr --engine pg

