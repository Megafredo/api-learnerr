#~ VERIFY VERSION
# Export variables d'environnements
export PGUSER=postgres

#* Verify version
# sqitch verify -d learnerr learnerr_v1
# sqitch verify -d learnerr learnerr_v2
# sqitch verify -d learnerr learnerr_v3
sqitch verify -d learnerr learnerr_v4
