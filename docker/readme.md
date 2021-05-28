## Create data folder by exec
```
generate.sh
```
or running command line below:
```
mkdir redis/data
mkdir mongodb/data
mkdir mongodb/data_rs0_1
mkdir mongodb/data_rs0_2
mkdir mongodb/data_rs0_3
mkdir mysql/data
```

## For replication of mongodb
Start docker mongo1, mongo2, mongo3

### For the first time, 
#### Initial replicate config
```
start docker mongo-setup

```
#### Run shell script for add hostname of relicateSet
```
sudo ./add_hostname.sh
```