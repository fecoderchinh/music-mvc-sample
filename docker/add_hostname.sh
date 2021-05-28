#!/bin/bash

PREFIX=emz

if [ "$(id -u)" -ne 0 ]; then echo 'Please run as root.' >&2; exit 1; fi

declare -A ip_array
# get list container
container_ids=$(docker ps | grep ${PREFIX}_mongo | grep -o -e '^\S*')
# find ip of container
for id in $container_ids
do
    name=$(docker inspect --format="{{ .Name }}" $id)
    ip=$(docker inspect --format="{{ .NetworkSettings.IPAddress }}" $id)
    if [[ -z $ip ]]
    then
        ip=$(docker inspect --format="{{ .NetworkSettings.Networks.${PREFIX}_default.IPAddress }}" $id)
    fi
    echo "${id} ${name#/*} = ${ip}"
    ip_array[${name#/${PREFIX}_*}]=${ip}
done
# echo ${ip_array}
# for index in "${!ip_array[@]}"; do echo "$index ${ip_array[$index]}"; done

touch mongodb/scripts/tmp_hostname
# add hostname for container
for index in "${!ip_array[@]}"
do
    for id in $container_ids
    do
        docker exec -u 0 -it ${id} bash -c "echo '${ip_array[$index]} $index' | tee -a /etc/hosts"
    done
    # add hostname for machine
    echo "127.0.0.1 $index" >> /etc/hosts
    echo "${ip_array[$index]} $index" >> mongodb/scripts/tmp_hostname
done