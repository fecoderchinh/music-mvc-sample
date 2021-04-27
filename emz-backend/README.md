```bash
#!/bin/bash
RS_INDEX=$1
RS_NAME="rs"$1
mkdir $RS_NAME
PORT=$((27017+$RS_INDEX))
cat <<EOF > $RS_NAME.conf
systemLog:
   destination: file
   path: "var/log/mongodb/mongod.log"
   logAppend: true
storage:
   dbPath: "$RS_NAME"
   journal:
      enabled: true
processManagement:
   fork: true
net:
   bindIp: 127.0.0.1
   port: $PORT
setParameter:
   enableLocalhostAuthBypass: true
replication:
   oplogSizeMB: 10
   replSetName: "rs0"
EOF
mongod --config $RS_NAME.conf
```

```bash
# List existing mongo process
#pgrep mongo
# Kill existing process if has.
#pkill mongo
# Clear old folder if has.
rm -rf rs0 
rm -rf rs1 
rm -rf rs2
# Create log folder.
mkdir -p ./var/log/mongodb
# Create replica set 0
# . rs.sh 0
# Create replica set 1
. rs.sh 1
# Create replica set 2
. rs.sh 2
# List existing mongo process
pgrep mongo
# Connect to available host
mongo


```

```bash

rs.initiate({_id:"rs0", members: [
    {_id:0, host:"127.0.0.1:27017", priority:100}, 
    {_id:1, host:"127.0.0.1:27018", priority:50}, 
    {_id:2, host:"127.0.0.1:27019", arbiterOnly:true}]
})

```




