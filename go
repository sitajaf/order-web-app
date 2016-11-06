#!/usr/bin/env bash

function config () {
    cd ./client
    cp config_client.example.json config.json
    sed -i -e "s/server_host/$SERVER_HOST/g" config.json
}

eval $1;