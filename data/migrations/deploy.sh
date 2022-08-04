#~ DEPLOY
# Export variables d'environnements
export PGUSER=learnerr
export PGPASSWORD=learnerr

# https://sqitch.org/docs/manual/sqitch-deploy/
# sqitch deploy [options] [<database>]
# sqitch deploy [options] [<database>] --to-change <change>

# Deploy Global :
sqitch deploy -d learnerr learnerr_v1
sqitch deploy -d learnerr learnerr_v2
sqitch deploy -d learnerr learnerr_v3
sqitch deploy -d learnerr learnerr_v4
sqitch deploy -d learnerr learnerr_v5
sqitch deploy -d learnerr learnerr_v6
sqitch deploy -d learnerr learnerr_v7
sqitch deploy -d learnerr learnerr_v8
sqitch deploy -d learnerr learnerr_v9
sqitch deploy -d learnerr learnerr_v10
sqitch deploy -d learnerr learnerr_v11
sqitch deploy -d learnerr learnerr_v12
sqitch deploy -d learnerr learnerr_v13

##* PUT YOUR PASSWORD !!!!!